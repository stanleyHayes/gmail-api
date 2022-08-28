const express = require("express");
const {register} = require("../../../controllers/v1/user/authentication");

const router = express.Router({mergeParams: true});

router.route('/register').post(register);

module.exports = router;
