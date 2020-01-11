const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
    auth: {
        api_key: '548a652f263dd0d46f87663feae3b845-713d4f73-44d8b8a9',
        domain: 'sandboxe2362986e95f472ab2a47f51cc23bc49.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'wally9141@hotmail.com',
        subject,
        text
    };



    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            cb(err, null);

        } else {
            cb(null, data);
        }
    });
}

module.exports = sendMail;