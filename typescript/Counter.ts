/**
 * Created by Bruno Grieder on 17 April 2015.
 */

//
// A ReactJS Component written in Typescript with injected JSX
//

///<reference path='./references.d.ts'/>

import React = require('react/addons')

// A module bearing the same name as the Component class is created
// The last line `export = Counter` will export all members of the modules marked as exportable
module Counter {

    // Our Component Props are created as an exportable interface since they will be
    // passed by the parent Component to this component. They will be available as ' Counter.Props'
    export interface Props {

        //This var holds the initial value of our counter when it is rendered
        initialValue: number
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

        // On instantiation, we initialize the state to be the initial value set by the Props
        this.state = {
            currentValue: this.props.initialValue
        }
    }

    // ReactJS will enforce runtime type checking on the props if this static is defined
    // Try changing the `initialValue` type to `React.PropTypes.bool`and run it. The browser
    // console will display an error
    static propTypes: React.ValidationMap<Counter.Props> = {
        initialValue: React.PropTypes.number
    }

    // If no props are passed by the parent component (e.g. <Counter/> in main.ts), the props
    // will be initialized to the default values set in this static
    static defaultProps: Counter.Props = {
        initialValue: 2
    }

    // This is an override of the public React.Component render method
    render() {

        //The counter if rendered with the value of its state

        //Please note that it is JSX:
        // 1- class -> className
        // 2- onclick -> onClick

        //language="JSX Harmony"
        return React.jsx( `

            <div className="counter">
                <span>Counter:&nbsp;{this.state.currentValue}</span>
                <button onClick={this.increment}>Increment</button>
            </div>

        ` )
    }

    // The increment method is defined as an arrow function so that `this` is preserved
    // even when the method is used as an event handler
    private increment = (): void => {

        // Setting the state will trigger a re-render of the component
        this.setState({
            currentValue: this.state.currentValue + 1
        })
    }
}

//This export will export the Counter component class and the Props inside the Counter module
export = Counter