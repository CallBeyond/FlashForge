// Import the SENDMAIL function from mailer.js
const SENDMAIL = require("./mailer.js");

// Define email message options
const message = "This is a test email sent from Node.js using Nodemailer!";
const options = {
    from: "jasonarriaza10+flashforge@gmail.com", // Sender address
    to: "jasonarriaza10@gmail.com", // Receiver email
    subject: "Test Email", // Subject line
    text: message,
    html: `<p>${message}</p>` // HTML content (can be same as text content for simplicity)
};

// Call the SENDMAIL function with the options and a callback function
SENDMAIL(options, (info) => {
    console.log("Email sent successfully");
    console.log("MESSAGE ID: ", info.messageId);
});
