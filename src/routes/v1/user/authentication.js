const express = require("express");
const {register} = require("../../../controllers/v1/user/authentication");

const router = express.Router({mergeParams: true});

router.route('/').post(register);

module.exports = router;
