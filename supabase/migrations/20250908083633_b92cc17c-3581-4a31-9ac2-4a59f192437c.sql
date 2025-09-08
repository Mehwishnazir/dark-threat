-- Drop existing tables and recreate with new schema
DROP TABLE IF EXISTS public.trial_users CASCADE;
DROP TABLE IF EXISTS public.user_roles CASCADE;
DROP TYPE IF EXISTS public.app_role CASCADE;
DROP FUNCTION IF EXISTS public.has_role(uuid, app_role) CASCADE;

-- Create role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'superadmin', 'trialuser');

-- Create main users table with business fields
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE, -- References auth.users
  business_email TEXT NOT NULL UNIQUE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  job_title TEXT NOT NULL,
  company_name TEXT NOT NULL,
  company_domain TEXT NOT NULL,
  country TEXT NOT NULL,
  
  -- Role and subscription management
  role public.app_role DEFAULT 'trialuser',
  subscription_status TEXT CHECK (subscription_status IN ('trial', 'active', 'expired', 'canceled')) DEFAULT 'trial',
  
  -- Trial management
  trial_start TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  trial_end TIMESTAMP WITH TIME ZONE DEFAULT (NOW() + INTERVAL '7 days'),
  email_verified BOOLEAN DEFAULT FALSE,
  account_activated BOOLEAN DEFAULT FALSE,
  
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON public.users
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Create security definer function to check user role
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE SECURITY DEFINER
SET search_path = public
AS $$
    SELECT EXISTS (
        SELECT 1
        FROM public.users
        WHERE user_id = _user_id
        AND role = _role
    )
$$;

-- RLS Policies
-- 1. Trial users can view their own record
CREATE POLICY "trial_users_can_view_own"
ON public.users 
FOR SELECT 
USING (auth.uid() = user_id AND role = 'trialuser');

-- 2. Trial users can update their own record (except role and subscription)
CREATE POLICY "trial_users_can_update_own"
ON public.users 
FOR UPDATE 
USING (auth.uid() = user_id AND role = 'trialuser');

-- 3. Admins and superadmins can view all records
CREATE POLICY "admins_can_view_all"
ON public.users 
FOR SELECT 
USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'superadmin'));

-- 4. Admins and superadmins can manage all records
CREATE POLICY "admins_can_manage_all"
ON public.users 
FOR ALL 
USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'superadmin'));

-- 5. Allow user registration (insert)
CREATE POLICY "allow_user_registration"
ON public.users 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create function to automatically create user profile
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  -- Only create profile if metadata exists
  IF NEW.raw_user_meta_data IS NOT NULL THEN
    INSERT INTO public.users (
      user_id,
      business_email,
      first_name,
      last_name,
      job_title,
      company_name,
      company_domain,
      country
    ) VALUES (
      NEW.id,
      NEW.email,
      COALESCE(NEW.raw_user_meta_data ->> 'first_name', ''),
      COALESCE(NEW.raw_user_meta_data ->> 'last_name', ''),
      COALESCE(NEW.raw_user_meta_data ->> 'job_title', ''),
      COALESCE(NEW.raw_user_meta_data ->> 'company_name', ''),
      COALESCE(NEW.raw_user_meta_data ->> 'company_domain', ''),
      COALESCE(NEW.raw_user_meta_data ->> 'country', '')
    );
  END IF;
  RETURN NEW;
END;
$$;

-- Create trigger for new user registration
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();