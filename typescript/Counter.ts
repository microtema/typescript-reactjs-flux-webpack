/**
 * Created by Bruno Grieder on 17 April 2015.
 */

//
// A ReactJS Component written in Typescript with injected JSX
// that uses Flux for events and actions
//

///<reference path='./references.d.ts'/>

import React = require('react/addons')

// The singleton dispatcher
import dispatcher = require('./flux/Dispatcher')

// The Increment Action that will be dispatched when clicking the increment button
import IncrementAction = require('./flux/IncrementAction')

// The store that is passed in the Props
import CounterStore = require('./flux/CounterStore')


// A module bearing the same name as the Component class is created
// The last line `export = Counter` will export all members of the modules marked as exportable
module Counter {

    // Our Component Props are created as an exportable interface since they will be
    // passed by the parent Component to this component. They will be available as ' Counter.Props'
    export interface Props {

        // This var holds the initial value of our counter when it is rendered
        increment: number

        // Passing the store(s) as Props greatly diminishes the need of custom Props on Components
        // Since the Store elements are immutable
        // they cannot be modified directly but only by dispatching actions
        store: CounterStore
    }
}

// In contrary to the Props, the state of the component is private to the component
// and should not be accessible by external modules
interface State {

    //This var holds the current value of our counter
    currentValue: number
}


// Our Counter component which is defined as an ES6 React.Component class with two generic
// parameters being its Props and State types
class Counter extends React.Component<Counter.Props,State> {

    // The props passed by the parent Component are injected into this component via the constructor
    constructor( props: Counter.Props ) {

        super( props, null )

        // The state of the component is initialized with the store value
        this.state = {
            currentValue: this.props.store.value
        }
    }

    // ReactJS will enforce runtime type checking on the props if this static is defined
    static propTypes: React.ValidationMap<Counter.Props> = {
        increment: React.PropTypes.number,
        store: React.PropTypes.object
    }

    // If no props are passed by the parent component (e.g. <Counter/> in main.ts), the props
    // will be initialized to the default values set in this static
    static defaultProps: Counter.Props = {
        increment: 1,
        store: null //obviously this cannot be used: a Store is absolutely required
    }

    // This is an override of the public React.Component render method
    render() {

        //The counter if rendered with the value in the store

        //Please note that it is JSX:
        // 1- class -> className
        // 2- onclick -> onClick

        //language="JSX Harmony"
        return React.jsx( `

            <div className="counter">
                <span>Counter:&nbsp;{this.state.currentValue}</span>
                <button onClick={this.increment}>Increment by {this.props.increment}</button>
            </div>

        ` )
    }

    // The increment method is defined as an arrow function so that `this` is preserved
    // even when the method is used as an event handler
    private increment = (): void => {

        // Instead of directly setting the State as in version 2,
        // clicking the button will now trigger and external flow following the Flux pattern
        // by sending an Increment Action to the dispatcher

        dispatcher.dispatch(new IncrementAction(this.props.increment));
    }


    // The Counter Component will now listen to Store changes to determine
    // when it needs to re-render. A component listening to a store is called
    // a "controller component" in Flux talk. As an alternative, the parent Component
    // of the Counter could be made a Controller Component and its re-rendering would trigger
    // the re-rendering of the Counter.

    // This is an override of a method in React.Component
    // This method is a good place to register listeners
    componentDidMount() {
        this.props.store.addListener(CounterStore.INCREMENT_EVENT, this.refreshValue )
    }

    // This is an override of a method in React.Component
    // This method is a good place to unregister listeners
    componentWillUnmount() {
        this.props.store.removeListener( CounterStore.INCREMENT_EVENT, this.refreshValue )
    }

    // This is the callback triggered by the INCREMENT_EVENT listener
    // It is implemented as an arrow function so that `this` refers to the Counter instance
    // Setting the state will trigger a re-render of the component
    private refreshValue = (): void => this.setState( {
        currentValue: this.props.store.value
    } )

}

//This export will export the Counter component class and the Props inside the Counter module
export = Counter