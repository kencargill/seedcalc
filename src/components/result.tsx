interface Props {
    name: string,
    seedPacketValue: number,
    seedPacketUnit: string,
    seedSpacingValue: number,
    seedSpacingUnit: string,
    perCell: number,
    rowFeet: number,
}

export default function Result ({name, seedSpacingValue, seedSpacingUnit, perCell, rowFeet}: Props) {
    return (
        <div>
            <p>{} packets of {name} will plant {} row feet</p>
        </div>
    )
}