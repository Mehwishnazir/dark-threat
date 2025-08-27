-- Fix super_admin role assignment for current user
DELETE FROM public.user_roles WHERE role = 'super_admin';

-- Assign super_admin role to the current logged-in user
INSERT INTO public.user_roles (user_id, role) 
VALUES ('8408be5d-c208-4d32-8b02-4ff9788a7ea6', 'super_admin');