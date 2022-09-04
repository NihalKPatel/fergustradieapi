module.exports = app => {
    const tradies = require("../controllers/tradie.controller");
    const router = require("express").Router();
    // Create a new Tradie
    router.post("/", tradies.create);
    // Retrieve all Tradies
    router.get("/", tradies.findAll);
    // Retrieve a single Tradie with id
    router.get("/:id", tradies.findOne);
    // Update a Tradie with id
    router.put("/:id", tradies.update);
    // Delete a Tradie with id
    router.delete("/:id", tradies.delete);
    app.use('/api/tradies', router);
};
