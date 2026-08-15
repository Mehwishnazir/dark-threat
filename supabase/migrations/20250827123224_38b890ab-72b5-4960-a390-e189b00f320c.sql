-- Add INSERT policy to allow users to create their own trial records
CREATE POLICY "Allow users to insert their own trial data" ON public.trial_users
FOR INSERT 
WITH CHECK (auth.uid() = user_id);