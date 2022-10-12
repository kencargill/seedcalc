import { useState } from "react";
import { CalculateSeedsProps } from "../types/calculateSeedsProps";

export function calculateSeeds ({seedPacketValue, seedPacketUnit, perFoot, rowFeet}: CalculateSeedsProps) {
    const [results, setResults] = useState();

    return (
        <div>
            <p>
                {seedPacketValue}, {seedPacketUnit}, {perFoot}, {rowFeet}
            </p>
        </div>
    )
}