module.exports = app => {
    const tradies = require("../controllers/tradie.controller");
    const router = require("express").Router();
    // Create a new Tradie
    router.post("/add", tradies.create);
    // Retrieve all Tradies
    router.get("/", tradies.findAll);
    // Retrieve a single Tradie with id
    router.get("/get:id", tradies.findOne);
    // Update a Tradie with id
    router.put("/update:id", tradies.update);
    app.use('/api/tradies', router);
};
