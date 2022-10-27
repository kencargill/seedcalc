export function calculateSeeds (seedPacketValue: number, seedPacketUnit: string, perFoot: number, rowFeet: number, perWeightUnit?: number) {
    let totalSeedCountPerPacket = 0;
    let totalSeedNeeded = 0;
    let totalPacketsNeededBeforeRounding = 0;
    let totalPacketsNeeded = 0;

    console.log("seed pack UNIT: ", seedPacketUnit)
    if (seedPacketUnit === "grams" || seedPacketUnit === "ounces" || seedPacketUnit ===  "pounds") {
        totalSeedCountPerPacket = seedPacketValue * perWeightUnit!;
        console.log("total seed count per packet: (1) ", totalSeedCountPerPacket);
    } else if (seedPacketUnit === "seeds") {
        totalSeedCountPerPacket = seedPacketValue;
        console.log("total seed count per packet: (2) ", totalSeedCountPerPacket);
    };

    totalSeedNeeded = perFoot * rowFeet;
    console.log("total seed needed: ", totalSeedNeeded);
    console.log("seed count per pack: ", totalSeedCountPerPacket);

    totalPacketsNeededBeforeRounding = (totalSeedNeeded / totalSeedCountPerPacket);
    totalPacketsNeeded = Number(totalPacketsNeededBeforeRounding.toFixed(2));
    console.log("SEED CALC total seed packets needed: ", totalPacketsNeeded)

    return {totalPacketsNeeded, totalSeedNeeded, totalSeedCountPerPacket};
}