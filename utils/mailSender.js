const nodemailer = require("nodemailer");

const mailSender = async (mail, title, body) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOption = {
      from: process.env.MAIL_USER,
      to: mail,
      subject: title,
      html: body,
    };
    // send email

    try {
      const result = await transporter.sendMail(mailOption);
      console.log("email send successfully");
    } catch (err) {
      console.log("mail not send");
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = mailSender;
