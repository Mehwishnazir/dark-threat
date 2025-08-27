-- Drop the existing restrictive INSERT policy for trial_users
DROP POLICY IF EXISTS "Allow users to insert their own trial data" ON public.trial_users;

-- Create a policy that allows trial user registration during signup
-- This is less restrictive to allow trial registrations to work
CREATE POLICY "Allow trial user registration" 
ON public.trial_users 
FOR INSERT 
WITH CHECK (true);  -- Allow all inserts for now, we'll secure it with application logic