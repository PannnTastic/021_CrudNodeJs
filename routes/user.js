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
        nama : 'Zaky',
        umur : 19,
        asal : "Bengkulu",
        angkatan : 2023

    },
    {
        nama : "Gibran",
        umur : 19,
        asal : "NTB",
        angkatan : 2023
    },
    {
        nama : "Hanif",
        umur : 21,
        asal : "Bekasi",
        angkatan : 2022
    },
];

router.get("/", (req,res) => {
    res.send(user)
});

export default router;
