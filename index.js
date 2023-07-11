const app = require('./app');
const mongoose = require('mongoose');

port = 3000;

// database
dburl = "mongodb+srv://mohanraj:mohan@cluster0.r5vbpt8.mongodb.net/contact?retryWrites=true&w=majority"

mongoose.connect(dburl)
    .then((result) => {
        console.log("Database Connected")
    })
    .catch((err) => {
        console.log(err)
    })

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log("Server Listening on http://localhost:" + port);
});
