const controller = require("../../controllers/studentsController");
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Matches with "/api/students"
router.route("/")
  .get(controller.findAll)
  .post(controller.create);

// Matches with "/api/students/:id"
router
  .route("/:id")
  .get(controller.findById)
  .put(controller.update)
  .delete(controller.remove);
  
  // Load Input Validation
  const validateSignupInput = require('../../validation/signup');
  const validateLoginInput = require('../../validation/login');
  
  // Load User model
  const db = require('../../models');
  
  // @route   GET api/students/Signup
  // @desc    Signup user
  // @access  Public
  router.post('/signup', (req, res) => {
    const { errors, isValid } = validateSignupInput(req.body);
  
    // Check Validation
    // if (!isValid) {
    //   // return res.status(400).json(errors);
    // }
  
    db.Students.findOne({ email: req.body.email }).then(user => {
      if (user) {
        errors.email = 'Email already exists';
        return res.status(400).json(errors);
      } else {
        const newUser = new db.Students({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password
        });
  
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => res.json(err));
          });
        });
      }
    });
  });
  
  // @route   GET api/students/Login
  // @desc    Login User / Returning JWT Token
  // @access  Public
  router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
  
    const email = req.body.email;
    const password = req.body.password;
  
    // Find user by email
    db.Students.findOne({ email }).then(user => {
      // Check for user
      if (!user) {
        errors.email = 'User not found';
        return res.status(404).json(errors);
      }
  
      // Check Password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User Matched
          const payload = { id: user.id, fullName: `${user.firstName} ${user.lastName}` }; // Create JWT Payload
  
          // Sign Token
          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 3600 },
            (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token
              });
            }
          );
        } else {
          errors.password = 'Password incorrect';
          return res.status(400).json(errors);
        }
      });
    });
  });
  
  // @route   GET api/students/current
  // @desc    Return current user
  // @access  Private
  router.get(
    '/current',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      res.json({
        id: req.user.id,
        fullName: `${req.user.firstName} ${req.user.lastName}`,
        email: req.user.email
      });
    }
  );
  
  module.exports = router;
