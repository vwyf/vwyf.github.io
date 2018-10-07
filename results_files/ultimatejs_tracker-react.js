//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var _ = Package.underscore._;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var TrackerReact;

var require = meteorInstall({"node_modules":{"meteor":{"ultimatejs:tracker-react":{"main.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","./Tracker",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/ultimatejs_tracker-react/main.js                                                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.export({TrackerReactMixin:function(){return TrackerReactMixin}});var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var Tracker;module.import('./Tracker',{"default":function(v){Tracker=v}});
                                                                                                                    //
                                                                                                                    //
/**                                                                                                                 //
 * Tracker is available as a global variable but is extended for one time computations/invalidation.                //
 * Implementation: See ./Tracker.js                                                                                 //
 */                                                                                                                 //
                                                                                                                    // 5
                                                                                                                    //
/**                                                                                                                 //
 * autorunRender(): The magic behind this computation is it only ever runs once after each time `render` is called.
 * When it does run that 2nd time, it's used just to force an update. The reactive function it wraps isn't even called.
 * Then on the update, the cycle repeats, and the computation is stopped, and a new one is made.                    //
 *                                                                                                                  //
 * Also, because the autorun is recreated on all React-triggered re-renders, any new code-paths possibly            //
 * taken in `render` will automatically begin tracking reactive dependencies, thereby MERGING both models of reactivity:
 * Meteor's various reactive data sources AND React's functional + unidirectional re-running of                     //
 * everything in component branches with state changes.                                                             //
 */                                                                                                                 //
                                                                                                                    //
/**                                                                                                                 //
 * Default. Provides a react component for inheritance as a clean alternative to mixins.                            //
 * Implementation:                                                                                                  //
 *    "class MyApp extends TrackerReact(React.Component) { (...)"                                                   //
 * @param Component {*} React Component                                                                             //
 */                                                                                                                 //
module.export("default",exports.default=(TrackerReact = function TrackerReact(Component, opt) {                     // 25
  // No reactive computations needed for Server Side Rendering                                                      //
  if (Meteor.isServer) return Component;                                                                            // 27
                                                                                                                    //
  var TrackerReactComponent = function (_Component) {                                                               // 25
    _inherits(TrackerReactComponent, _Component);                                                                   // 25
                                                                                                                    //
    function TrackerReactComponent() {                                                                              // 31
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {                        // 31
        args[_key] = arguments[_key];                                                                               // 31
      }                                                                                                             // 31
                                                                                                                    //
      _classCallCheck(this, TrackerReactComponent);                                                                 // 31
                                                                                                                    //
      /*                                                                                                            //
       Overloading the constructors `componentWillUnmount` method to ensure that computations are stopped and a     //
       forceUpdate prevented, without overwriting the prototype. This is a potential bug, as of React 14.7 the      //
       componentWillUnmount() method does not fire, if the top level component has one. It gets overwritten. This   //
       implementation is however similar to what a transpiler would do anyway.                                      //
        GitHub Issue: https://github.com/facebook/react/issues/6162                                                 //
       */                                                                                                           //
                                                                                                                    //
      var _this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args)));         // 31
                                                                                                                    //
      if (!_this.constructor.prototype._isExtended) {                                                               // 42
        (function () {                                                                                              // 42
          _this.constructor.prototype._isExtended = true;                                                           // 43
          var superComponentWillUnmount = _this.constructor.prototype.componentWillUnmount;                         // 44
                                                                                                                    //
          _this.constructor.prototype.componentWillUnmount = function () {                                          // 46
            if (superComponentWillUnmount) {                                                                        // 47
              for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {          // 47
                args[_key2] = arguments[_key2];                                                                     // 46
              }                                                                                                     // 47
                                                                                                                    //
              superComponentWillUnmount.call.apply(superComponentWillUnmount, [this].concat(args));                 // 48
            }                                                                                                       // 49
                                                                                                                    //
            this._renderComputation.stop();                                                                         // 51
            this._renderComputation = null;                                                                         // 52
          };                                                                                                        // 53
        })();                                                                                                       // 42
      }                                                                                                             // 54
                                                                                                                    //
      _this.autorunRender();                                                                                        // 56
      return _this;                                                                                                 // 31
    }                                                                                                               // 57
                                                                                                                    //
    TrackerReactComponent.prototype.autorunRender = function () {                                                   // 25
      function autorunRender() {                                                                                    // 25
        var _this2 = this;                                                                                          // 59
                                                                                                                    //
        var oldRender = this.render;                                                                                // 60
                                                                                                                    //
        this.render = function () {                                                                                 // 62
          // Simple method we can offer in the `Meteor.Component` API                                               //
          return _this2.autorunOnce('_renderComputation', oldRender);                                               // 64
        };                                                                                                          // 65
      }                                                                                                             // 66
                                                                                                                    //
      return autorunRender;                                                                                         // 25
    }();                                                                                                            // 25
                                                                                                                    //
    TrackerReactComponent.prototype.autorunOnce = function () {                                                     // 25
      function autorunOnce(name, dataFunc) {                                                                        // 25
        return Tracker.once(name, this, dataFunc, this.forceUpdate);                                                // 69
      }                                                                                                             // 70
                                                                                                                    //
      return autorunOnce;                                                                                           // 25
    }();                                                                                                            // 25
                                                                                                                    //
    return TrackerReactComponent;                                                                                   // 25
  }(Component);                                                                                                     // 25
                                                                                                                    //
  return TrackerReactComponent;                                                                                     // 73
}));                                                                                                                // 74
                                                                                                                    //
/**                                                                                                                 //
 * Mixin. Use with ES7 / TypeScript Decorator or Mixin-Module.                                                      //
 * Implementation:                                                                                                  //
 *   "@TrackerReactMixin                                                                                            //
 *    class MyApp extends React.Component { (...)"                                                                  //
 * @type {{componentWillMount: (function()), componentWillUnmount: (function()), autorunRender: (function()),       //
 *   autorunOnce: (function(*=, *=))}}                                                                              //
 */                                                                                                                 //
var TrackerReactMixin = {                                                                                           // 85
  componentWillMount: function () {                                                                                 // 86
    function componentWillMount() {                                                                                 // 85
      // No reactive computations needed for Server Side Rendering                                                  //
      if (Meteor.isServer) return;                                                                                  // 88
                                                                                                                    //
      this.autorunRender();                                                                                         // 90
    }                                                                                                               // 91
                                                                                                                    //
    return componentWillMount;                                                                                      // 85
  }(),                                                                                                              // 85
  componentWillUnmount: function () {                                                                               // 92
    function componentWillUnmount() {                                                                               // 85
      // No reactive computations needed for Server Side Rendering                                                  //
      if (Meteor.isServer) return;                                                                                  // 94
                                                                                                                    //
      this._renderComputation.stop();                                                                               // 96
      this._renderComputation = null;                                                                               // 97
    }                                                                                                               // 98
                                                                                                                    //
    return componentWillUnmount;                                                                                    // 85
  }(),                                                                                                              // 85
  autorunRender: function () {                                                                                      // 99
    function autorunRender() {                                                                                      // 85
      var _this3 = this;                                                                                            // 99
                                                                                                                    //
      var oldRender = this.render;                                                                                  // 100
                                                                                                                    //
      this.render = function () {                                                                                   // 102
        // Simple method we can offer in the `Meteor.Component` API                                                 //
        return _this3.autorunOnce('_renderComputation', oldRender);                                                 // 104
      };                                                                                                            // 105
    }                                                                                                               // 106
                                                                                                                    //
    return autorunRender;                                                                                           // 85
  }(),                                                                                                              // 85
  autorunOnce: function () {                                                                                        // 107
    function autorunOnce(name, dataFunc) {                                                                          // 85
      return Tracker.once(name, this, dataFunc, this.forceUpdate);                                                  // 108
    }                                                                                                               // 109
                                                                                                                    //
    return autorunOnce;                                                                                             // 85
  }()                                                                                                               // 85
};                                                                                                                  // 85
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Tracker.js":["meteor/tracker",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/ultimatejs_tracker-react/Tracker.js                                                                     //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var Tracker;module.import('meteor/tracker',{"Tracker":function(v){Tracker=v}});// Also available as a global        //
                                                                                                                    // 2
                                                                                                                    //
/**                                                                                                                 //
 * Create "one-time" reactive computations with Tracker                                                             //
 * @param name {string} Component Reactive Data Property for Computation                                            //
 * @param context {*} Target Component Instance                                                                     //
 * @param dataFunc {*} Data Context                                                                                 //
 * @param updateFunc {*} Component ForceUpdate Method - To re-trigger render function                               //
 * @returns {*} Symbol(react.element) - Result data-element composition                                             //
 */                                                                                                                 //
Tracker.once = function (name, context, dataFunc, updateFunc) {                                                     // 12
  var data = void 0;                                                                                                // 13
                                                                                                                    //
  // Stop it just in case the autorun never re-ran                                                                  //
  if (context[name] && !context[name].stopped) context[name].stop();                                                // 16
                                                                                                                    //
  // NOTE: we may want to run this code in `setTimeout(func, 0)` so it doesn't impact the rendering phase at all    //
  context[name] = Tracker.nonreactive(function () {                                                                 // 19
    return Tracker.autorun(function (c) {                                                                           // 20
      if (c.firstRun) {                                                                                             // 21
                                                                                                                    //
        data = dataFunc.call(context);                                                                              // 23
      } else {                                                                                                      // 25
                                                                                                                    //
        // Stop autorun here so rendering "phase" doesn't have extra work of also stopping autoruns; likely not too
        // important though.                                                                                        //
        if (context[name]) context[name].stop();                                                                    // 29
                                                                                                                    //
        // where `forceUpdate` will be called in above implementation                                               //
        updateFunc.call(context);                                                                                   // 32
      }                                                                                                             // 33
    });                                                                                                             // 34
  });                                                                                                               // 35
                                                                                                                    //
  return data;                                                                                                      // 37
};                                                                                                                  // 38
                                                                                                                    //
module.export("default",exports.default=(Tracker));                                                                 // 40
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}}},{"extensions":[".js",".json"]});
var exports = require("./node_modules/meteor/ultimatejs:tracker-react/main.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['ultimatejs:tracker-react'] = exports;

})();
