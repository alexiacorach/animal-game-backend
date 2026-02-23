//Categorias con valores reales cuando se puede(Kg, KmH, C), y con niveles de 1-10 cuando no se puede(intelligence, extinction, aggression).
//El ranking y el puntaje se calcula mediante criterios primarios, secundarios y terciarios si hace falta.
//El ranking se calcula en runtime
//20 animales x ahora

import mongoose from "mongoose";
import dotenv from "dotenv";
import Animal from "../models/Animal";

dotenv.config();

const animals = [
    {
        name: "Antelope",
        image: "",
        weightKg:  70,
        speedKmh: 80,
        minTempC: 0,
        extinction: 5,
        aggression: 5,
        intelligence: 5
    },
    {
        name: "Blue Whale",
        image: "",
        weightKg:  150000,
        speedKmh: 50,
        minTempC: 0,
        extinction: 5,
        aggression: 3,
        intelligence: 8
    },
    {
        name: "Boa Constrictor",
        image: "",
        weightKg:  30,
        speedKmh: 5,
        minTempC: 15,
        extinction: 3,
        aggression: 8,
        intelligence: 2
    },
    {
        name: "Camel",
        image: "",
        weightKg:  600,
        speedKmh: 65,
        minTempC: -20,
        extinction: 3,
        aggression: 5,
        intelligence: 5
    },
    {
        name: "Cheetah",
        image: "",
        weightKg:  70,
        speedKmh: 120,
        minTempC: 5,
        extinction: 7,
        aggression: 6,
        intelligence: 7
    },
    {
        name: "Dolphin",
        image: "",
        weightKg:  200,
        speedKmh: 55,
        minTempC: 25,
        extinction: 6,
        aggression: 2,
        intelligence: 10
    },
    {
        name: "Eagle",
        image: "",
        weightKg:  6,
        speedKmh: 160,
        minTempC: -10,
        extinction: 3,
        aggression: 6,
        intelligence: 7
    },
    {
        name: "Elephant",
        image: "",
        weightKg:  6000,
        speedKmh: 40,
        minTempC: 15,
        extinction: 6,
        aggression: 5,
        intelligence: 9
    },
    {
        name: "Fox",
        image: "",
        weightKg:  7,
        speedKmh: 50,
        minTempC: -15,
        extinction: 3,
        aggression: 5,
        intelligence: 7
    },
    {
        name: "Gorilla",
        image: "",
        weightKg:  160,
        speedKmh: 40,
        minTempC: 15,
        extinction: 8,
        aggression: 7,
        intelligence: 9
    },
    {
        name: "Hippopotamus",
        image: "",
        weightKg:  1500,
        speedKmh: 30,
        minTempC: 10,
        extinction: 5,
        aggression: 9,
        intelligence: 5
    },
    {
        name: "Hyena",
        image: "",
        weightKg:  60,
        speedKmh: 60,
        minTempC: 0,
        extinction: 5,
        aggression: 8,
        intelligence: 7
    },
    {
        name: "Horse",
        image: "",
        weightKg:  700,
        speedKmh: 90,
        minTempC: -12,
        extinction: 2,
        aggression: 4,
        intelligence: 7
    },
    {
        name: "Kangaroo",
        image: "",
        weightKg:  85,
        speedKmh: 70,
        minTempC: 12,
        extinction: 3,
        aggression: 5,
        intelligence: 5
    },
    {
        name: "Lion",
        image: "",
        weightKg:  190,
        speedKmh: 80,
        minTempC: 0,
        extinction: 6,
        aggression: 9,
        intelligence: 8
    },
    {
        name: "Penguin",
        image: "",
        weightKg:  30,
        speedKmh: 35,
        minTempC: -40,
        extinction: 5,
        aggression: 1,
        intelligence: 5
    }, 
    {
        name: "Polar Bear",
        image: "",
        weightKg:  450,
        speedKmh: 40,
        minTempC: -50,
        extinction: 9,
        aggression: 8,
        intelligence: 8
    },
    {
        name: "Tiger",
        image: "",
        weightKg:  220,
        speedKmh: 65,
        minTempC: -10,
        extinction: 6,
        aggression: 9,
        intelligence: 8
    },
    {
        name: "Wolf",
        image: "",
        weightKg:  50,
        speedKmh: 60,
        minTempC: -40,
        extinction: 6,
        aggression: 8,
        intelligence: 8
    },
    {
        name: "Zebra",
        image: "",
        weightKg:  350,
        speedKmh: 65,
        minTempC: 5,
        extinction: 4,
        aggression: 5,
        intelligence: 5
    }
];

const seedAnimals = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI!);
        console.log("MongoDB connected");

        await Animal.deleteMany();
        console.log("Animals collection cleared");

        await Animal.insertMany(animals);
        console.log("Animals seeded successfully");

        process.exit(0);
    }catch(error){
        console.error("Seed error: ", error);
        process.exit(1);
    }

};

seedAnimals();
