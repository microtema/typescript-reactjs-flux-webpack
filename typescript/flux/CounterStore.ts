/**
 * Created by Bruno Grieder on 17 April 2015.
 */


///<reference path='./../references.d.ts'/>

import React = require('react/addons')

// The nodejs Events library - any other events library could obviously be used
// This library will be bundled, since it is not marked as external in webpack.config.js
import Events = require('events')

// The singleton dispatcher
import dispatcher = require('./Dispatcher')

// The base Action definition
import Action = require('./Action')

// The actions the store must listen to
import IncrementAction = require('./IncrementAction')

/**
 * The Flux store that will listen actions of interest on the Dispatch and
 * emit events as its state changes
 */
class CounterStore extends Events.EventEmitter {

    // The event this store will emit when it increase the `value`
    public static INCREMENT_EVENT = "increment"

    // The current counter value
    private _value: number

    constructor(initialValue: number) {
        super()

        // Initialize the store with the defqult vqlue pqssed in the constructor
        this._value = initialValue;

        // Now register callbacks on the dispatcher to "catch" actions of interest to this store
        dispatcher.register( ( action: Action ) => {

            if ( action instanceof IncrementAction ) {

                // Grab the increment
                var increment = (<IncrementAction> action).increment

                // Increase the current value
                this._value += increment

                // emit an event so that listening components can update themselves with the new value
                this.emit(CounterStore.INCREMENT_EVENT, increment)
            }
        })
    }

    // Make the value immutable from the outside
    // The value must only be updated by Action dispatched by the singleton dispatcher
    // In Flux, all mutations flow in a single direction
    get value() {
        return this._value;
    }
}

export = CounterStore