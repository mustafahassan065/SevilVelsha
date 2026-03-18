import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, question } = req.body;

    // Validate required fields
    if (!name || !email || !question) {
        return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ success: false, error: 'Invalid email format' });
    }

    const { data, error } = await resend.emails.send({
        from: 'Sevil Velsha <onboarding@resend.dev>',
        to: 'sevilvelsha@gmail.com',
        reply_to: email,
        subject: `New Inquiry from ${name} — Sevil Velsha`,
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Form Submission</title>
</head>
<body style="margin:0; padding:0; background-color:#f0f2f5; font-family:'Segoe UI', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f2f5; padding: 40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.10);">

          <!-- HEADER -->
          <tr>
            <td style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 60%, #4a3728 100%); padding: 40px 48px 32px; text-align:center;">
              <p style="margin:0 0 8px 0; font-size:13px; letter-spacing:3px; text-transform:uppercase; color:#c9a96e; font-weight:600;">Sevil Velsha</p>
              <h1 style="margin:0; font-size:26px; font-weight:700; color:#ffffff; letter-spacing:-0.5px;">New Contact Inquiry</h1>
              <p style="margin:12px 0 0; font-size:14px; color:#a0a0a0;">A visitor has reached out through your website</p>
            </td>
          </tr>

          <!-- GOLDEN DIVIDER -->
          <tr>
            <td style="background: linear-gradient(90deg, #c9a96e, #e8d5a3, #c9a96e); height:3px;"></td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding: 40px 48px;">

              <!-- Intro -->
              <p style="margin: 0 0 28px; font-size:15px; color:#555555; line-height:1.6;">
                You have received a new message from your website's contact form. Please find the details below.
              </p>

              <!-- Info Cards -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding-bottom:12px;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f6f2; border-left:4px solid #c9a96e; border-radius:8px; padding:16px 20px;">
                      <tr>
                        <td>
                          <p style="margin:0 0 4px; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1.5px; color:#c9a96e;">Full Name</p>
                          <p style="margin:0; font-size:16px; font-weight:600; color:#1a1a1a;">${name}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:24px;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f6f2; border-left:4px solid #c9a96e; border-radius:8px; padding:16px 20px;">
                      <tr>
                        <td>
                          <p style="margin:0 0 4px; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1.5px; color:#c9a96e;">Email Address</p>
                          <a href="mailto:${email}" style="margin:0; font-size:16px; font-weight:600; color:#1a1a1a; text-decoration:none;">${email}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message Block -->
              <p style="margin:0 0 10px; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1.5px; color:#c9a96e;">Message / Question</p>
              <div style="background:#1a1a1a; border-radius:10px; padding:24px 28px;">
                <p style="margin:0; font-size:15px; color:#e8e8e8; line-height:1.8; white-space:pre-wrap;">${question}</p>
              </div>

              <!-- Reply CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=Re: Your inquiry to Sevil Velsha"
                       style="display:inline-block; background:linear-gradient(135deg, #c9a96e, #e8d5a3); color:#1a1a1a; font-weight:700; font-size:14px; letter-spacing:0.5px; padding:14px 36px; border-radius:50px; text-decoration:none;">
                      ✉️ &nbsp; Reply to ${name}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER DIVIDER -->
          <tr>
            <td style="padding: 0 48px;">
              <hr style="border:none; border-top:1px solid #eeeeee; margin:0;" />
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="padding:24px 48px 32px; text-align:center;">
              <p style="margin:0 0 4px; font-size:12px; color:#aaaaaa;">This email was automatically generated from the contact form on</p>
              <p style="margin:0; font-size:12px; color:#aaaaaa;"><strong style="color:#c9a96e;">sevilvelsha.com</strong> &nbsp;·&nbsp; Please do not reply to this automated notification.</p>
            </td>
          </tr>

        </table>

        <!-- Bottom note -->
        <p style="margin:20px 0 0; font-size:11px; color:#aaaaaa; text-align:center;">© ${new Date().getFullYear()} Sevil Velsha. All rights reserved.</p>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
        text: `New Inquiry from ${name}\n\nEmail: ${email}\n\nMessage:\n${question}\n\n---\nThis message was sent via the contact form on sevilvelsha.com.`,
    });

    if (error) {
        console.error('Resend error:', error);
        return res.status(500).json({ success: false, error: error.message });
    }

    return res.status(200).json({ success: true, id: data.id });
}
