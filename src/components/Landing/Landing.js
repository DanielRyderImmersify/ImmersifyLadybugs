import React from 'react'

import { GetLadybugs } from '../Utils/getLadybugs'
import { DisplayContent } from './DisplayContent/DisplayContent'

export const Landing = () => {

    GetLadybugs(gotDataCallback, errorCallback)

    function gotDataCallback (data) {
        console.log(data)
    }

    function errorCallback (error) {
        console.log(error)
    }

    return (
        <>
            <h1>Landing Page</h1>

            <DisplayContent
                names={["Ladybug1", "Ladybug2", "Ladybug3"]}
                imageLocations={[
                    "Coccinella",
                    "ConvergentLadyBeetle",
                    "FourteenSpottedLadybug",
                ]}
            />
        </>
    );
}