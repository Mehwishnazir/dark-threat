-- Remove foreign key constraint from trial_users table
ALTER TABLE public.trial_users DROP CONSTRAINT IF EXISTS trial_users_user_id_fkey;

-- Insert sample trial users for admin dashboard display
INSERT INTO public.trial_users (user_id, email, first_name, last_name, company_name, job_title, status, trial_end)
VALUES 
  ('c9b855bd-2fcc-425c-bbf2-4e6a77768836', 'maniking6589@gmail.com', 'Arsal', 'Javed', 'TechCorp Solutions', 'Security Analyst', 'active', (now() + interval '5 days')),
  ('550e8400-e29b-41d4-a716-446655440001', 'john.doe@company.com', 'John', 'Doe', 'CyberDefense Inc', 'IT Manager', 'active', (now() + interval '10 days')),
  ('550e8400-e29b-41d4-a716-446655440002', 'jane.smith@enterprise.com', 'Jane', 'Smith', 'Global Security Ltd', 'CISO', 'expired', (now() - interval '2 days')),
  ('550e8400-e29b-41d4-a716-446655440003', 'mike.wilson@startup.io', 'Mike', 'Wilson', 'StartupTech', 'Founder', 'cancelled', (now() + interval '3 days')),
  ('550e8400-e29b-41d4-a716-446655440004', 'sarah.jones@consulting.com', 'Sarah', 'Jones', 'SecureConsult', 'Senior Analyst', 'active', (now() + interval '7 days'));