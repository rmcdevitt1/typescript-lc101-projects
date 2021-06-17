import { Payload } from './Payload';

export class Rocket implements Payload {
    name: string;
    totalCapacityKg: number;
    cargoItems: [];
    astronauts: [];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
}