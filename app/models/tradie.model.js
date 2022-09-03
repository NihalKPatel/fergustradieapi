module.exports = (sequelize, Sequelize) => {
    const Tradie = sequelize.define("tradie", {
        name: {
            type: Sequelize.STRING
        },
        jobs: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        },
        contact: {
            type: Sequelize.STRING
        },
        notes: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });
    return Tradie;
};
