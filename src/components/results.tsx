import { ResultProps } from "../types/resultProps"
import '../css/results.css'



export default function Results (resultInfo: ResultProps) {
    return (
        <div id='results'>
            <h4>results:</h4>
            <p>total {resultInfo.name} seeds per packet: {resultInfo.totalSeedCountPerPacket} seeds </p>
            <p>total {resultInfo.name} seeds needed to plant {resultInfo.rowFeet} row feet: {resultInfo.totalSeedNeeded} seeds </p>
            <p>total packets needed to obtain {resultInfo.totalSeedNeeded} {resultInfo.name} seeds: {resultInfo.totalPacketsNeeded} packet(s)</p>
        </div>
    )
}