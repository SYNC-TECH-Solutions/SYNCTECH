
import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({ name, email, message }) => (
  <div style={{ fontFamily: 'sans-serif', lineHeight: '1.6' }}>
    <h1 style={{ color: '#333' }}>New Contact Form Submission</h1>
    <p>You have received a new message from your website contact form.</p>
    <hr />
    <h2>Message Details:</h2>
    <ul>
      <li><strong>Name:</strong> {name}</li>
      <li><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></li>
    </ul>
    <h3>Message:</h3>
    <p style={{ whiteSpace: 'pre-wrap', border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
      {message}
    </p>
    <hr />
    <p style={{ fontSize: '12px', color: '#888' }}>This email was sent from the SYNC TECH website.</p>
  </div>
);
