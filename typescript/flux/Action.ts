/**
 * Created by Bruno Grieder on 17 April 2015
 */

/**
 * A base class for actions dispatched by the Flux Dispatcher
 * This class provides to sources for actions:
 *  - View: triggered by user interaction
 *  - Server: triggered by server polling/push
 */
class Action {

    private _source: Action.Source

    constructor( source: Action.Source ) {
        this._source = source
    }

    /**
     * The Source of the action
     * Make sure the source is immutable to avoid change
     * during Dispatch
     */
    get source() {
        return this._source
    }
}

module Action {

    export enum Source {
        View,
        Server
    }
}

export = Action
