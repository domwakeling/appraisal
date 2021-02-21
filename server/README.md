# Server side

Be aware, structure is as follows:

```
server/
|- controllers/
|- models/
|- routes/
```

## Routes

```
server/
|- controllers/
|- ...
|- routes/
```

The `routes` folder includes a separate file for each 'principle' route; these import functions/handlers
that sit within the corresponding file in the `controllers` folder.

The `routes` are themselves imported in the main `index.js` (the entry point for the server), and
added as routes in the appropriate place.

## Models

```
server/
|- ...
|- models/
|- ...
```

The `models` folder contains Mongoose *schema* models.