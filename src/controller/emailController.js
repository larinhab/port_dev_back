const emailService = require('../service/emailService')

const sendEmail = async(request, response) => {
    const { name, email, phone, message } = request.body

    try{
        await emailService.sendEmail({ name, email, phone, message })
            response.status(200).json({ success: true, message: "E-mail enviado com sucesso!"})
    }catch(error){
            response.status(500).json({ success: false, messagem: "Erro ao enviar e-mail"})
    }
}

module.exports = { sendEmail }