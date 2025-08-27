-- Remove the remaining trial user from user_roles table
DELETE FROM public.user_roles 
WHERE user_id IN (
  SELECT user_id FROM public.trial_users 
  WHERE email = 'maniking6589@gmail.com'
);