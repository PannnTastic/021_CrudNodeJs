import express from "express";

const router = express.Router();

const mobil = 
    [{
        merk : "Toyota",
        model : "Avanza",
        warna  : "Hitam",
        tahun : 2024

    },
    {
        merk : 'porsche',
        model : "Sport",
        warna : "Kuning",
        tahun : 2023

    },];

router.get("/", (req,res) => {
    res.send(mobil)
});

export default router;
