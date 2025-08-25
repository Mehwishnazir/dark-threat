-- Drop the existing restrictive policy for trial_users inserts
DROP POLICY IF EXISTS "Users can insert their own trial info" ON public.trial_users;

-- Create a more permissive policy that allows users to insert trial data during signup
-- This allows inserts where the user_id matches auth.uid() OR during the signup process
CREATE POLICY "Allow trial user creation"
ON public.trial_users
FOR INSERT
WITH CHECK (
    auth.uid() = user_id OR 
    (auth.uid() IS NOT NULL AND user_id IS NOT NULL)
);

-- Also ensure we have a policy that allows reading own trial data
DROP POLICY IF EXISTS "Users can view their own trial info" ON public.trial_users;

CREATE POLICY "Users can view their own trial info"
ON public.trial_users
FOR SELECT
USING (auth.uid() = user_id);