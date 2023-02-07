export function calculateSeeds (seedPacketValue: number, seedPacketUnit: string, perFoot: number, rowFeet: number, name: string, perWeightUnit?: number) {
    let totalSeedCountPerPacket = 0;
    let totalSeedNeeded = 0;
    let totalPacketsNeededBeforeRounding = 0;
    let totalPacketsNeeded = 0;

    console.log("seed pack UNIT: ", seedPacketUnit)
    if (seedPacketUnit === "grams" || seedPacketUnit === "ounces" || seedPacketUnit ===  "pounds") {
        totalSeedCountPerPacket = seedPacketValue * perWeightUnit!;
    } else if (seedPacketUnit === "seeds") {
        totalSeedCountPerPacket = seedPacketValue;
    };

    totalSeedNeeded = perFoot * rowFeet;

    totalPacketsNeededBeforeRounding = (totalSeedNeeded / totalSeedCountPerPacket);
    totalPacketsNeeded = Number(totalPacketsNeededBeforeRounding.toFixed(2));

    return {totalPacketsNeeded, totalSeedNeeded, totalSeedCountPerPacket};
}