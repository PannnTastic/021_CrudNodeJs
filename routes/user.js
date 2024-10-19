import express from "express";

const router = express.Router();

const user = 
    [{
        nama : "Arya",
        umur : "19",
        asal  : "Salatiga",
        angkatan : 3

    },
    {
        merk : 'Zaky',
        umur : "19",
        asal : "Bengkulu",
        angkatan : 2023

    },];

router.get("/", (req,res) => {
    res.send(user)
});

export default router;
