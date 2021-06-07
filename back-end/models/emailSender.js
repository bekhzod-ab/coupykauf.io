const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "mail.coding-school.org",
  port: 465,
  auth: {
    user: "coupykauf@coding-school.org",
    pass: "G5Sc&b*5@_y[",
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});
function sendEmail( email, subject,  message, callback) {
  const mailOption = {
    from: "coupykauf@coding-school.org",
    to: email,
    subject: subject,
    html:  message,
  };
  transporter.sendMail(mailOption, function (error, info) {
    if (error) {
      console.log(error);
      callback(false);
    } else {
      callback(true);
    }
  });
}
module.exports = { sendEmail };