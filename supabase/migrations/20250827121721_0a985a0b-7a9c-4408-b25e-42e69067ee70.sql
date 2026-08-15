-- Remove the trigger that automatically adds users to user_roles table
-- This trigger is causing trial users to be added to user_roles instead of staying only in trial_users

-- Drop the trigger if it exists
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Drop the function that was automatically adding users to user_roles
DROP FUNCTION IF EXISTS public.handle_trial_signup();

-- Also remove any existing duplicate RLS policies to clean up
DROP POLICY IF EXISTS "Allow trial signup insertion" ON public.trial_users;