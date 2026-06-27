import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, eventType, date, city, vision } = body;

    // Validate required fields
    if (!name || !email || !phone || !city || !vision) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone, city, and vision are required.' },
        { status: 400 }
      );
    }

    // Build standard email HTML template matching Flybit's branding (Black & Gold luxury theme)
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Event Inquiry - Flybit Dynamics</title>
  <style>
    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      background-color: #050505;
      color: #e5e5e7;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      width: 100%;
      background-color: #050505;
      padding: 40px 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #0d0d0d;
      border: 1px solid rgba(201, 168, 76, 0.3);
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
    }
    .header {
      background-color: #000000;
      padding: 30px;
      text-align: center;
      border-bottom: 1px solid rgba(201, 168, 76, 0.15);
    }
    .header h1 {
      color: #c9a84c;
      margin: 0;
      font-size: 22px;
      letter-spacing: 4px;
      font-weight: 300;
      text-transform: uppercase;
      font-family: Georgia, serif;
    }
    .content {
      padding: 40px 35px;
    }
    .eyebrow {
      color: #c9a84c;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 3px;
      margin-bottom: 25px;
      font-weight: 600;
    }
    .details-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 35px;
    }
    .details-table td {
      padding: 14px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      vertical-align: top;
    }
    .label {
      color: #8a8a93;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      width: 35%;
      font-weight: bold;
    }
    .value {
      color: #ffffff;
      font-size: 14px;
    }
    .vision-container {
      margin-top: 25px;
    }
    .vision-title {
      color: #c9a84c;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-bottom: 12px;
      font-weight: bold;
    }
    .vision-box {
      background-color: #141416;
      border-left: 3px solid #c9a84c;
      padding: 20px;
      border-radius: 2px;
    }
    .vision-text {
      color: #e5e5e7;
      font-size: 14px;
      line-height: 1.6;
      white-space: pre-wrap;
      margin: 0;
    }
    .footer {
      background-color: #000000;
      padding: 25px;
      text-align: center;
      font-size: 11px;
      color: #636366;
      border-top: 1px solid rgba(201, 168, 76, 0.1);
      letter-spacing: 0.5px;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <img src="cid:logo" alt="Flybit Dynamics" style="height: 44px; width: auto; display: block; margin: 0 auto;" />
      </div>
      <div class="content">
        <div class="eyebrow">✦ New Inquiry Details</div>
        <table class="details-table">
          <tr>
            <td class="label">Full Name</td>
            <td class="value" style="font-weight: 500;">${name}</td>
          </tr>
          <tr>
            <td class="label">Email</td>
            <td class="value"><a href="mailto:${email}" style="color: #c9a84c; text-decoration: none; border-bottom: 1px dashed rgba(201,168,76,0.4);">${email}</a></td>
          </tr>
          <tr>
            <td class="label">Phone</td>
            <td class="value"><a href="tel:${phone}" style="color: #c9a84c; text-decoration: none;">${phone}</a></td>
          </tr>
          <tr>
            <td class="label">Event Type</td>
            <td class="value">${eventType || 'Not Specified'}</td>
          </tr>
          <tr>
            <td class="label">Preferred Date</td>
            <td class="value">${date || 'Not Specified'}</td>
          </tr>
          <tr>
            <td class="label">City</td>
            <td class="value">${city}</td>
          </tr>
        </table>
        
        <div class="vision-container">
          <div class="vision-title">Event Vision & Details</div>
          <div class="vision-box">
            <p class="vision-text">${vision}</p>
          </div>
        </div>
      </div>
      <div class="footer">
        This is an automated request generated from the Flybit Dynamics contact page form.
      </div>
    </div>
  </div>
</body>
</html>
    `;

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');

    const targetEmail = 'flybitdynamics@gmail.com';

    // If SMTP environment variables are missing, simulate a successful log submission and return success in dev/test
    if (!smtpUser || !smtpPass) {
      console.warn('⚠️ SMTP credentials (SMTP_USER/SMTP_PASS) are not configured in .env.local.');
      console.log('--- Submitting simulated email ---');
      console.log(`To: ${targetEmail}`);
      console.log(`Subject: New Event Inquiry from ${name}`);
      console.log(`Form Data:`, body);
      console.log('----------------------------------');

      return NextResponse.json({
        success: true,
        mocked: true,
        message: 'SMTP credentials missing, but form submission simulated successfully.',
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for 587 or other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const logoPath = path.join(process.cwd(), 'public', 'logo.png');

    const mailOptions = {
      from: `"${name} (Flybit Contact Form)" <${smtpUser}>`,
      to: targetEmail,
      replyTo: email,
      subject: `✦ New Event Inquiry from ${name} - ${eventType || 'General'}`,
      html: emailHtml,
      attachments: [
        {
          filename: 'logo.png',
          path: logoPath,
          cid: 'logo'
        }
      ]
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully.',
    });
  } catch (error: any) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json(
      { error: 'Internal Server Error. Please try again later.', details: error.message },
      { status: 500 }
    );
  }
}
