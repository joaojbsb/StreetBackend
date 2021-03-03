const mongoose = require('mongoose');

const url = "mongodb+srv://usuario:servidor10@cluster0.heiru.mongodb.net/StreeFighter?retryWrites=true&w=majority";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;