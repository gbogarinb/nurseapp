/*jshint esversion: 6 */

const express = require("express");
const {
    postgraphile
} = require("postgraphile");

const app = express();

app.get("/nurseapp", function (request, response) {
    response.sendFile("./index.html", {
        root: __dirname
    });
});

app.use(
    postgraphile(
        process.env.DATABASE_URL || "postgres://postgres:postgres@database-1.c8mdbevndvuf.sa-east-1.rds.amazonaws.com:5432/nurseapp",
        "public", {
            watchPg: true,
            graphiql: true,
            enhanceGraphiql: true,
        }
    )
);

app.listen(process.env.PORT || 3000);