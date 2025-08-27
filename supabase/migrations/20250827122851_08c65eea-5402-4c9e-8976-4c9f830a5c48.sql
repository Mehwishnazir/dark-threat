-- Remove only the problematic policies that block trial registration
-- Keep the super admin policies intact
DROP POLICY IF EXISTS "Allow authenticated users to create trial records" ON public.trial_users;
DROP POLICY IF EXISTS "Allow trial signup insertion" ON public.trial_users;
DROP POLICY IF EXISTS "Users can view their own trial info" ON public.trial_users;