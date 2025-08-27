-- Update the status check constraint to include 'pending' status for trial users
ALTER TABLE public.trial_users 
DROP CONSTRAINT trial_users_status_check;

ALTER TABLE public.trial_users 
ADD CONSTRAINT trial_users_status_check 
CHECK (status = ANY (ARRAY['pending'::text, 'active'::text, 'expired'::text, 'cancelled'::text]));