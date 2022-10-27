import { ResultProps } from "../types/resultProps"
import '../css/results.css'



export default function Results ({name, totalPacketsNeeded, totalSeedCountPerPacket, totalSeedNeeded, rowFeet}: ResultProps) {

    console.log(`RESULTS COMPONENT INFO REC'D - name: ${name} - total packs: ${totalPacketsNeeded} - total seed needed: ${totalSeedNeeded} - seeds per pack: ${totalSeedCountPerPacket} - row feet: ${rowFeet}`)

    return (
        <div id='results'>
            <h4>results!</h4>
            <p>total {name} seeds per packet: {totalSeedCountPerPacket} seeds </p>
            <p>total {name} seeds needed to plant {rowFeet} row feet: {totalSeedNeeded} seeds </p>
            <p>total packets needed to obtain {totalSeedNeeded} {name} seeds: {totalPacketsNeeded} packet(s)</p>
        </div>
    )
}