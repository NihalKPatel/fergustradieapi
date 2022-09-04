# Fergus Tradie API

This is the API for the Fergus Tradie app.

# Installing
- First clone the repo - `git clone https://github.com/NihalKPatel/fergustradieapi.git`
- Move into the app folder - `cd fergustradieapi`
- Install the Node dependencies - `npm install`
- Install config file - `touch app/db/config.js`
- Add the following to the config.js file
```
module.exports = {
database: "database name",
username: "username",
password: "password",
host: "host",
port: port,
dialect: "postgres"
};
```
- Start the API - `node server.js` - The API will be running on localhost:8080

#Usage
Live version of the API can be found at https://fergustradieapi.herokuapp.com/

# Accounts Endpoints
- GET `/api/tradies/` - Get all Jobs
- GET `/api/tradies/:id` - Get Jobs by id
- POST `/api/tradies/` - Create new Jobs
- PUT `/api/tradies/:id` - Update Jobs by id
- DELETE `/api/tradies/:id` - Delete Jobs by id

