import React from 'react'

import { GetLadybugs } from '../Utils/getLadybugs'

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
        </>
    )
}