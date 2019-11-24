const mailjet = require('node-mailjet')
  .connect(process.env.MAILJET_PUBLIC_KEY, process.env.MAILJET_SECRET_KEY, {
    url: 'api.mailjet.com',
    version: 'v3.1',
    perform_api_call: true
  })

async function sendMail (receiverEmail, file, subject) {
  try {
    const senderMail = process.env.SENDER_EMAIL,
    senderName = process.env.EMAIL_SENDER_NAME,
    mailOption = {
      Messages: [
        {
          From: {
            Email: senderMail,
            Name: senderName
          },
          To: [
            {
              Email: receiverEmail
            }
          ],
          Subject: subject,
          HTMLPart: file,
        }
      ]
    }

    return await mailjet.post('send', { version: 'v3.1' }).request(mailOption)
    
  } catch (error) {
    console.error(error)

    return ({ error: 'Unable to send email' })
  }
}

module.exports = {
  sendMail
}
