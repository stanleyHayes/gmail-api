const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const userAuthV1Routes = require("./routes/v1/user/authentication");

const app = express();
app.use(express.json());
app.use(morgan('tiny'));

app.use('/api/v1/user', userAuthV1Routes);

app.listen();
