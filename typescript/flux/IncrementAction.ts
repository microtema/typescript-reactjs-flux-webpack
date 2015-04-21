/**
 * Created by Bruno Grieder on 09 April 2015.
 */

import Action = require('./Action')

/**
 * A Flux Action which is sent to increment the Counter
 * This action is "marked" a view sourced action i.e. an action triggered by user interaction
 */
class IncrementAction extends Action{

    /**
     * The amount to increment the counter with
     */
    private _increment: number

    constructor(increment: number){

        super(Action.Source.View)
        this._increment = increment
    }

    /**
     * Make sure the increment is immutable,
     * so that the action cannot be modified during dispatch
     * @returns {number}
     */
    get increment() {
        return this._increment
    }
}

export = IncrementAction