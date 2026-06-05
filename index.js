const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const supplyRouter = require("./routes/supplyRoutes");
const patientRouter = require("./routes/patientRoutes");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3004;

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

app.set("supabaseClient", supabase);
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("./views"));

app.use(express.json());
app.use("/", supplyRouter);
app.use("/", patientRouter);

app.listen(port, () => console.log("Server running on port " + port));