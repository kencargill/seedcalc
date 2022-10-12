import React, { useState } from "react"

export default function SeedCalcForm () {
    const [name, setName] = useState<string>();
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