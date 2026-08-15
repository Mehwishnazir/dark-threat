-- Fix RLS policy for trial_users to allow insertion during signup
-- Drop the existing restrictive policy
DROP POLICY IF EXISTS "Allow trial user creation" ON public.trial_users;

-- Create a more permissive policy that allows authenticated users to insert their own records
CREATE POLICY "Allow authenticated users to create trial records" 
ON public.trial_users 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Also allow users to insert during signup process (when auth.uid() might not be immediately available)
-- This handles the case where the user is being created
CREATE POLICY "Allow trial signup insertion" 
ON public.trial_users 
FOR INSERT 
TO authenticated
WITH CHECK (user_id IS NOT NULL);