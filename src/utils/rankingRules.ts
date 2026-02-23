import { IAnimal } from "../models/Animal";
import { RankingCategory } from "../types/ranking";

export const rankingRules: Record<RankingCategory,(a: IAnimal, b: IAnimal) => number > = {
    weight: (a, b) =>
        b.weightKg - a.weightKg || b.speedKmh - a.speedKmh,

    speed: (a, b) =>
        b.speedKmh - a.speedKmh || b.weightKg - a.weightKg,

    coldTemp: (a, b) =>
        b.minTempC - b.minTempC || b.weightKg - a.weightKg,

    extinction : (a, b) =>
        b.extinction - a.extinction || b.weightKg - a.weightKg,

    aggression : (a, b) =>
        b.aggression - a.aggression || b.weightKg - a.weightKg,

    intelligence: (a, b) =>
        b.intelligence - a.intelligence || b.weightKg - a.weightKg
};
