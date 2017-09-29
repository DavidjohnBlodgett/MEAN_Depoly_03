var appointments = require('../controllers/appointments')
const path = require('path');

module.exports = function(app) {

    /////////////////////////////
    // -- NOTE: BEGIN appointments ROUTES
    /////////////////////////////
    // CREATE
    app.post('/appointments', (req, res, next) => {
        appointments.create( req, res, next );
    });
    // READ
    app.get('/appointments', (req, res, next) => {
        appointments.readAll( req, res, next );
    });
    // DELETE
    app.delete('/appointments/:id', (req, res, next) => {
        appointments.delete( req, res, next );
    });
    /////////////////////////////
    // -- NOTE: END appointments ROUTES
    /////////////////////////////

    // keep this last...
    app.all("*", (req,res,next) => {
            res.sendFile(path.resolve("./public/dist/index.html"))
    });
}
