/**
 * Created by Bruno Grieder on 17 April 2015.
 */

///<reference path='./references.d.ts'/>

import React = require('react/addons')

//Import our ReactJS Counter component definition
import Counter = require('./Counter')


// Define the Props that we are going to pass to our Counter
var props: Counter.Props =  {
    initialValue: 4
}

// We now "inject" the Counter component into the body div
// and we use the "spread operator" to pass its Props to the Counter

//language="JSX Harmony"
var bodyElement = React.jsx( `

    <div>
        <Counter {...props}/>
    </div>

` )

//Simply render the generated element inside the document body
React.render( bodyElement, document.body )