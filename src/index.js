const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");

const keys = require("./config/keys");

const userAuthV1Routes = require("./routes/v1/user/authentication");

mongoose.connect(keys.mongoDBURI).then(value => {
    console.log(`Connected to MongoDB on database ${value.connection.db.databaseName}`);
}).catch(error => {
    console.log(`Error: ${error.message}`);
});

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));

app.use('/api/v1/auth/user', userAuthV1Routes);

app.listen(keys.port || process.env.PORT, () => {
    console.log(`Connected to server in ${keys.nodeENV} on port ${keys.port}`);
});
