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
        merk : 'Porsche',
        model : "Sport",
        warna : "Kuning",
        tahun : 2023

    },
    {
        merk : "Daihatsu",
        model : "Minibus",
        warna : "Merah",
        tahun : 2019 
    },
    {
        merk : "Hyundai",
        model : "Stargazer",
        warna : "Putih",
        tahun : 2022
    },
];

router.get("/", (req,res) => {
    res.send(mobil)
});

export default router;
