const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/crud-db', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})