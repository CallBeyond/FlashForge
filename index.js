import HTML_TEMPLATE from "./mail-template.js";
const message = "Hi there, you were emailed me through nodemailer"
const options = {
    from: "TESTING <sender@gmail.com>", // sender address
    to: "someone@gmail.com", // receiver email
    subject: "Send email in Node.JS with Nodemailer using Gmail account", // Subject line
    text: message,
    html: HTML_TEMPLATE(message),
}