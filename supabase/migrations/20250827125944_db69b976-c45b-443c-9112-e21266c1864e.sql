-- Remove any trial users from user_roles table
-- Trial users should only exist in trial_users table, not user_roles
DELETE FROM public.user_roles 
WHERE user_id IN (
  SELECT user_id FROM public.trial_users
);

-- Create a policy to prevent trial users from being added to user_roles
CREATE POLICY "Prevent trial users from getting roles" 
ON public.user_roles 
FOR INSERT 
WITH CHECK (
  NOT EXISTS (
    SELECT 1 FROM public.trial_users 
    WHERE user_id = user_roles.user_id
  )
);

-- Create a policy to prevent trial users from updating roles
CREATE POLICY "Prevent trial users from updating roles" 
ON public.user_roles 
FOR UPDATE 
USING (
  NOT EXISTS (
    SELECT 1 FROM public.trial_users 
    WHERE user_id = user_roles.user_id
  )
);