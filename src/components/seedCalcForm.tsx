import React, { useState, useSyncExternalStore } from "react"
import { ResultProps } from "../types/resultProps";
import { calculateSeeds } from "./calculateSeeds";
import Results from "./results";
import '../css/form.css'

export default function SeedCalcForm (this: any) {
    const [name, setName] = useState<string>();
    const [seedPacketValue, setSeedPacketValue] = useState<number>();
    const [seedPacketUnit, setSeedPacketUnit] = useState<string>();
    const [perFoot, setPerFoot] = useState<number>();
    const [rowFeet, setRowFeet] = useState<number>();
    const [perWeightUnit, setPerWeightUnit] = useState<number>();
    const [resultInfo, setResultInfo] = useState<ResultProps>();

    function handleSubmit (e: React.FormEvent) {
        e.preventDefault();
        let results = calculateSeeds(seedPacketValue!, seedPacketUnit!, perFoot!, rowFeet!, name!, perWeightUnit!);
        setResultInfo({name: name!, ... results, rowFeet: rowFeet!});
        console.log("handleSubmit: ", resultInfo);
    }
    
    return (
        <div>
            <div id="form">

            <label htmlFor="name">
                Seed name: 
                <input 
                onChange={(e) => setName(e.target.value)}
                type="text" name="name"
                placeholder="name"
                />
            </label>

            <label htmlFor="packet">
                Seed packet contains:
                <div id="seed-packet">
                <input 
                id="packet"
                onChange={(e) => setSeedPacketValue(Number(e.target.value))}
                type="number" name="packet"
                placeholder="0"
                />
                <select name="packet"
                id="packet"
                onChange={(e) => setSeedPacketUnit(e.target.value)}
                placeholder="seeds"
                >
                    <option>please make a unit selection</option>
                    <option value="seeds">seeds</option>
                    <option value="grams">grams</option>
                    <option value="ounces">ounces</option>
                    <option value="pounds">pounds</option>
                </select>
                </div>
            </label>

            <label htmlFor="weight">
                If your seed packet is by weight: how many seeds per weight unit?
                <input 
                onChange={(e) => setPerWeightUnit(Number(e.target.value))}
                type="number" name="weight"
                placeholder="0"
                />
            </label>

            <label htmlFor="spacing">
                How many seeds will be planted per foot? (take into account how many seeds per cell, plant spacing etc)
                <input 
                onChange={(e) => setPerFoot(Number(e.target.value))}
                type="number" name="spacing"
                placeholder="0" 
                />
            </label>

            <label htmlFor="row">
                How many row feet need to be planted with this seed: 
                <input 
                onChange={(e) => setRowFeet(Number(e.target.value))}
                type="number" name="row" 
                placeholder="0"
                />
            </label>

            <button onClick={handleSubmit}>Calculate!</button>
                </div>

                <Results 
                    {... resultInfo!}
                />
           
        </div>
    )
}