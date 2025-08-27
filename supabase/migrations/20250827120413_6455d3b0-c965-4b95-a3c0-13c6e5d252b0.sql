-- Update trial_users default status to 'pending'
ALTER TABLE public.trial_users 
ALTER COLUMN status SET DEFAULT 'pending';