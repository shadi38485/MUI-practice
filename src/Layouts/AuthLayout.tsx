import React from 'react'


interface AuthLayoutProps {
  children: React.ReactNode;
}
const AuthLayout:React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div>
      {/* <h1>Auth Layout</h1> */}
      {children}
    </div>
  );
};

export default AuthLayout