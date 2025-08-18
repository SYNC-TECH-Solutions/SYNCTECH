
import * as React from 'react';

interface LoginLinkEmailProps {
  loginUrl: string;
}

export const LoginLinkEmail: React.FC<Readonly<LoginLinkEmailProps>> = ({ loginUrl }) => (
  <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6', maxWidth: '600px', margin: 'auto', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
    <div style={{ backgroundColor: '#020817', padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: '#fff', margin: '0', fontSize: '24px' }}>
        SYNC<span style={{ color: '#4ade80' }}>TECH</span>
      </h1>
    </div>
    <div style={{ padding: '20px' }}>
        <h2 style={{ color: '#020817', fontSize: '22px' }}>Your Secure Login Link</h2>
        <p>You requested a secure link to log in to your SYNC TECH admin panel.</p>
        <p>Click the button below to sign in. This link is valid for 15 minutes and can only be used once.</p>
        <div style={{ textAlign: 'center', margin: '30px 0' }}>
            <a 
              href={loginUrl} 
              target="_blank" 
              style={{ 
                backgroundColor: '#4ade80', 
                color: '#020817', 
                padding: '12px 25px', 
                textDecoration: 'none', 
                borderRadius: '5px', 
                fontWeight: 'bold',
                display: 'inline-block'
              }}
            >
              Log In Securely
            </a>
        </div>
        <p>If you did not request this email, you can safely ignore it. Your account remains secure.</p>
        <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '20px 0' }} />
        <p style={{ fontSize: '12px', color: '#888' }}>
          If the button above doesn't work, you can copy and paste this URL into your browser:
          <br />
          <a href={loginUrl} style={{ color: '#4ade80', textDecoration: 'underline', wordBreak: 'break-all' }}>{loginUrl}</a>
        </p>
    </div>
    <div style={{ backgroundColor: '#f8f9fa', padding: '15px', textAlign: 'center', fontSize: '12px', color: '#888' }}>
        &copy; {new Date().getFullYear()} SYNC TECH. All rights reserved.
    </div>
  </div>
);
