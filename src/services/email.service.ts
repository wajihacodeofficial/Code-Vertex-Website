import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

export const emailService = {
  /**
   * Send verification code email
   */
  async sendVerificationCode(email: string, code: string): Promise<boolean> {
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.warn('EmailJS not configured. Code:', code);
      return false;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: email,
          verification_code: code,
          from_name: 'Code Vertex Software',
          reply_to: 'rehancodeofficial@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );
      return true;
    } catch (error) {
      console.error('Error sending verification email:', error);
      return false;
    }
  },

  /**
   * Send notification email
   */
  async sendNotificationEmail(
    email: string,
    subject: string,
    message: string
  ): Promise<boolean> {
    if (!EMAILJS_SERVICE_ID || !EMAILJS_PUBLIC_KEY) {
      console.warn('EmailJS not configured');
      return false;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        'template_notification', // You'll need to create this template
        {
          to_email: email,
          subject,
          message,
          from_name: 'Code Vertex Software',
          reply_to: 'rehancodeofficial@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );
      return true;
    } catch (error) {
      console.error('Error sending notification email:', error);
      return false;
    }
  },

  /**
   * Send welcome email to new client
   */
  async sendWelcomeEmail(email: string, fullName: string): Promise<boolean> {
    if (!EMAILJS_SERVICE_ID || !EMAILJS_PUBLIC_KEY) {
      console.warn('EmailJS not configured');
      return false;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        'template_welcome', // You'll need to create this template
        {
          to_email: email,
          full_name: fullName,
          from_name: 'Code Vertex Software',
          reply_to: 'rehancodeofficial@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );
      return true;
    } catch (error) {
      console.error('Error sending welcome email:', error);
      return false;
    }
  },
};
