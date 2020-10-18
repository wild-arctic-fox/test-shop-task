const { body } = require("express-validator");

exports.providerDataValidator = [
  // check email format
  body("email").isEmail().withMessage("Incorrect email"),

  // check name format
  body("name", "Incorrect type of name\n 3 alphanumeric symbols is required")
    .isLength({ min: 3, max: 20 })
    .isAlphanumeric()
    .trim(),

  // check phone format
  body("phone", "Incorrect  phone").isNumeric(),
];

exports.productDataValidator = [
  // check name format
  body("name", "Incorrect type of name\n 2 alphanumeric symbols is required")
    .isLength({ min: 2 })
    .isAlphanumeric()
    .trim(),

  // check category format
  body(
    "category",
    "Incorrect type of category\n 3 alphanumeric symbols is required"
  )
    .isLength({ min: 3 })
    .isAlphanumeric()
    .trim(),

  // check price format
  body("price", "Incorrect  price").isNumeric(),

  // check measurability format
  body(
    "measurability",
    "Incorrect type of measurability\n 1 alphanumeric symbols is required"
  )
    .isLength({ min: 1 })
    .isAlpha()
    .trim(),

  // check amount format
  body("amount", "Incorrect  amount").isNumeric(),

];
