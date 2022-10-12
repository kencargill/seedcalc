import { ResultProps } from "../types/resultProps"

export default function Results ({name, numOfPackets, numOfRowFeet}: ResultProps) {
    return (
        <div>
            <p>{numOfPackets} packets of {name} will plant {numOfRowFeet} row feet</p>
        </div>
    )
}