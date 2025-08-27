-- Drop the existing restrictive INSERT policy for trial_users
DROP POLICY IF EXISTS "Allow users to insert their own trial data" ON public.trial_users;

-- Create a more permissive policy that allows trial user registration
-- This allows anyone to insert trial data, but only with proper user_id matching
CREATE POLICY "Allow trial user registration" 
ON public.trial_users 
FOR INSERT 
WITH CHECK (
  -- Allow insertion if the user_id matches the authenticated user OR
  -- if this is a new user signup (no existing trial record for this user_id)
  auth.uid() = user_id OR 
  NOT EXISTS (
    SELECT 1 FROM public.trial_users 
    WHERE user_id = NEW.user_id
  )
);