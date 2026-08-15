import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function SignIn() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/auth', { replace: true });
  }, [navigate]);

  return (
    <Helmet>
      <title>Sign In | DarkThreat.ai</title>
    </Helmet>
  );
}
