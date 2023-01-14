const sgMail = require("@sendgrid/mail")
require("dotenv").config()

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const email = {
    to: "mibep37900@tingn.com",
    from: "bogdan.lyamzin.d@gmail.com",
    subject: "Verify email",
    html: `<p>Verfify email</p>`
}

sgMail.send(email)
    .then(()=> console.log("Email send success"))
    .catch(error => console.log(error.message))