/**
 * Created by Bruno Grieder on 17 April 2015
 */
///<reference path="../references.d.ts"/>
import flux = require('flux')
import Action = require('./Action')

/**
 * The provided Flux Dispatcher is used "as is" except that
 * it expects actions extending the Action class
 */
class Dispatcher extends flux.Dispatcher<Action> {}

//Export the singleton dispatcher
var dispatcher = new Dispatcher()
export = dispatcher