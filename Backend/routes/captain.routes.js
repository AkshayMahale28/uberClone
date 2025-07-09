// const captainController = require("../controllers/captain.controller");
// const express = require("express");
// const router = express.Router();
// const { body } = require("express-validator");
// const authMiddleware = require("../middlewares/auth.middleware");

// router.post(
//   "/register",
//   [
//     body("fullname.firstname")
//       .isString()
//       .withMessage("First name must be a string")
//       .isLength({ min: 3, max: 50 })
//       .withMessage("First name must be between 3 and 50 characters long"),

//     body("fullname.lastname")
//       .optional()
//       .isString()
//       .withMessage("Last name must be a string")
//       .isLength({ min: 3, max: 50 })
//       .withMessage("Last name must be between 3 and 50 characters long"),

//     body("email")
//       .isEmail()
//       .withMessage("Please provide a valid email address")
//       .normalizeEmail(),

//     body("password")
//       .isLength({ min: 6 })
//       .withMessage("Password must be at least 6 characters long"),

//     body("vehicle.color")
//       .isString()
//       .withMessage("Color must be a string")
//       .isLength({ min: 3 })
//       .withMessage("Color must be at least 3 characters long"),

//     body("vehicle.plate")
//       .isString()
//       .withMessage("Plate must be a string")
//       .isLength({ min: 3 })
//       .withMessage("Plate must be at least 3 characters long"),

//     body("vehicle.capacity")
//       .isInt({ min: 1 })
//       .withMessage("Capacity must be a positive integer"),

//     body("vehicle.vehicleType")
//       .isIn(["car", "bike", "auto"])
//       .isString()
//       .withMessage("Vehicle type must be a string"),
//   ],
//   captainController.registerCaptain
// );

// router.post(
//   "/login",
//   [
//     body("email")
//       .isEmail()
//       .withMessage("Please provide a valid email address")
//       .normalizeEmail(),

//     body("password")
//       .isLength({ min: 6 })
//       .withMessage("Password must be at least 6 characters long"),
//   ],
//   captainController.loginCaptain
// );

// router.get("/profile",authMiddleware.authCaptain,captainController.getCaptainProfile); 

// router.get("/logout", authMiddleware.authCaptain,captainController.logoutCaptain);

// module.exports = router;



const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const { body } = require("express-validator")
const authMiddleware = require('../middlewares/auth.middleware');


router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn([ 'car', 'motorcycle', 'auto' ]).withMessage('Invalid vehicle type')
],
    captainController.registerCaptain
)


router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    captainController.loginCaptain
)


router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile)

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain)


module.exports = router;
