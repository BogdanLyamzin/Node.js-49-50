const express = require("express");

const ctrl = require("../../controllers/books")

const {ctrlWrapper} = require("../../helpers")

const {validateBody} = require("../../middlewares")

const schemas = require("../../schemas/books")

const router = express.Router();

// const getAllCtrl = ctrlWrapper(ctrl.getAll);
/*
 const getAllCtrl = async(req, res, next) => {
        try {
            await ctrl.getAll(req, res, next)
        }
        catch(error) {
            next(error)
        }
    }
*/
// router.get("/", getAllCtrl)
router.get("/", ctrlWrapper(ctrl.getAll))

router.get("/:id", ctrlWrapper(ctrl.getById))

router.post("/",  ctrlWrapper(ctrl.add))

router.put("/:id", validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateById))

router.delete("/:id", ctrlWrapper(ctrl.removeById))

module.exports = router;