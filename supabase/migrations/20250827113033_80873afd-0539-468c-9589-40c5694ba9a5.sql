-- Assign super_admin role to the first user for testing
INSERT INTO public.user_roles (user_id, role) 
VALUES ('7fd22909-8743-46a3-bc40-f774addeda2a', 'super_admin')
ON CONFLICT (user_id, role) DO NOTHING;