const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "jasonarriaza10+flashforge@gmail.com",
    pass: "tersbehqlinwtsjy",
  },
});

/** 
 * Create reusable sendmail function 
 * @param {object} options - mail options (to, subject, text, html)
 * @param {function} callback - callback function to handle response
 */
const sendEmail = (options, callback) => {
  // Logic to send email using Nodemailer
  transporter.sendMail(options, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      callback(info);
    }
  });
};

module.exports = sendEmail;
