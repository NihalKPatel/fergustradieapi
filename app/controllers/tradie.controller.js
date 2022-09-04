const db = require("../models");
const Tradie = db.tradies;
const Op = db.Sequelize.Op;
// Create and Save a new Tradie
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a Tradie
    const tradie = {
        name: req.body.name,
        jobs: req.body.jobs,
        status: req.body.status,
        contact: req.body.contact,
        notes: req.body.notes,
    };
    // Save Tradie in the database
    Tradie.create(tradie)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tradie."
            });
        });
};

// Retrieve all Tradies from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    const condition = name ? {name: {[Op.iLike]: `%${name}%`}} : null;
    Tradie.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Tradie."
            });
        });
};
// Find a single Tradie with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Tradie.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tradie with id=${id}.`
                });
            }
        })
        .catch(() => {
            res.status(500).send({
                message: "Error retrieving Tradie with id=" + id
            });
        });
};

// Update a Tradie by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Tradie.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tradie was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tradie with id=${id}. Maybe Tradie was not found or req.body is empty!`
                });
            }
        })
        .catch(() => {
            res.status(500).send({
                message: "Error updating Tradie with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Tradie.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tutorial was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
};
