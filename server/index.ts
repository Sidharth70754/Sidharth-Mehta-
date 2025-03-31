import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Google Sheets API setup
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    project_id: process.env.GOOGLE_PROJECT_ID,
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    console.log('Email sent successfully:', info);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    });
  }
});

// Add this endpoint to your Express server
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant for a portfolio website. You can help visitors learn more about Sidharth Mehta, his skills, projects, and experience. Keep responses concise and professional."
        },
        {
          role: "user",
          content: message
        }
      ],
    });

    res.json({ response: completion.data.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to get response from AI' });
  }
});

// Store contact form submission in Google Sheets
app.post('/api/store-contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const timestamp = new Date().toISOString();

    // Append data to Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:E',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[timestamp, name, email, subject, message]],
      },
    });

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'sidharthmeht2004@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: 'Form submission stored and email sent' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: 'Failed to process form submission' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Email configuration:', {
    user: process.env.EMAIL_USER,
    // Don't log the actual password
    hasPassword: !!process.env.EMAIL_PASS
  });
}); 