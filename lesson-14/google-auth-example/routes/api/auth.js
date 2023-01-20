const express = require("express");

const ctrl = require("../../controllers/auth")

const {ctrlWrapper} = require("../../helpers")

const {validateBody, authenticate, passport} = require("../../middlewares")

const {schemas} = require("../../models/user")

const router = express.Router();

router.get("/google", passport.authenticate("google", {
    scope: ["email", "profile"]
}))

router.get("/google/callback", passport.authenticate("google", {session: false}), ctrlWrapper(ctrl.google))

// signup
router.post("/register", validateBody(schemas.registerSchema), ctrlWrapper(ctrl.register))

// signin
router.post("/login", validateBody(schemas.loginSchema), ctrlWrapper(ctrl.login))

router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent))

router.post("/logout", authenticate, ctrlWrapper(ctrl.logout))

module.exports = router;