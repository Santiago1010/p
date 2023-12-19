const nodemailer = require('nodemailer');
const config = require('./../config');
const nodeMailerConfig = config.nodeMailer;
class EmailUtils {
  static async sendEmail(infoMail) {
    // infomail
    // {
    //  to: email,
    //  cc: email,
    //  subject: 'subject',
    //  text: 'text',
    //  htlm: 'html'
    // }
    const transporter = nodemailer.createTransport({
      host: nodeMailerConfig.host,
      port: 465,
      secure: true, // secure:true for port 465, secure:false for port 587
      tls: {
        rejectUnauthorized: false,
      },
      auth: {
        user: nodeMailerConfig.user,
        pass: nodeMailerConfig.password,
      },
    });
    const { to, cc, subject, text, html } = infoMail;
    return await transporter.sendMail({
      from: nodeMailerConfig.from,
      to,
      cc,
      subject,
      text,
      html,
    });
  }
}

module.exports = EmailUtils;
