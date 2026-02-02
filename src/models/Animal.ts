import mongoose, { Schema, Document } from "mongoose";

export interface IAnimal extends Document {
    name: string;
    image: string;
    rankings: {
        weight: number;
        speed: number;
        extinction: number;
        aggression: number;
        intelligence: number;
        coldResistance: number;
    };
}

const AnimalSchema = new Schema<IAnimal>({
    name: { type: String, required: true },
    image: { type: String, required: true },
    rankings: {
        weight: { type: Number, required: true },
        speed: { type: Number, required: true },
        extinction: { type: Number, required: true },
        aggression: { type: Number, required: true },
        intelligence: { type: Number, required: true },
        coldResistance: { type: Number, required: true }

    }
});

export default mongoose.model<IAnimal>("Animal", AnimalSchema);