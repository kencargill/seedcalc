import React, { useState } from "react"
import { Input } from "../types/seedCalcInput";
import { calculateSeeds } from "./functions";

export default function SeedCalcForm () {
    const [name, setName] = useState<string>();
    const [seedPacketValue, setSeedPacketValue] = useState<number>();
    const [seedPacketUnit, setSeedPacketUnit] = useState<string>();
    const [perFoot, setPerFoot] = useState<number>();
    const [rowFeet, setRowFeet] = useState<number>();
    const [perWeightUnit, setPerWeightUnit] = useState<number>();

    function handleSubmit (e: React.FormEvent) {
        e.preventDefault();
        calculateSeeds(seedPacketValue!, seedPacketUnit!, perFoot!, rowFeet!, perWeightUnit!);
    }

    return (
        <div>
            <label htmlFor="name">
                Seed name: 
                <input 
                onChange={(e) => setName(e.target.value)}
                type="text" name="name" 
                />
            </label>

            <label htmlFor="packet">
                Seed packet contains:
                <input 
                onChange={(e) => setSeedPacketValue(Number(e.target.value))}
                type="number" name="packet" 
                />
                <select name="packet"
                onChange={(e) => setSeedPacketUnit(e.target.value)}
                >
                    <option value="seeds">seeds</option>
                    <option value="grams">grams</option>
                    <option value="ounces">ounces</option>
                    <option value="pounds">pounds</option>
                </select>
            </label>

            <label htmlFor="weight">
                If your seed packet is by weight: how many seeds are there per weight unit?
                <input 
                onChange={(e) => setPerWeightUnit(Number(e.target.value))}
                type="number" name="weight"
                />
            </label>

            <label htmlFor="spacing">
                How many seeds/plants (take into account how many seeds per cell, spacing etc) per foot:
                {/* what about direct seeding? */}
                <input 
                onChange={(e) => setPerFoot(Number(e.target.value))}
                type="number" name="spacing" 
                />
            </label>

            <label htmlFor="row">
                How many row feet need to be planted with this seed: 
                <input 
                onChange={(e) => setRowFeet(Number(e.target.value))}
                type="number" name="row" 
                />
            </label>

            <button onClick={handleSubmit}>Calculate</button>
        </div>

        // when submitted, have <Results props={returned val from calculate seeds?}/> drop down appear here?
    )
}