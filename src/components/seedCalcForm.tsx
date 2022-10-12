import React, { useState } from "react"

export default function SeedCalcForm () {
    const [name, setName] = useState<string>();
    const [seedPacketValue, setSeedPacketValue] = useState<number>();
    const [seedPacketUnit, setSeedPacketUnit] = useState<string>();
    const [seedSpacingValue, setSeedSpacingValue] = useState<number>();
    const [seedSpacingUnit, setSeedSpacingUnit] = useState<string>();
    const [perCell, setPerCell] = useState<number>();
    const [rowFeet, setRowFeet] = useState<number>();

    function handleSubmit (e: React.FormEvent) {
        e.preventDefault();
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
                    <option value="ounce">ounces</option>
                    <option value="pound">pounds</option>
                </select>
            </label>

            <label htmlFor="spacing">
                What will be the plants spacing? 
                <input 
                onChange={(e) => setSeedSpacingValue(Number(e.target.value))}
                type="number" name="spacing" 
                />
                <select name="spacing"
                onChange={(e) => setSeedSpacingUnit(e.target.value)}
                >
                    <option value="inches">inches</option>
                    <option value="feet">feet</option>
                </select>
            </label>

            <label htmlFor="cell">
                How many seeds per cell:
                {/* what about direct seeding? */}
                <input 
                onChange={(e) => setPerCell(Number(e.target.value))}
                type="number" name="cell" 
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
    )
}