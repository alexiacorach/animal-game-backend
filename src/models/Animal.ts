import mongoose, { Schema, Document } from "mongoose";

export interface IAnimal extends Document {
    name: string;
    image: string;
    weightKg: number;
    speedKmh: number;
    minTempC: number;
    extinction: number;
    aggression: number;
    intelligence: number;


}

const AnimalSchema = new Schema<IAnimal>({
    name: { type: String, required: true },
    image: { type: String, required: false }, //false por ahora hasta tener las imagenes en seed
    weightKg: { type: Number, required: true },
    speedKmh: { type: Number, required: true },
    minTempC: { type: Number, required: true },
    extinction: { type: Number, required: true, min: 1, max: 10 },
    aggression: { type: Number, required: true, min: 1, max: 10 },
    intelligence: { type: Number, required: true, min: 1, max: 10 }

});

export default mongoose.model<IAnimal>("Animal", AnimalSchema);