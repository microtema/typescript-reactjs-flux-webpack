/**
 * Created by Bruno Grieder on 17 April 2015.
 */

///<reference path='./references.d.ts'/>

import React = require('react/addons')

// The Flux store that holds the current value of the counter,
// receives actions from the dispatcher and emit events when the value changes
import CounterStore = require('./flux/CounterStore')

// The store is a singleton across the application
var counterStore = new CounterStore(3);

//Import our ReactJS Counter component definition
import Counter = require('./Counter')


// Define the Props that we are going to pass to our first Counter
// The immutable store is passed as well so that the Counter can read and display the current value
var props1: Counter.Props =  {
    increment: 1,
    store: counterStore
}

// Define the Props that we are going to pass to our second Counter
// The immutable store is passed as well so that the Counter can read and display the current value
var props2: Counter.Props =  {
    increment: 2,
    store: counterStore
}


// We now "inject" the Counter component into the body div
// and we use the "spread operator" to pass its Props to the Counter

//language="JSX Harmony"
var bodyElement = React.jsx( `

    <div>
        <Counter {...props1}/>
        {/*
             Check how the Counter is implemented using Flux first.
             Flux may look a bit verbose but this is where Flux really shines:
             implementing another Counter that directly interacts with the other Counter(s) does NOT require
             to implement cross listeners on each others (or via their models). Adding a third Counter
             simply requires to duplicate the line below without any change to the first two Counters.
        */}
        <Counter {...props2}/>
    </div>

` )

//Simply render the generated element inside the document body
React.render( bodyElement, document.body )