
import React from 'react';

interface AuthGuardProps {
  children: React.ReactNode;
  roles?: ('admin' | 'investor' | 'project_owner')[];
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  // Simple pass-through component - no auth required
  return <>{children}</>;
};

export default AuthGuard;
