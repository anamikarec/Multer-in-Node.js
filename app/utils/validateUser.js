const {body} = require('express-validator');
const validateuser = () => ([
    body("name")
    .not().isEmpty().withMessage("Please name is required")
    .isString().withMessage("name should be string"),
    body("email")
    .not().isEmpty().withMessage("Please email is required")
    .isString().withMessage("email should be string"),
    body("password")
    .not().isEmpty().withMessage("Please password is required")
    .isString().withMessage("password should be string")
])

module.exports = validateuser;