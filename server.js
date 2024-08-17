#!/usr/bin/env node
import express from "express"
import path from "path"

const __dirname = process.cwd()
const app = express()
const PORT = process.env.PORT || 3000
const INDEX_FILE = "index.html"


// Server any asset where URI match existing path
app.use(express.static(__dirname))

// Forward any other URI to the SPA
app.get("*", (_, res) => res.sendFile(path.join(__dirname, INDEX_FILE)))


app.listen(PORT, () => console.info(`SPS running at http://localhost:${PORT}`))
