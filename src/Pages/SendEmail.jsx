import React, { useState } from 'react';
import axios from 'axios';

const SendEmail = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const sendEmail = async () => {
    try {
      const response = await axios.post('http://localhost:5000/send-email', {
        recipient,
        subject,
        message,
      });
      if (response.data.success) {
        setResponseMessage('Email sent successfully!');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setResponseMessage('Failed to send email');
    }
  };

  return (
    <div>
      <h1>Send Email</h1>
      <input
        type="email"
        placeholder="Recipient Email"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <button onClick={sendEmail}>Send Email</button>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default SendEmail;
