const express = require("express");

const {createGym, 
    addNewUserInGym,
    addNewCoachInGym,
    getAllGym, 
    getAllUserInGym, 
    getAllCoachInGym, 
    deleteUserInGym,
    deleteCoachInGym} = require("../controllers/Gym");

const gymsRouter = express.Router();

gymsRouter.post("/", createGym);
gymsRouter.get("/", getAllGym);
gymsRouter.post("/gym_user", addNewUserInGym);
gymsRouter.get("/gym_user", getAllUserInGym);
gymsRouter.delete("/gym_user", deleteUserInGym);
gymsRouter.post("/gym_coach", addNewCoachInGym)
gymsRouter.get("/gym_coach", getAllCoachInGym);
gymsRouter.delete("/delete_coach", deleteCoachInGym)

module.exports = gymsRouter