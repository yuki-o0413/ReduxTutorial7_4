'use strict';
import React from 'react';


export default function Top(props) {
    console.log("**********");
    console.log("**********");
    console.log("**********");
    // console.log(props)

    return (
        <div>
            <h1>
                {props.data1}
            </h1>
        </div>
    )
}
