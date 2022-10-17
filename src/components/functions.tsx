import { useState } from "react";

export function calculateSeeds (seedPacketValue: number, seedPacketUnit: string, perFoot: number, rowFeet: number, perWeightUnit?: number) {
    let totalSeedCountPerPacket = 0;
    let totalSeedNeeded = 0;
    let totalPacketsNeeded = 0;

    if (seedPacketUnit === "grams" || seedPacketUnit === "ounces" || seedPacketUnit ===  "pounds") {
        totalSeedCountPerPacket = seedPacketValue * perWeightUnit!;
    } else if (seedPacketUnit === "seeds") {
        totalSeedCountPerPacket = seedPacketValue;
    };

    totalSeedNeeded = perFoot * rowFeet;

    totalPacketsNeeded = totalSeedNeeded / totalSeedCountPerPacket;

    return totalPacketsNeeded;
}