// Imports from NPM packages
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Imports from routes folder
import userRoutes from './routes/users.js';

// Set up dotenv to be able to access environment variables & read variables
dotenv.config();
const URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 5000;

// Set up server
const app = express();

// Set up routes
app.use('/users', userRoutes);

// Set up middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

mongoose
    .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
