-- First, let's make the trial_users insert happen automatically via trigger
-- Update the existing trigger to also handle trial_users creation

CREATE OR REPLACE FUNCTION public.handle_trial_signup()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    -- Insert user role as regular user
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'user');
    
    -- Insert trial user data if signup included user metadata
    IF NEW.raw_user_meta_data IS NOT NULL THEN
        INSERT INTO public.trial_users (
            user_id, 
            email, 
            first_name, 
            last_name, 
            company_name, 
            job_title,
            trial_end
        )
        VALUES (
            NEW.id,
            NEW.email,
            COALESCE(NEW.raw_user_meta_data ->> 'first_name', ''),
            COALESCE(NEW.raw_user_meta_data ->> 'last_name', ''),
            COALESCE(NEW.raw_user_meta_data ->> 'company_name', ''),
            COALESCE(NEW.raw_user_meta_data ->> 'job_title', ''),
            (now() + interval '7 days')
        );
    END IF;
    
    RETURN NEW;
END;
$$;

-- Update RLS policy to be more secure now that we're using triggers
DROP POLICY IF EXISTS "Allow trial user creation" ON public.trial_users;

-- Create a simple policy since creation happens via trigger with SECURITY DEFINER
CREATE POLICY "Users can view their own trial info"
ON public.trial_users
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Super admins can manage all trial users"
ON public.trial_users
FOR ALL
USING (public.has_role(auth.uid(), 'super_admin'));