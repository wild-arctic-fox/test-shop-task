const { body } = require("express-validator");

exports.providerDataValidator = [
  // check email format
  body("email").isEmail().withMessage("Incorrect email"),

  // check name format
  body("name", "Incorrect type of name\n 3 alphanumeric symbols is required")
    .isLength({ min: 3, max: 20 })
    .isAlphanumeric()
    .trim(),

  // check phome format
  body("phone", "Incorrect  phone").isNumeric(),
];
