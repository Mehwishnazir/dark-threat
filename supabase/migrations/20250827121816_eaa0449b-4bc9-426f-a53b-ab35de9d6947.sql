-- First drop the trigger, then the function
DROP TRIGGER IF EXISTS on_auth_user_created_trial ON auth.users;
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Now drop the function
DROP FUNCTION IF EXISTS public.handle_trial_signup() CASCADE;