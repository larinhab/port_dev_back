const nodemailer = require('nodemailer')

const sendEmail = async({ name, email, phone, message }) => {
    const transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'larabviana@outlook.com',
            pass: ''
        }
    })

    const mailOptions = {
        from: email,
        to: 'larabviana@outlook.com',
        subject: `Novo email de ${name}`,
        text: messagem,
    }

    await transporter.sendMail(mailOptions)
}

module.exports = { sendEmail }