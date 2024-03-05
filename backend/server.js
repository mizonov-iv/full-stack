const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const {json} = require("express");

const server = express()
server.use(cors())
server.use(json())

mongoose.connect(import.meta.env.VITE_DATABASE_LOCAL, {}).then(() => console.log("DB connection successful"))

const PORT = 3000

const mockData = [
    {
        id: 1,
        name: "item 1"
    },
    {
        id: 2,
        name: "item 1"
    },
]

server.get("/api", (req, res) => {
    res.status(200).json({
        status: "success",
        data: mockData
    })
})

server.post("/api", (req, res) => {
    const reqBody = req.body
    const newID = mockData.length + 1
    const newItem = {
        id: newID,
        name: `new Item with id ${newID}`
    }
    mockData.push(newItem)

    res.status(201).json({
        status: "success",
        data: {reqBody},
        message: `Added new item width id: ${newID}`
    })
})

server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})