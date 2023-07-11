const accountSid = 'AC8152dc900f38e65a40b43a3633ce959b';
const authToken = 'af0202113ca1ef69bbe72de2e3cc869a';
const client = require('twilio')(accountSid, authToken);


const invite = (req,res) => {
    try {
        const { recipientNumber } = req.body
        const url="https://play.google.com/store/apps/details?id=com.pixalive"; 
        client.messages
        .create({
            body: `join Pixalive: ${url}`,
            from: '+19282723428',

            to: recipientNumber
        })
        res.json({
            status: true
        })
    }
    catch(err) {
        console.log(err)
    }
}

module.exports = {invite}