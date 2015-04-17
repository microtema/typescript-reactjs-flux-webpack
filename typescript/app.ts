/**
 * Created by Bruno Grieder on 17 April 2015.
 */

// All references to Typescript typing files are kept in a single references.d.ts file
// which is in turn referenced everywhere
///<reference path='./references.d.ts'/>

// Typescript is compiled as CommonJS modules which are later bundled in a single file by webpack
// This import statement will not result in ReactJS to be part of the bundle because the library is marked as external in Typescript
// It is however required by Typescript to bring the React definition in (because the react/addons typings file define an "external" module)
import React = require('react/addons')


// The language= instruction is IntelliJ specific to "inject" JSX syntax inside the Typescript file
// The React.jsx() method is defined by the react-tsx-js definition file. It gives us the ability to code
// JSX in a multiline string. The ts-jsx-loader will scan for this method and replace the multiline string with
// ReactJS statements

//language="JSX Harmony"
var bodyElement = React.jsx( `

    <div>
        <h1>Hello World</h1>
    </div>

` )

//Simply render the generated element inside the document body
React.render( bodyElement, document.body )