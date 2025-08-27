-- Add existing users to trial_users table
INSERT INTO public.trial_users (user_id, email, first_name, last_name, company_name, job_title, status)
VALUES 
  ('c9b855bd-2fcc-425c-bbf2-4e6a77768836', 'maniking6589@gmail.com', 'Arsal', 'Javed', 'Demo Company', 'Security Analyst', 'active'),
  ('8408be5d-c208-4d32-8b02-4ff9788a7ea6', 'usmanshehzad617@gmail.com', 'Super', 'Admin', 'DarkThreat', 'Administrator', 'active')
ON CONFLICT (user_id) DO NOTHING;