import mongoose from 'mongoose';

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://localhost/ts-api-jwt")
    .then(db => {
        console.log("Database is connected");
    })
    .catch(err => {
        console.log(err);
    })
