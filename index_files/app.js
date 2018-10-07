var require = meteorInstall({"client":{"template.main.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/template.main.js                                                                                    //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
Template.body.addContent((function() {                                                                        // 2
  var view = this;                                                                                            // 3
  return [ HTML.Raw('<div id="render-target"></div>\n\n  '), HTML.SCRIPT({                                    // 4
    async: "",                                                                                                // 5
    src: "//platform.twitter.com/widgets.js",                                                                 // 6
    charset: "utf-8"                                                                                          // 7
  }), "\n\n\t", HTML.SCRIPT("\n\t\t(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n\t\t(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n\t\tm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n\t\t})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\n\t\tga('create', 'UA-85364644-1', 'auto');\n\t\tga('send', 'pageview');\n\t") ];
}));                                                                                                          // 9
Meteor.startup(Template.body.renderToDocument);                                                               // 10
                                                                                                              // 11
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.jsx":["react","meteor/meteor","react-dom","/imports/ui/AdminConsole.jsx","/imports/ui/Results.jsx","/imports/ui/Home.jsx","react-router",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// client/main.jsx                                                                                            //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var React;module.import('react',{"default":function(v){React=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var render;module.import('react-dom',{"render":function(v){render=v}});var AdminConsole;module.import('/imports/ui/AdminConsole.jsx',{"default":function(v){AdminConsole=v}});var ResultsView;module.import('/imports/ui/Results.jsx',{"ResultsView":function(v){ResultsView=v}});var HomeView;module.import('/imports/ui/Home.jsx',{"default":function(v){HomeView=v}});var Router,browserHistory,Route,IndexRoute;module.import('react-router',{"Router":function(v){Router=v},"browserHistory":function(v){browserHistory=v},"Route":function(v){Route=v},"IndexRoute":function(v){IndexRoute=v}});
                                                                                                              // 2
                                                                                                              // 3
                                                                                                              //
                                                                                                              // 5
                                                                                                              // 6
                                                                                                              // 7
                                                                                                              //
                                                                                                              // 9
                                                                                                              //
Meteor.startup(function () {                                                                                  // 12
  Meteor.subscribe('questions');                                                                              // 13
                                                                                                              //
  render(React.createElement(                                                                                 // 15
    Router,                                                                                                   // 16
    { history: browserHistory },                                                                              // 16
    React.createElement(Route, { path: '/', component: HomeView }),                                           // 17
    React.createElement(Route, { path: '/results', component: ResultsView }),                                 // 18
    React.createElement(Route, { path: '/admin', component: AdminConsole }),                                  // 19
    React.createElement(Route, { path: '*', component: HomeView })                                            // 20
  ), document.getElementById('render-target'));                                                               // 16
});                                                                                                           // 23
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"imports":{"api":{"questions.js":["meteor/meteor","meteor/mongo",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// imports/api/questions.js                                                                                   //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
module.export({Questions:function(){return Questions}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                              // 2
                                                                                                              //
var Questions = new Mongo.Collection('questions');                                                            // 4
                                                                                                              //
// Define the schema                                                                                          //
var QuestionSchema = new SimpleSchema({                                                                       // 7
  text: {                                                                                                     // 8
    type: String,                                                                                             // 9
    label: "Question Description",                                                                            // 10
    max: 200                                                                                                  // 11
  },                                                                                                          // 8
  optionA: {                                                                                                  // 13
    type: String,                                                                                             // 14
    label: "Option A",                                                                                        // 15
    min: 0,                                                                                                   // 16
    max: 15                                                                                                   // 17
  },                                                                                                          // 13
  optionB: {                                                                                                  // 19
    type: String,                                                                                             // 20
    label: "Option B",                                                                                        // 21
    min: 0,                                                                                                   // 22
    max: 15                                                                                                   // 23
  },                                                                                                          // 19
  priority: {                                                                                                 // 25
    type: Number,                                                                                             // 26
    label: "Priority"                                                                                         // 27
  },                                                                                                          // 25
  createdAt: {                                                                                                // 29
    type: Date,                                                                                               // 30
    label: "when the question was created"                                                                    // 31
  }                                                                                                           // 29
});                                                                                                           // 7
                                                                                                              //
//Questions.attachSchema(QuestionSchema);                                                                     //
                                                                                                              //
if (Meteor.isServer) {                                                                                        // 37
  // This code only runs on the server                                                                        //
  Meteor.publish('questions', function () {                                                                   // 39
    function questionsPublication() {                                                                         // 39
      return Questions.find({}, { sort: { createdAt: -1 } });                                                 // 40
    }                                                                                                         // 41
                                                                                                              //
    return questionsPublication;                                                                              // 39
  }());                                                                                                       // 39
}                                                                                                             // 42
                                                                                                              //
// debuging                                                                                                   //
if (Meteor.isClient) {                                                                                        // 45
  window.Questions = Questions;                                                                               // 46
}                                                                                                             // 47
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"ui":{"AdminConsole.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","meteor/react-meteor-data","meteor/meteor","meteor/ultimatejs:tracker-react","../api/questions.js","./Question.jsx","./QuestionForm.jsx",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// imports/ui/AdminConsole.jsx                                                                                //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var createContainer;module.import('meteor/react-meteor-data',{"createContainer":function(v){createContainer=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var TrackerReact;module.import('meteor/ultimatejs:tracker-react',{"default":function(v){TrackerReact=v}});var Questions;module.import('../api/questions.js',{"Questions":function(v){Questions=v}});var Question;module.import('./Question.jsx',{"default":function(v){Question=v}});var QuestionForm;module.import('./QuestionForm.jsx',{"default":function(v){QuestionForm=v}});
                                                                                                              //
                                                                                                              //
                                                                                                              // 1
                                                                                                              // 2
                                                                                                              // 3
                                                                                                              // 4
                                                                                                              // 5
                                                                                                              //
                                                                                                              // 7
                                                                                                              // 8
                                                                                                              // 9
                                                                                                              //
var AdminConsole = function (_TrackerReact) {                                                                 //
  _inherits(AdminConsole, _TrackerReact);                                                                     //
                                                                                                              //
  function AdminConsole(props) {                                                                              // 12
    _classCallCheck(this, AdminConsole);                                                                      // 12
                                                                                                              //
    return _possibleConstructorReturn(this, _TrackerReact.call(this, props));                                 // 12
  }                                                                                                           // 14
                                                                                                              //
  AdminConsole.prototype.renderQuestions = function () {                                                      //
    function renderQuestions() {                                                                              //
      var questions = Questions.find().fetch().reverse();                                                     // 17
      return questions.map(function (question) {                                                              // 18
        return React.createElement(Question, { key: question._id, question: question });                      // 18
      });                                                                                                     // 18
    }                                                                                                         // 21
                                                                                                              //
    return renderQuestions;                                                                                   //
  }();                                                                                                        //
                                                                                                              //
  AdminConsole.prototype.render = function () {                                                               //
    function render() {                                                                                       //
      return React.createElement(                                                                             // 24
        'div',                                                                                                // 25
        { className: 'admin container' },                                                                     // 25
        React.createElement(                                                                                  // 26
          'header',                                                                                           // 26
          null,                                                                                               // 26
          React.createElement(                                                                                // 27
            'h1',                                                                                             // 27
            null,                                                                                             // 27
            'MSPF VWYF Admin'                                                                                 // 27
          )                                                                                                   // 27
        ),                                                                                                    // 26
        React.createElement(QuestionForm, null),                                                              // 30
        React.createElement(                                                                                  // 32
          'ul',                                                                                               // 32
          null,                                                                                               // 32
          this.renderQuestions()                                                                              // 33
        )                                                                                                     // 32
      );                                                                                                      // 25
    }                                                                                                         // 37
                                                                                                              //
    return render;                                                                                            //
  }();                                                                                                        //
                                                                                                              //
  return AdminConsole;                                                                                        //
}(TrackerReact(Component));                                                                                   //
                                                                                                              //
AdminConsole.propTypes = {                                                                                    // 40
  questions: PropTypes.array.isRequired                                                                       // 41
};                                                                                                            // 40
                                                                                                              //
AdminConsole.defaultProps = {                                                                                 // 44
  questions: []                                                                                               // 45
};                                                                                                            // 44
                                                                                                              //
module.export("default",exports.default=(AdminConsole));                                                      // 48
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Home.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","babel-runtime/helpers/extends","react","lodash","./Results.jsx",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// imports/ui/Home.jsx                                                                                        //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var _extends;module.import('babel-runtime/helpers/extends',{"default":function(v){_extends=v}});var React,PropTypes;module.import('react',{"default":function(v){React=v},"PropTypes":function(v){PropTypes=v}});var _;module.import('lodash',{"default":function(v){_=v}});var Results;module.import('./Results.jsx',{"Results":function(v){Results=v}});
                                                                                                              //
                                                                                                              //
                                                                                                              //
                                                                                                              // 1
                                                                                                              // 2
                                                                                                              // 3
                                                                                                              //
var TWITTER_PAGE_LINK = 'https://twitter.com/vwyf1x1';                                                        // 5
var GOOGLE_FORM_LINK = 'https://goo.gl/forms/lf9dBVNkjt0ixVmn2';                                              // 6
                                                                                                              //
function NavLinks() {                                                                                         // 8
  return React.createElement(                                                                                 // 9
    'nav',                                                                                                    // 10
    { className: 'navbar navbar-default', role: 'navigation' },                                               // 10
    React.createElement(                                                                                      // 11
      'div',                                                                                                  // 11
      { className: 'navbar-header' },                                                                         // 11
      React.createElement(                                                                                    // 12
        'button',                                                                                             // 12
        { type: 'button',                                                                                     // 12
          className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '.navbar-ex1-collapse' },     // 13
        React.createElement(                                                                                  // 14
          'span',                                                                                             // 14
          { className: 'sr-only' },                                                                           // 14
          'Toggle navigation'                                                                                 // 14
        ),                                                                                                    // 14
        React.createElement('span', { className: 'icon-bar' }),                                               // 15
        React.createElement('span', { className: 'icon-bar' }),                                               // 16
        React.createElement('span', { className: 'icon-bar' })                                                // 17
      )                                                                                                       // 12
    ),                                                                                                        // 11
    React.createElement(                                                                                      // 21
      'div',                                                                                                  // 21
      { className: 'collapse navbar-collapse navbar-ex1-collapse' },                                          // 21
      React.createElement(                                                                                    // 22
        'ul',                                                                                                 // 22
        { className: 'nav navbar-nav' },                                                                      // 22
        React.createElement(                                                                                  // 23
          'li',                                                                                               // 23
          null,                                                                                               // 23
          React.createElement(                                                                                // 23
            'a',                                                                                              // 23
            { href: '#what' },                                                                                // 23
            'WHAT'                                                                                            // 23
          )                                                                                                   // 23
        ),                                                                                                    // 23
        React.createElement(                                                                                  // 24
          'li',                                                                                               // 24
          null,                                                                                               // 24
          React.createElement(                                                                                // 24
            'a',                                                                                              // 24
            { href: '#highlights' },                                                                          // 24
            'HIGHLIGHTS'                                                                                      // 24
          )                                                                                                   // 24
        ),                                                                                                    // 24
        React.createElement(                                                                                  // 25
          'li',                                                                                               // 25
          null,                                                                                               // 25
          React.createElement(                                                                                // 25
            'a',                                                                                              // 25
            { href: '#votes' },                                                                               // 25
            'VOTES'                                                                                           // 25
          )                                                                                                   // 25
        ),                                                                                                    // 25
        React.createElement(                                                                                  // 26
          'li',                                                                                               // 26
          null,                                                                                               // 26
          React.createElement(                                                                                // 26
            'a',                                                                                              // 26
            { href: '#team' },                                                                                // 26
            'TEAM'                                                                                            // 26
          )                                                                                                   // 26
        ),                                                                                                    // 26
        React.createElement(                                                                                  // 27
          'li',                                                                                               // 27
          null,                                                                                               // 27
          React.createElement(                                                                                // 27
            'a',                                                                                              // 27
            { href: '#make' },                                                                                // 27
            'MAKE'                                                                                            // 27
          )                                                                                                   // 27
        )                                                                                                     // 27
      )                                                                                                       // 22
    )                                                                                                         // 21
  );                                                                                                          // 10
};                                                                                                            // 32
                                                                                                              //
function Header() {                                                                                           // 34
  return React.createElement(                                                                                 // 35
    'header',                                                                                                 // 36
    null,                                                                                                     // 36
    React.createElement(                                                                                      // 37
      'a',                                                                                                    // 37
      { className: 'logo', href: '/' },                                                                       // 37
      React.createElement('img', { src: 'images/logo.png' })                                                  // 37
    ),                                                                                                        // 37
    React.createElement(NavLinks, null),                                                                      // 38
    React.createElement('iframe', { id: 'intro-video', src: 'https://player.vimeo.com/video/190417768',       // 39
      width: '640', height: '360', frameBorder: '0',                                                          // 40
      allowFullScreen: true })                                                                                // 41
  );                                                                                                          // 36
};                                                                                                            // 45
                                                                                                              //
function SectionTitle(_ref) {                                                                                 // 47
  var anchor = _ref.anchor;                                                                                   // 47
  var title = _ref.title;                                                                                     // 47
                                                                                                              //
  return React.createElement(                                                                                 // 48
    'h1',                                                                                                     // 49
    { className: 'section-title' },                                                                           // 49
    React.createElement(                                                                                      // 50
      'a',                                                                                                    // 50
      { name: anchor, href: '#' + anchor },                                                                   // 50
      title                                                                                                   // 50
    )                                                                                                         // 50
  );                                                                                                          // 49
};                                                                                                            // 53
                                                                                                              //
function CarouselItem(props) {                                                                                // 55
  return React.createElement(                                                                                 // 56
    'div',                                                                                                    // 57
    { className: 'item' + (props.isActive ? ' active' : '') },                                                // 57
    React.createElement('img', { src: props.src, alt: props.title }),                                         // 58
    React.createElement(                                                                                      // 59
      'div',                                                                                                  // 59
      { className: 'carousel-caption' },                                                                      // 59
      React.createElement(                                                                                    // 60
        'h1',                                                                                                 // 60
        null,                                                                                                 // 60
        props.title                                                                                           // 60
      ),                                                                                                      // 60
      React.createElement(                                                                                    // 61
        'p',                                                                                                  // 61
        null,                                                                                                 // 61
        props.text                                                                                            // 61
      )                                                                                                       // 61
    )                                                                                                         // 59
  );                                                                                                          // 57
};                                                                                                            // 65
                                                                                                              //
CarouselItem.PropTypes = {                                                                                    // 67
  src: PropTypes.string.isRequired,                                                                           // 68
  title: PropTypes.string.isRequired,                                                                         // 69
  text: PropTypes.string.isRequired,                                                                          // 70
  isActive: PropTypes.bool.isRequired                                                                         // 71
};                                                                                                            // 67
                                                                                                              //
function CarouselLink(_ref2) {                                                                                // 74
  var isActive = _ref2.isActive;                                                                              // 74
  var index = _ref2.index;                                                                                    // 74
                                                                                                              //
  return React.createElement('li', { 'data-target': '#vwyf-highlights-carousel',                              // 75
    'data-slide-to': index,                                                                                   // 77
    className: isActive ? 'active' : '' });                                                                   // 78
};                                                                                                            // 81
                                                                                                              //
function Carousel(_ref3) {                                                                                    // 83
  var items = _ref3.items;                                                                                    // 83
                                                                                                              //
  return React.createElement(                                                                                 // 84
    'div',                                                                                                    // 85
    { id: 'vwyf-highlights-carousel', className: 'carousel slide', 'data-ride': 'carousel' },                 // 85
    React.createElement(                                                                                      // 86
      'ol',                                                                                                   // 86
      { className: 'carousel-indicators' },                                                                   // 86
      _.map(items, function (item, i) {                                                                       // 88
        return React.createElement(CarouselLink, { key: i, index: i, isActive: i === 0 });                    // 88
      })                                                                                                      // 88
    ),                                                                                                        // 86
    React.createElement(                                                                                      // 92
      'div',                                                                                                  // 92
      { className: 'carousel-inner', role: 'listbox' },                                                       // 92
      _.map(items, function (item, i) {                                                                       // 94
        return React.createElement(CarouselItem, _extends({ key: i }, item, { isActive: i === 0 }));          // 94
      })                                                                                                      // 94
    ),                                                                                                        // 92
    React.createElement(                                                                                      // 99
      'a',                                                                                                    // 99
      { className: 'left carousel-control',                                                                   // 99
        href: '#vwyf-highlights-carousel', role: 'button', 'data-slide': 'prev' },                            // 100
      React.createElement('span', { className: 'glyphicon glyphicon-chevron-left', 'aria-hidden': 'true' }),  // 101
      React.createElement(                                                                                    // 102
        'span',                                                                                               // 102
        { className: 'sr-only' },                                                                             // 102
        'Previous'                                                                                            // 102
      )                                                                                                       // 102
    ),                                                                                                        // 99
    React.createElement(                                                                                      // 104
      'a',                                                                                                    // 104
      { className: 'right carousel-control',                                                                  // 104
        href: '#vwyf-highlights-carousel', role: 'button', 'data-slide': 'next' },                            // 105
      React.createElement('span', { className: 'glyphicon glyphicon-chevron-right', 'aria-hidden': 'true' }),
      React.createElement(                                                                                    // 107
        'span',                                                                                               // 107
        { className: 'sr-only' },                                                                             // 107
        'Next'                                                                                                // 107
      )                                                                                                       // 107
    )                                                                                                         // 104
  );                                                                                                          // 85
}                                                                                                             // 111
                                                                                                              //
function Highlights() {                                                                                       // 113
  var highlights = [{                                                                                         // 114
    src: 'images/highlight_hillary_trump.jpg',                                                                // 116
    title: 'Most Voted Question',                                                                             // 117
    text: 'Whenever the question shows up, it instantly drew a crowd, sometimes waiting in line for showing their opinion.'
  }, {                                                                                                        // 115
    src: 'images/highlight_homeless.jpg',                                                                     // 121
    title: 'Conflicts in action and mind',                                                                    // 122
    text: 'We observed people who voted to help, ran into homeless right away, debated hard, and declined to give money.'
  }, {                                                                                                        // 120
    src: 'images/highlight_uber.jpg',                                                                         // 126
    title: 'Heated Discussion',                                                                               // 127
    text: 'Seriously, Uber??'                                                                                 // 128
  }, {                                                                                                        // 125
    src: 'images/highlight_dance.jpg',                                                                        // 131
    title: 'Dance through the door?',                                                                         // 132
    text: 'Applause for the one hundred people who dance on market street'                                    // 133
  }];                                                                                                         // 130
                                                                                                              //
  return React.createElement(                                                                                 // 137
    'div',                                                                                                    // 138
    { className: 'highlights' },                                                                              // 138
    React.createElement(Carousel, { items: highlights })                                                      // 139
  );                                                                                                          // 138
};                                                                                                            // 142
                                                                                                              //
function TwitterTimeLine() {                                                                                  // 144
  return React.createElement(                                                                                 // 145
    'div',                                                                                                    // 146
    { className: 'twitter-wrapper' },                                                                         // 146
    React.createElement('a', { className: 'twitter-timeline',                                                 // 147
      'data-width': '620',                                                                                    // 148
      'data-height': '230',                                                                                   // 149
      'data-theme': 'light',                                                                                  // 150
      'data-link-color': '#2B7BB9',                                                                           // 151
      href: 'https://twitter.com/vwyf1x1' })                                                                  // 152
  );                                                                                                          // 146
};                                                                                                            // 155
                                                                                                              //
function Team() {                                                                                             // 157
  return React.createElement(                                                                                 // 158
    'div',                                                                                                    // 159
    { className: 'container team' },                                                                          // 159
    React.createElement(                                                                                      // 160
      'div',                                                                                                  // 160
      { className: 'row' },                                                                                   // 160
      React.createElement(                                                                                    // 161
        'div',                                                                                                // 161
        { className: 'col-md-2 col-md-offset-1 ppl' },                                                        // 161
        React.createElement(                                                                                  // 162
          'a',                                                                                                // 162
          { className: 'name', target: '_blank', href: 'http://cheeriocheng.com' },                           // 162
          'Cheng Xu'                                                                                          // 162
        )                                                                                                     // 162
      ),                                                                                                      // 161
      React.createElement(                                                                                    // 165
        'div',                                                                                                // 165
        { className: 'col-md-2 ppl' },                                                                        // 165
        React.createElement(                                                                                  // 166
          'a',                                                                                                // 166
          { className: 'name', target: '_blank', href: 'http://emeraldbottery.com' },                         // 166
          'Mike Philetus Weller'                                                                              // 166
        )                                                                                                     // 166
      ),                                                                                                      // 165
      React.createElement(                                                                                    // 169
        'div',                                                                                                // 169
        { className: 'col-md-2 ppl' },                                                                        // 169
        React.createElement(                                                                                  // 170
          'a',                                                                                                // 170
          { className: 'name', target: '_blank', href: 'https://github.com/parano' },                         // 170
          'Chaoyu Yang'                                                                                       // 170
        )                                                                                                     // 170
      ),                                                                                                      // 169
      React.createElement(                                                                                    // 173
        'div',                                                                                                // 173
        { className: 'col-md-2 ppl' },                                                                        // 173
        React.createElement(                                                                                  // 174
          'a',                                                                                                // 174
          { className: 'name', target: '_blank', href: 'http://ziyunpeng.com' },                              // 174
          'Ziyun Peng'                                                                                        // 174
        )                                                                                                     // 174
      ),                                                                                                      // 173
      React.createElement(                                                                                    // 177
        'div',                                                                                                // 177
        { className: 'col-md-2 ppl' },                                                                        // 177
        React.createElement(                                                                                  // 178
          'a',                                                                                                // 178
          { className: 'name', target: '_blank', href: 'https://about.me/yubozhao' },                         // 178
          'Bozhao Yu'                                                                                         // 178
        )                                                                                                     // 178
      )                                                                                                       // 177
    )                                                                                                         // 160
  );                                                                                                          // 159
};                                                                                                            // 183
                                                                                                              //
function Make() {                                                                                             // 185
  return React.createElement(                                                                                 // 186
    'div',                                                                                                    // 187
    { className: 'container make' },                                                                          // 187
    React.createElement(                                                                                      // 188
      'div',                                                                                                  // 188
      { className: 'row' },                                                                                   // 188
      React.createElement(                                                                                    // 189
        'div',                                                                                                // 189
        { className: 'col-md-5 col-md-offset-1' },                                                            // 189
        React.createElement(                                                                                  // 190
          'a',                                                                                                // 190
          { className: 'big-link', target: '_blank',                                                          // 190
            href: 'http://www.instructables.com/id/Vote-With-Your-Feet/' },                                   // 191
          'Instructable'                                                                                      // 190
        )                                                                                                     // 190
      ),                                                                                                      // 189
      React.createElement(                                                                                    // 196
        'div',                                                                                                // 196
        { className: 'col-md-5' },                                                                            // 196
        React.createElement(                                                                                  // 197
          'a',                                                                                                // 197
          { className: 'big-link', target: '_blank',                                                          // 197
            href: 'https://github.com/vwyf' },                                                                // 198
          'Github'                                                                                            // 197
        )                                                                                                     // 197
      )                                                                                                       // 196
    ),                                                                                                        // 188
    React.createElement(                                                                                      // 204
      'div',                                                                                                  // 204
      { className: 'row' },                                                                                   // 204
      React.createElement(                                                                                    // 205
        'div',                                                                                                // 205
        { className: 'col-md-5 col-md-offset-1' },                                                            // 205
        React.createElement(                                                                                  // 206
          'a',                                                                                                // 206
          { className: 'big-link', target: '_blank',                                                          // 206
            href: 'http://www.instructables.com/id/Data-Collection-With-Raspberry-Pi/' },                     // 207
          'Data Collection'                                                                                   // 206
        )                                                                                                     // 206
      ),                                                                                                      // 205
      React.createElement(                                                                                    // 212
        'div',                                                                                                // 212
        { className: 'col-md-5' },                                                                            // 212
        React.createElement(                                                                                  // 213
          'a',                                                                                                // 213
          { className: 'big-link', target: '_blank',                                                          // 213
            href: 'http://www.instructables.com/id/Howto-Flipdot-With-a-Raspi/' },                            // 214
          'How To Flipdot'                                                                                    // 213
        )                                                                                                     // 213
      )                                                                                                       // 212
    )                                                                                                         // 204
  );                                                                                                          // 187
};                                                                                                            // 221
                                                                                                              //
function Votes() {                                                                                            // 223
  return React.createElement(                                                                                 // 224
    'div',                                                                                                    // 225
    { className: 'container votes make' },                                                                    // 225
    React.createElement(                                                                                      // 226
      'div',                                                                                                  // 226
      { className: 'row' },                                                                                   // 226
      React.createElement(                                                                                    // 227
        'div',                                                                                                // 227
        { className: 'col-md-5 col-md-offset-1' },                                                            // 227
        React.createElement(                                                                                  // 228
          'a',                                                                                                // 228
          { className: 'big-link', href: GOOGLE_FORM_LINK, target: '_blank' },                                // 228
          'SUBMIT QUESTIONS'                                                                                  // 228
        )                                                                                                     // 228
      ),                                                                                                      // 227
      React.createElement(                                                                                    // 233
        'div',                                                                                                // 233
        { className: 'col-md-5' },                                                                            // 233
        React.createElement(                                                                                  // 234
          'a',                                                                                                // 234
          { className: 'big-link results', href: './results.html' },                                          // 234
          'SEE ALL VOTE RESULTS'                                                                              // 234
        )                                                                                                     // 234
      )                                                                                                       // 233
    )                                                                                                         // 226
  );                                                                                                          // 225
};                                                                                                            // 241
                                                                                                              //
var INTRO_1 = 'Have a question for your fellow citizens and wonder how they\'d react? We made an art installation for just that! "Vote With Your Feet" is a public installation that asks questions for citizens, and get answers from citizens.';
                                                                                                              //
var INTRO_2 = 'Two doorways stand in the middle of the sidewalk, with a question displayed on a sign above them. Each door stands for an answer. Walk through the door, and your vote will be counted, viewable both at the door and on our website.';
                                                                                                              //
var INTRO_3 = 'The result? We got more than ten thousand votes over 3 days on Market St, San Francisco, to about 80 rotating questions, all of which are crowd-sourced online or at the door. It covers everything from election to pets, whether serious (death penalty) or silly (cats or dogs), reflective (are you happy) or evocative (Trump or Hitler), technical (vim or emacs) or whimsical(would you dance through the door?).';
                                                                                                              //
var INTRO_4 = 'We’re so grateful and proud of all the people who submitted the questions. It was your questions that gave the Vote With Your Feet project a life. The reflection and conversation started at the doorways will carry on beyond the installation itself.';
                                                                                                              //
function Footer() {                                                                                           // 252
  return React.createElement(                                                                                 // 253
    'footer',                                                                                                 // 254
    null,                                                                                                     // 254
    React.createElement(                                                                                      // 255
      'a',                                                                                                    // 255
      { className: 'logo', href: 'https://twitter.com/vwyf1x1' },                                             // 255
      React.createElement('img', { src: 'images/logo.png' })                                                  // 255
    )                                                                                                         // 255
  );                                                                                                          // 254
}                                                                                                             // 258
                                                                                                              //
var HomeView = function (_React$Component) {                                                                  //
  _inherits(HomeView, _React$Component);                                                                      //
                                                                                                              //
  function HomeView() {                                                                                       //
    _classCallCheck(this, HomeView);                                                                          //
                                                                                                              //
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));                         //
  }                                                                                                           //
                                                                                                              //
  HomeView.prototype.render = function () {                                                                   //
    function render() {                                                                                       //
      return React.createElement(                                                                             // 262
        'div',                                                                                                // 263
        { className: 'main container-fluid home' },                                                           // 263
        React.createElement(Header, null),                                                                    // 264
        React.createElement(SectionTitle, { anchor: 'what', title: 'WHAT IS VOTE WITH YOUR FEET' }),          // 266
        React.createElement(                                                                                  // 267
          'div',                                                                                              // 267
          { className: 'intro' },                                                                             // 267
          React.createElement(                                                                                // 268
            'p',                                                                                              // 268
            null,                                                                                             // 268
            INTRO_1                                                                                           // 268
          ),                                                                                                  // 268
          React.createElement(                                                                                // 269
            'p',                                                                                              // 269
            null,                                                                                             // 269
            INTRO_2                                                                                           // 269
          ),                                                                                                  // 269
          React.createElement(                                                                                // 270
            'p',                                                                                              // 270
            null,                                                                                             // 270
            INTRO_3                                                                                           // 270
          ),                                                                                                  // 270
          React.createElement(                                                                                // 271
            'p',                                                                                              // 271
            null,                                                                                             // 271
            INTRO_4                                                                                           // 271
          )                                                                                                   // 271
        ),                                                                                                    // 267
        React.createElement(TwitterTimeLine, null),                                                           // 273
        React.createElement(SectionTitle, { anchor: 'highlights', title: 'HIGHLIGHTS' }),                     // 275
        React.createElement(Highlights, null),                                                                // 276
        React.createElement(SectionTitle, { anchor: 'votes', title: 'THE VOTES' }),                           // 278
        React.createElement(Results, { limit: '8', numOfColumns: '4' }),                                      // 279
        React.createElement(Votes, null),                                                                     // 280
        React.createElement(SectionTitle, { anchor: 'team', title: 'THE TEAM' }),                             // 282
        React.createElement(Team, null),                                                                      // 283
        React.createElement(SectionTitle, { anchor: 'make', title: 'THE MAKE' }),                             // 285
        React.createElement(Make, null),                                                                      // 286
        React.createElement(Footer, null)                                                                     // 288
      );                                                                                                      // 263
    }                                                                                                         // 291
                                                                                                              //
    return render;                                                                                            //
  }();                                                                                                        //
                                                                                                              //
  return HomeView;                                                                                            //
}(React.Component);                                                                                           //
                                                                                                              //
module.export("default",exports.default=(HomeView));                                                          //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"InlineTextEditor.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// imports/ui/InlineTextEditor.jsx                                                                            //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React;module.import('react',{"default":function(v){React=v}});
                                                                                                              //
                                                                                                              //
                                                                                                              // 1
                                                                                                              //
var InlineTextEditor = function (_React$Component) {                                                          //
  _inherits(InlineTextEditor, _React$Component);                                                              //
                                                                                                              //
  function InlineTextEditor(props) {                                                                          // 4
    _classCallCheck(this, InlineTextEditor);                                                                  // 4
                                                                                                              //
    var _this = _possibleConstructorReturn(this, _React$Component.call(this));                                // 4
                                                                                                              //
    _this.state = { visible: false };                                                                         // 6
    _this.toggle = _this.toggle.bind(_this);                                                                  // 7
    _this.updateChange = _this.updateChange.bind(_this);                                                      // 8
    return _this;                                                                                             // 4
  }                                                                                                           // 9
                                                                                                              //
  InlineTextEditor.prototype.updateChange = function () {                                                     //
    function updateChange(e) {                                                                                //
      this.props.updateMethod(this.props.type, e.currentTarget.value.trim());                                 // 11
      this.toggle();                                                                                          // 12
    }                                                                                                         // 13
                                                                                                              //
    return updateChange;                                                                                      //
  }();                                                                                                        //
                                                                                                              //
  InlineTextEditor.prototype.toggle = function () {                                                           //
    function toggle(e) {                                                                                      //
      if (e && e.preventDefault) {                                                                            // 15
        e.preventDefault();                                                                                   // 16
      }                                                                                                       // 17
      var visible = this.state.visible ? false : true;                                                        // 18
      this.setState({ visible: visible });                                                                    // 19
    }                                                                                                         // 20
                                                                                                              //
    return toggle;                                                                                            //
  }();                                                                                                        //
                                                                                                              //
  InlineTextEditor.prototype.render = function () {                                                           //
    function render() {                                                                                       //
      var content = React.createElement(                                                                      // 22
        'a',                                                                                                  // 23
        { onClick: this.toggle },                                                                             // 23
        React.createElement(                                                                                  // 24
          'span',                                                                                             // 24
          null,                                                                                               // 24
          this.props.prefix,                                                                                  // 24
          this.props.text                                                                                     // 24
        )                                                                                                     // 24
      );                                                                                                      // 23
      if (this.state.visible) {                                                                               // 27
        content = React.createElement('input', { type: 'text', onBlur: this.updateChange, defaultValue: this.props.text });
      }                                                                                                       // 31
      return React.createElement(                                                                             // 32
        'div',                                                                                                // 33
        null,                                                                                                 // 33
        content                                                                                               // 34
      );                                                                                                      // 33
    }                                                                                                         // 37
                                                                                                              //
    return render;                                                                                            //
  }();                                                                                                        //
                                                                                                              //
  return InlineTextEditor;                                                                                    //
}(React.Component);                                                                                           //
                                                                                                              //
InlineTextEditor.propTypes = {                                                                                // 40
  text: React.PropTypes.string,                                                                               // 41
  type: React.PropTypes.string,                                                                               // 42
  prefix: React.PropTypes.string,                                                                             // 43
  updateMethod: React.PropTypes.func                                                                          // 44
};                                                                                                            // 40
                                                                                                              //
InlineTextEditor.defaultTypes = {                                                                             // 47
  text: '',                                                                                                   // 48
  prefix: '',                                                                                                 // 49
  type: 'text',                                                                                               // 50
  updateMethod: function () {                                                                                 // 51
    function updateMethod() {}                                                                                // 51
                                                                                                              //
    return updateMethod;                                                                                      // 51
  }()                                                                                                         // 51
};                                                                                                            // 47
                                                                                                              //
module.export("default",exports.default=(InlineTextEditor));                                                  // 54
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Question.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/meteor","../api/questions.js","./InlineTextEditor.jsx",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// imports/ui/Question.jsx                                                                                    //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Questions;module.import('../api/questions.js',{"Questions":function(v){Questions=v}});var InlineTextEditor;module.import('./InlineTextEditor.jsx',{"default":function(v){InlineTextEditor=v}});
                                                                                                              //
                                                                                                              //
                                                                                                              // 1
                                                                                                              // 2
                                                                                                              //
                                                                                                              // 4
                                                                                                              //
                                                                                                              // 6
                                                                                                              //
var Question = function (_Component) {                                                                        //
  _inherits(Question, _Component);                                                                            //
                                                                                                              //
  function Question(props) {                                                                                  // 9
    _classCallCheck(this, Question);                                                                          // 9
                                                                                                              //
    var _this = _possibleConstructorReturn(this, _Component.call(this, props));                               // 9
                                                                                                              //
    _this.deleteThisQuestion = _this.deleteThisQuestion.bind(_this);                                          // 11
    _this.updatePriority = _this.updatePriority.bind(_this);                                                  // 12
    _this.updateText = _this.updateText.bind(_this);                                                          // 13
    _this.resetQuestion = _this.resetQuestion.bind(_this);                                                    // 14
    return _this;                                                                                             // 9
  }                                                                                                           // 15
                                                                                                              //
  Question.prototype.updatePriority = function () {                                                           //
    function updatePriority(e) {                                                                              //
      Meteor.call('questions.priority.update', this.props.question._id, Number(e.currentTarget.value));       // 17
    }                                                                                                         // 20
                                                                                                              //
    return updatePriority;                                                                                    //
  }();                                                                                                        //
                                                                                                              //
  Question.prototype.deleteThisQuestion = function () {                                                       //
    function deleteThisQuestion() {                                                                           //
      if (confirm("delete this question???")) {                                                               // 22
        Meteor.call('questions.remove', this.props.question._id);                                             // 23
      }                                                                                                       // 24
    }                                                                                                         // 25
                                                                                                              //
    return deleteThisQuestion;                                                                                //
  }();                                                                                                        //
                                                                                                              //
  Question.prototype.updateText = function () {                                                               //
    function updateText(type, content) {                                                                      //
      var _Meteor$call;                                                                                       // 26
                                                                                                              //
      Meteor.call('questions.content.update', this.props.question._id, (_Meteor$call = {}, _Meteor$call[type] = content, _Meteor$call));
    }                                                                                                         // 30
                                                                                                              //
    return updateText;                                                                                        //
  }();                                                                                                        //
                                                                                                              //
  Question.prototype.resetQuestion = function () {                                                            //
    function resetQuestion() {                                                                                //
      if (confirm("Reset this question???")) {                                                                // 32
        Meteor.call('questions.reset', this.props.question._id);                                              // 33
      }                                                                                                       // 34
    }                                                                                                         // 35
                                                                                                              //
    return resetQuestion;                                                                                     //
  }();                                                                                                        //
                                                                                                              //
  Question.prototype.render = function () {                                                                   //
    function render() {                                                                                       //
      var priority = this.props.question.priority || '';                                                      // 37
      return React.createElement(                                                                             // 38
        'li',                                                                                                 // 39
        { className: 'question' },                                                                            // 39
        React.createElement(                                                                                  // 40
          'div',                                                                                              // 40
          { className: 'row' },                                                                               // 40
          React.createElement(                                                                                // 41
            'div',                                                                                            // 41
            { className: 'col-md-2' },                                                                        // 41
            React.createElement(                                                                              // 42
              'select',                                                                                       // 42
              { value: priority.toString(),                                                                   // 42
                onChange: this.updatePriority },                                                              // 43
              React.createElement(                                                                            // 44
                'option',                                                                                     // 44
                { value: '0' },                                                                               // 44
                'Urgent 5x'                                                                                   // 44
              ),                                                                                              // 44
              React.createElement(                                                                            // 45
                'option',                                                                                     // 45
                { value: '1' },                                                                               // 45
                'High 3x'                                                                                     // 45
              ),                                                                                              // 45
              React.createElement(                                                                            // 46
                'option',                                                                                     // 46
                { value: '2' },                                                                               // 46
                'Medium 2x'                                                                                   // 46
              ),                                                                                              // 46
              React.createElement(                                                                            // 47
                'option',                                                                                     // 47
                { value: '3' },                                                                               // 47
                'Low 1x'                                                                                      // 47
              ),                                                                                              // 47
              React.createElement(                                                                            // 48
                'option',                                                                                     // 48
                { value: '4' },                                                                               // 48
                'Turned Off'                                                                                  // 48
              )                                                                                               // 48
            )                                                                                                 // 42
          ),                                                                                                  // 41
          React.createElement(                                                                                // 51
            'div',                                                                                            // 51
            { className: 'col-md-4' },                                                                        // 51
            React.createElement(InlineTextEditor, { text: this.props.question.text,                           // 52
              type: 'text',                                                                                   // 53
              updateMethod: this.updateText })                                                                // 54
          ),                                                                                                  // 51
          React.createElement(                                                                                // 56
            'div',                                                                                            // 56
            { className: 'col-md-2' },                                                                        // 56
            React.createElement(InlineTextEditor, { text: this.props.question.optionA,                        // 57
              type: 'optionA',                                                                                // 58
              prefix: 'A. ',                                                                                  // 59
              updateMethod: this.updateText })                                                                // 60
          ),                                                                                                  // 56
          React.createElement(                                                                                // 62
            'div',                                                                                            // 62
            { className: 'col-md-2' },                                                                        // 62
            React.createElement(InlineTextEditor, { text: this.props.question.optionB,                        // 63
              type: 'optionB',                                                                                // 64
              prefix: 'B. ',                                                                                  // 65
              updateMethod: this.updateText })                                                                // 66
          ),                                                                                                  // 62
          React.createElement(                                                                                // 68
            'div',                                                                                            // 68
            { className: 'col-md-1' },                                                                        // 68
            React.createElement(                                                                              // 69
              'button',                                                                                       // 69
              { className: 'btn', onClick: this.resetQuestion },                                              // 69
              this.props.question.count.A,                                                                    // 70
              ' ',                                                                                            // 69
              '/',                                                                                            // 70
              ' ',                                                                                            // 69
              this.props.question.count.B                                                                     // 70
            )                                                                                                 // 69
          ),                                                                                                  // 68
          React.createElement(                                                                                // 73
            'div',                                                                                            // 73
            { className: 'col-md-1' },                                                                        // 73
            React.createElement(                                                                              // 74
              'button',                                                                                       // 74
              { className: 'delete', onClick: this.deleteThisQuestion },                                      // 74
              '×'                                                                                             // 74
            )                                                                                                 // 74
          )                                                                                                   // 73
        )                                                                                                     // 40
      );                                                                                                      // 39
    }                                                                                                         // 81
                                                                                                              //
    return render;                                                                                            //
  }();                                                                                                        //
                                                                                                              //
  return Question;                                                                                            //
}(Component);                                                                                                 //
                                                                                                              //
module.export("default",exports.default=(Question));                                                          //
                                                                                                              //
                                                                                                              //
Question.propTypes = {                                                                                        // 84
  question: PropTypes.object.isRequired                                                                       // 85
};                                                                                                            // 84
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"QuestionForm.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/meteor",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// imports/ui/QuestionForm.jsx                                                                                //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React;module.import('react',{"default":function(v){React=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});
                                                                                                              //
                                                                                                              //
                                                                                                              // 1
                                                                                                              // 2
                                                                                                              //
var QuestionForm = function (_React$Component) {                                                              //
  _inherits(QuestionForm, _React$Component);                                                                  //
                                                                                                              //
  function QuestionForm(props) {                                                                              // 5
    _classCallCheck(this, QuestionForm);                                                                      // 5
                                                                                                              //
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));                         // 5
                                                                                                              //
    _this.handleSubmit = _this.handleSubmit.bind(_this);                                                      // 7
    return _this;                                                                                             // 5
  }                                                                                                           // 8
                                                                                                              //
  QuestionForm.prototype.handleSubmit = function () {                                                         //
    function handleSubmit(event) {                                                                            //
      event.preventDefault();                                                                                 // 10
      var self = this;                                                                                        // 11
      var data = {                                                                                            // 12
        text: self.questionInput.value.trim(),                                                                // 13
        optionA: self.optionAInput.value.trim(),                                                              // 14
        optionB: self.optionBInput.value.trim(),                                                              // 15
        priority: Number(self.selectPriority.value)                                                           // 16
      };                                                                                                      // 12
                                                                                                              //
      Meteor.call('questions.insert', data);                                                                  // 19
                                                                                                              //
      // Clear form                                                                                           //
      this.questionInput.value = '';                                                                          // 22
      this.optionAInput.value = '';                                                                           // 23
      this.optionBInput.value = '';                                                                           // 24
    }                                                                                                         // 25
                                                                                                              //
    return handleSubmit;                                                                                      //
  }();                                                                                                        //
                                                                                                              //
  QuestionForm.prototype.render = function () {                                                               //
    function render() {                                                                                       //
      var _this2 = this;                                                                                      // 26
                                                                                                              //
      return React.createElement(                                                                             // 27
        'form',                                                                                               // 28
        { className: 'new-question row', onSubmit: this.handleSubmit },                                       // 28
        React.createElement(                                                                                  // 30
          'div',                                                                                              // 30
          { className: 'col-md-2' },                                                                          // 30
          React.createElement(                                                                                // 31
            'select',                                                                                         // 31
            {                                                                                                 // 31
              defaultValue: '2',                                                                              // 32
              ref: function () {                                                                              // 33
                function ref(_ref) {                                                                          // 33
                  return _this2.selectPriority = _ref;                                                        // 33
                }                                                                                             // 33
                                                                                                              //
                return ref;                                                                                   // 33
              }() },                                                                                          // 33
            React.createElement(                                                                              // 34
              'option',                                                                                       // 34
              { value: '0' },                                                                                 // 34
              'Urgent'                                                                                        // 34
            ),                                                                                                // 34
            React.createElement(                                                                              // 35
              'option',                                                                                       // 35
              { value: '1' },                                                                                 // 35
              'High'                                                                                          // 35
            ),                                                                                                // 35
            React.createElement(                                                                              // 36
              'option',                                                                                       // 36
              { value: '2' },                                                                                 // 36
              'Medium'                                                                                        // 36
            ),                                                                                                // 36
            React.createElement(                                                                              // 37
              'option',                                                                                       // 37
              { value: '3' },                                                                                 // 37
              'Low'                                                                                           // 37
            )                                                                                                 // 37
          )                                                                                                   // 31
        ),                                                                                                    // 30
        React.createElement(                                                                                  // 41
          'div',                                                                                              // 41
          { className: 'col-md-4' },                                                                          // 41
          React.createElement('input', {                                                                      // 42
            type: 'text',                                                                                     // 43
            ref: function () {                                                                                // 44
              function ref(_ref2) {                                                                           // 44
                return _this2.questionInput = _ref2;                                                          // 44
              }                                                                                               // 44
                                                                                                              //
              return ref;                                                                                     // 44
            }(),                                                                                              // 44
            placeholder: 'Type to add new questions'                                                          // 45
          })                                                                                                  // 42
        ),                                                                                                    // 41
        React.createElement(                                                                                  // 49
          'div',                                                                                              // 49
          { className: 'col-md-2' },                                                                          // 49
          React.createElement('input', {                                                                      // 50
            type: 'text',                                                                                     // 51
            ref: function () {                                                                                // 52
              function ref(_ref3) {                                                                           // 52
                return _this2.optionAInput = _ref3;                                                           // 52
              }                                                                                               // 52
                                                                                                              //
              return ref;                                                                                     // 52
            }(),                                                                                              // 52
            placeholder: 'Option A'                                                                           // 53
          })                                                                                                  // 50
        ),                                                                                                    // 49
        React.createElement(                                                                                  // 57
          'div',                                                                                              // 57
          { className: 'col-md-2' },                                                                          // 57
          React.createElement('input', {                                                                      // 58
            type: 'text',                                                                                     // 59
            ref: function () {                                                                                // 60
              function ref(_ref4) {                                                                           // 60
                return _this2.optionBInput = _ref4;                                                           // 60
              }                                                                                               // 60
                                                                                                              //
              return ref;                                                                                     // 60
            }(),                                                                                              // 60
            placeholder: 'Option B'                                                                           // 61
          })                                                                                                  // 58
        ),                                                                                                    // 57
        React.createElement(                                                                                  // 65
          'div',                                                                                              // 65
          { className: 'col-md-2' },                                                                          // 65
          React.createElement(                                                                                // 66
            'button',                                                                                         // 66
            { className: 'btn btn-default add-btn' },                                                         // 66
            'Add'                                                                                             // 66
          )                                                                                                   // 66
        )                                                                                                     // 65
      );                                                                                                      // 28
    }                                                                                                         // 70
                                                                                                              //
    return render;                                                                                            //
  }();                                                                                                        //
                                                                                                              //
  return QuestionForm;                                                                                        //
}(React.Component);                                                                                           //
                                                                                                              //
module.export("default",exports.default=(QuestionForm));                                                      // 73
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Results.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","lodash","meteor/ultimatejs:tracker-react","../api/questions.js","./questions-static.js",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// imports/ui/Results.jsx                                                                                     //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
module.export({Results:function(){return Results},ResultsView:function(){return ResultsView}});var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React;module.import('react',{"default":function(v){React=v}});var _;module.import('lodash',{"default":function(v){_=v}});var TrackerReact;module.import('meteor/ultimatejs:tracker-react',{"default":function(v){TrackerReact=v}});var Questions;module.import('../api/questions.js',{"Questions":function(v){Questions=v}});var QUESTIONS_STATIC;module.import('./questions-static.js',{"QUESTIONS_STATIC":function(v){QUESTIONS_STATIC=v}});
                                                                                                              //
                                                                                                              //
                                                                                                              // 1
                                                                                                              // 2
                                                                                                              // 3
                                                                                                              // 4
                                                                                                              // 5
                                                                                                              //
var GOOGLE_FORM_LINK = 'https://goo.gl/forms/lf9dBVNkjt0ixVmn2';                                              // 7
var TWITTER_PAGE_LINK = 'https://twitter.com/vwyf1x1';                                                        // 8
                                                                                                              //
function getQuestionText(question) {                                                                          // 10
  if (question.text === '?') {                                                                                // 11
    return question.optionA + ' or ' + question.optionB + '?';                                                // 12
  }                                                                                                           // 13
  return question.text;                                                                                       // 14
}                                                                                                             // 15
                                                                                                              //
var ResultItem = function (_React$Component) {                                                                //
  _inherits(ResultItem, _React$Component);                                                                    //
                                                                                                              //
  function ResultItem() {                                                                                     //
    _classCallCheck(this, ResultItem);                                                                        //
                                                                                                              //
    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));                         //
  }                                                                                                           //
                                                                                                              //
  ResultItem.prototype.componentDidMount = function () {                                                      //
    function componentDidMount() {                                                                            //
      this.renderPieChartWithLegend(this.props);                                                              // 19
    }                                                                                                         // 20
                                                                                                              //
    return componentDidMount;                                                                                 //
  }();                                                                                                        //
                                                                                                              //
  ResultItem.prototype.componentDidUpdate = function () {                                                     //
    function componentDidUpdate() {                                                                           //
      this.renderPieChartWithLegend(this.props);                                                              // 22
    }                                                                                                         // 23
                                                                                                              //
    return componentDidUpdate;                                                                                //
  }();                                                                                                        //
                                                                                                              //
  ResultItem.prototype.componentWillReceiveProps = function () {                                              //
    function componentWillReceiveProps(nextProps) {                                                           //
      this.renderPieChartWithLegend(nextProps);                                                               // 25
    }                                                                                                         // 26
                                                                                                              //
    return componentWillReceiveProps;                                                                         //
  }();                                                                                                        //
                                                                                                              //
  ResultItem.prototype.renderPieChartWithLegend = function () {                                               //
    function renderPieChartWithLegend(props) {                                                                //
      this.chart && this.chart.destroy();                                                                     // 28
      // global options variable                                                                              //
      var options = {                                                                                         // 30
        animation: false,                                                                                     // 31
        responsive: true,                                                                                     // 32
        scaleBeginAtZero: true,                                                                               // 33
        tooltipTemplate: "<%=label%>",                                                                        // 34
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
      };                                                                                                      // 30
                                                                                                              //
      var ctxPTD = $(this.pieChart).get(0).getContext("2d");                                                  // 38
      var dataPTD = [{                                                                                        // 39
        label: props.question.optionA + ': ' + props.question.count.A,                                        // 41
        color: "rgba(74, 74, 74, 1)",                                                                         // 42
        highlight: "rgba(74, 74, 74, .9)",                                                                    // 43
        value: props.question.count.A                                                                         // 44
      }, {                                                                                                    // 40
        label: props.question.optionB + ': ' + props.question.count.B,                                        // 47
        color: "rgba(252, 238, 31, 1)",                                                                       // 48
        highlight: "rgba(252, 238, 31, .9)",                                                                  // 49
        value: props.question.count.B                                                                         // 50
      }];                                                                                                     // 46
                                                                                                              //
      this.chart = new Chart(ctxPTD).Pie(dataPTD, options);                                                   // 54
      // pie chart legend                                                                                     //
      $(this.legend).html(this.chart.generateLegend());                                                       // 56
    }                                                                                                         // 57
                                                                                                              //
    return renderPieChartWithLegend;                                                                          //
  }();                                                                                                        //
                                                                                                              //
  ResultItem.prototype.render = function () {                                                                 //
    function render() {                                                                                       //
      var _this2 = this;                                                                                      // 59
                                                                                                              //
      return React.createElement(                                                                             // 60
        'div',                                                                                                // 61
        { className: 'col-md-' + 12 / this.props.numOfColumns },                                              // 61
        React.createElement(                                                                                  // 62
          'div',                                                                                              // 62
          { className: 'result-wrapper' },                                                                    // 62
          React.createElement(                                                                                // 63
            'h1',                                                                                             // 63
            null,                                                                                             // 63
            getQuestionText(this.props.question)                                                              // 63
          ),                                                                                                  // 63
          React.createElement(                                                                                // 64
            'div',                                                                                            // 64
            { className: 'chart' },                                                                           // 64
            React.createElement('canvas', { className: 'pie', ref: function () {                              // 65
                function ref(_ref) {                                                                          // 65
                  return _this2.pieChart = _ref;                                                              // 65
                }                                                                                             // 65
                                                                                                              //
                return ref;                                                                                   // 65
              }() }),                                                                                         // 65
            React.createElement('div', { ref: function () {                                                   // 66
                function ref(_ref2) {                                                                         // 66
                  return _this2.legend = _ref2;                                                               // 66
                }                                                                                             // 66
                                                                                                              //
                return ref;                                                                                   // 66
              }() })                                                                                          // 66
          )                                                                                                   // 64
        )                                                                                                     // 62
      );                                                                                                      // 61
    }                                                                                                         // 70
                                                                                                              //
    return render;                                                                                            //
  }();                                                                                                        //
                                                                                                              //
  return ResultItem;                                                                                          //
}(React.Component);                                                                                           //
                                                                                                              //
ResultItem.propTypes = {                                                                                      // 73
  question: React.PropTypes.object,                                                                           // 74
  numOfColumns: React.PropTypes.integer // integer in 1, 2, 3, 4, 6, 12                                       // 75
};                                                                                                            // 73
                                                                                                              //
var ResultsRow = function ResultsRow(_ref3) {                                                                 // 78
  var questions = _ref3.questions;                                                                            // 78
  var numOfColumns = _ref3.numOfColumns;                                                                      // 78
  return React.createElement(                                                                                 // 78
    'div',                                                                                                    // 79
    { className: 'results-row' },                                                                             // 79
    React.createElement(                                                                                      // 80
      'div',                                                                                                  // 80
      { className: 'container' },                                                                             // 80
      React.createElement(                                                                                    // 81
        'div',                                                                                                // 81
        { className: 'row' },                                                                                 // 81
        questions.map(function (question) {                                                                   // 82
          return React.createElement(ResultItem, { key: question.id, question: question, numOfColumns: numOfColumns });
        })                                                                                                    // 82
      )                                                                                                       // 81
    )                                                                                                         // 80
  );                                                                                                          // 79
};                                                                                                            // 78
                                                                                                              //
var Results = function (_TrackerReact) {                                                                      // 88
  _inherits(Results, _TrackerReact);                                                                          // 88
                                                                                                              //
  function Results() {                                                                                        // 88
    _classCallCheck(this, Results);                                                                           // 88
                                                                                                              //
    return _possibleConstructorReturn(this, _TrackerReact.apply(this, arguments));                            // 88
  }                                                                                                           // 88
                                                                                                              //
  Results.prototype.renderResults = function () {                                                             // 88
    function renderResults() {                                                                                // 88
      var _this4 = this;                                                                                      // 89
                                                                                                              //
      //let questions = _.take(Questions.find(                                                                //
      //  {priority: {$lt: 4}}, {sort: {lastUpdatedAt: -1}}                                                   //
      //).fetch(), this.props.limit);                                                                         //
      var questions = _.take(QUESTIONS_STATIC, this.props.limit);                                             // 93
                                                                                                              //
      return _.chunk(questions, this.props.numOfColumns).map(function (threeQuestions, i) {                   // 95
        return React.createElement(ResultsRow, { key: i,                                                      // 96
          questions: threeQuestions,                                                                          // 98
          numOfColumns: _this4.props.numOfColumns                                                             // 99
        });                                                                                                   // 97
      });                                                                                                     // 96
    }                                                                                                         // 101
                                                                                                              //
    return renderResults;                                                                                     // 88
  }();                                                                                                        // 88
                                                                                                              //
  Results.prototype.render = function () {                                                                    // 88
    function render() {                                                                                       // 88
      return React.createElement(                                                                             // 104
        'div',                                                                                                // 105
        { className: 'all-results-wrapper' },                                                                 // 105
        this.renderResults()                                                                                  // 106
      );                                                                                                      // 105
    }                                                                                                         // 109
                                                                                                              //
    return render;                                                                                            // 88
  }();                                                                                                        // 88
                                                                                                              //
  return Results;                                                                                             // 88
}(TrackerReact(React.Component));                                                                             // 88
                                                                                                              //
Results.PropTypes = {                                                                                         // 112
  limit: React.PropTypes.integer,                                                                             // 113
  numOfColumns: React.PropTypes.integer // integer in 1, 2, 3, 4, 6, 12                                       // 114
};                                                                                                            // 112
                                                                                                              //
Results.defaultProps = {                                                                                      // 117
  limit: 1000,                                                                                                // 118
  numOfColumns: 3                                                                                             // 119
};                                                                                                            // 117
                                                                                                              //
var ResultsView = function (_React$Component2) {                                                              // 122
  _inherits(ResultsView, _React$Component2);                                                                  // 122
                                                                                                              //
  function ResultsView() {                                                                                    // 123
    _classCallCheck(this, ResultsView);                                                                       // 123
                                                                                                              //
    var _this5 = _possibleConstructorReturn(this, _React$Component2.call(this));                              // 123
                                                                                                              //
    _this5.state = { numOfVotes: 36503 };                                                                     // 126
    return _this5;                                                                                            // 123
  }                                                                                                           // 127
                                                                                                              //
  ResultsView.prototype.componentDidMount = function () {                                                     // 122
    function componentDidMount() {                                                                            // 122
      //Meteor.call('answers.count', (error, result) => {                                                     //
      //  if(result) {                                                                                        //
      //    this.setState({numOfVotes: result});                                                              //
      //  }                                                                                                   //
      //});                                                                                                   //
    }                                                                                                         // 135
                                                                                                              //
    return componentDidMount;                                                                                 // 122
  }();                                                                                                        // 122
                                                                                                              //
  ResultsView.prototype.getTitle = function () {                                                              // 122
    function getTitle() {                                                                                     // 122
      var tweet = React.createElement(                                                                        // 138
        'a',                                                                                                  // 138
        { href: '/', target: '_blank' },                                                                      // 138
        '#VoteWithYourFeet'                                                                                   // 138
      );                                                                                                      // 138
      if (!this.state.numOfVotes) {                                                                           // 139
        return tweet;                                                                                         // 140
      }                                                                                                       // 141
      return React.createElement(                                                                             // 142
        'span',                                                                                               // 142
        null,                                                                                                 // 142
        React.createElement(                                                                                  // 143
          'b',                                                                                                // 143
          null,                                                                                               // 143
          this.state.numOfVotes                                                                               // 143
        ),                                                                                                    // 143
        ' people ',                                                                                           // 142
        tweet                                                                                                 // 143
      );                                                                                                      // 142
    }                                                                                                         // 145
                                                                                                              //
    return getTitle;                                                                                          // 122
  }();                                                                                                        // 122
                                                                                                              //
  ResultsView.prototype.render = function () {                                                                // 122
    function render() {                                                                                       // 122
      return React.createElement(                                                                             // 148
        'div',                                                                                                // 149
        { className: 'main container-fluid' },                                                                // 149
        React.createElement(                                                                                  // 150
          'header',                                                                                           // 150
          null,                                                                                               // 150
          React.createElement(                                                                                // 151
            'a',                                                                                              // 151
            { className: 'logo', href: '/' },                                                                 // 151
            React.createElement('img', { src: 'images/logo.png' })                                            // 151
          ),                                                                                                  // 151
          React.createElement(                                                                                // 152
            'span',                                                                                           // 152
            { className: 'title' },                                                                           // 152
            this.getTitle()                                                                                   // 152
          ),                                                                                                  // 152
          React.createElement(                                                                                // 153
            'span',                                                                                           // 153
            { className: 'location' },                                                                        // 153
            'San Francisco 2016'                                                                              // 153
          )                                                                                                   // 153
        ),                                                                                                    // 150
        React.createElement(Results, null)                                                                    // 155
      );                                                                                                      // 149
    }                                                                                                         // 158
                                                                                                              //
    return render;                                                                                            // 122
  }();                                                                                                        // 122
                                                                                                              //
  return ResultsView;                                                                                         // 122
}(React.Component);;                                                                                          // 122
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"questions-static.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// imports/ui/questions-static.js                                                                             //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
module.export({QUESTIONS_STATIC:function(){return QUESTIONS_STATIC}});var QUESTIONS_STATIC = [{ "_id": "nzxqK3PHZDMmfqAPt", "text": "Do you know how this works?", "optionA": "no", "optionB": "yes", "priority": 2, "createdAt": "2017-05-08T22:17:21.559Z", "count": { "A": 124, "B": 136 }, "lastUpdatedAt": "2017-05-22T00:59:43.153Z" }, { "_id": "p8fxzcbuRfgToCiKt", "text": "Future of VR?", "optionA": "yay", "optionB": "nah", "priority": 2, "createdAt": "2016-10-07T14:51:49.689Z", "count": { "A": 350, "B": 238 }, "lastUpdatedAt": "2017-05-22T00:58:39.337Z" }, { "_id": "sX6s2eEDZzuqH2eb8", "text": "Do you believe in love?", "optionA": "Yes", "optionB": "No", "priority": 1, "createdAt": "2016-10-06T19:31:35.493Z", "count": { "A": 375, "B": 207 }, "lastUpdatedAt": "2017-05-22T00:56:37.097Z" }, { "_id": "vHAudMXdxqEsFNANh", "text": "Maker Faire", "optionA": "Awesome", "optionB": "Boring", "priority": 1, "createdAt": "2017-05-19T21:51:30.407Z", "count": { "A": 295, "B": 160 }, "lastUpdatedAt": "2017-05-22T00:55:35.841Z" }, { "_id": "zCS6oY62KYhRNTzca", "text": "?", "optionA": "cake", "optionB": "kale", "priority": 1, "createdAt": "2016-10-06T15:27:28.632Z", "count": { "A": 511, "B": 300 }, "lastUpdatedAt": "2017-05-22T00:52:31.346Z" }, { "_id": "k45tMC8i5fksz5qYa", "text": "Functional or imperative programming?", "optionA": "Functional", "optionB": "Imperative", "priority": 3, "createdAt": "2017-05-08T05:14:00.766Z", "count": { "A": 96, "B": 49 }, "lastUpdatedAt": "2017-05-22T00:50:29.072Z" }, { "_id": "7J9RCc7cFYDsRQzpf", "text": "?", "optionA": "married", "optionB": "die single", "priority": 3, "createdAt": "2016-10-07T23:29:17.699Z", "count": { "A": 141, "B": 93 }, "lastUpdatedAt": "2017-05-22T00:48:26.994Z" }, { "_id": "BisoWka3JSjnNzZJs", "text": "?", "optionA": "Human", "optionB": "Robot", "priority": 2, "createdAt": "2016-12-01T16:59:45.525Z", "count": { "A": 155, "B": 173 }, "lastUpdatedAt": "2017-05-22T00:47:26.004Z" }, { "_id": "qNNjkg4KBt6RxuuoR", "text": "?", "optionA": "emacs", "optionB": "vim", "priority": 2, "createdAt": "2016-10-07T14:34:15.410Z", "count": { "A": 168, "B": 312 }, "lastUpdatedAt": "2017-05-22T00:45:23.954Z" }, { "_id": "b7vqhek5JJa6mEDdm", "text": "Who would win?", "optionA": "Hulk", "optionB": "Thor", "priority": 3, "createdAt": "2016-10-08T14:34:43.464Z", "count": { "A": 118, "B": 121 }, "lastUpdatedAt": "2017-05-22T00:43:21.729Z" }, { "_id": "zL4PvMjzyDmDKyCrx", "text": "Best team in the Bay?", "optionA": "Raiders", "optionB": "49ers", "priority": 2, "createdAt": "2016-10-09T00:12:52.376Z", "count": { "A": 158, "B": 296 }, "lastUpdatedAt": "2017-05-22T00:40:18.210Z" }, { "_id": "ZJQxkgxM4Fh6grBLj", "text": "?", "optionA": "star wars", "optionB": "star trek", "priority": 1, "createdAt": "2016-10-08T19:57:22.935Z", "count": { "A": 484, "B": 266 }, "lastUpdatedAt": "2017-05-22T00:38:16.284Z" }, { "_id": "rj3vKeeTrxoGbLC7Y", "text": "?", "optionA": "cats", "optionB": "dogs", "priority": 2, "createdAt": "2016-10-06T15:27:45.832Z", "count": { "A": 432, "B": 666 }, "lastUpdatedAt": "2017-05-22T00:37:15.285Z" }, { "_id": "9fYMqjMAJsbjGvYne", "text": "?", "optionA": "Uber", "optionB": "Lyft", "priority": 2, "createdAt": "2016-10-08T18:13:16.335Z", "count": { "A": 329, "B": 346 }, "lastUpdatedAt": "2017-05-22T00:35:13.124Z" }, { "_id": "7w5oAnFHdhGQAKoFn", "text": "Remove the death penalty in California?", "optionA": "yes", "optionB": "no", "priority": 3, "createdAt": "2016-10-07T14:49:47.583Z", "count": { "A": 75, "B": 45 }, "lastUpdatedAt": "2017-05-22T00:34:11.867Z" }, { "_id": "w3FPzq2TfH5h6zj2A", "text": "meat?", "optionA": "murder", "optionB": "delicious", "priority": 2, "createdAt": "2016-10-08T19:38:52.806Z", "count": { "A": 155, "B": 339 }, "lastUpdatedAt": "2017-05-22T00:32:09.644Z" }, { "_id": "wpFuJxW7HrFg7wNYy", "text": "?", "optionA": "badass", "optionB": "nice ass", "priority": 1, "createdAt": "2016-11-06T21:45:59.130Z", "count": { "A": 288, "B": 306 }, "lastUpdatedAt": "2017-05-22T00:30:07.350Z" }, { "_id": "3gyiSKjsP3zRowhih", "text": "Best music?", "optionA": "Classical", "optionB": "Electronic", "priority": 2, "createdAt": "2016-10-06T15:32:06.028Z", "count": { "A": 299, "B": 318 }, "lastUpdatedAt": "2017-05-22T00:29:06.243Z" }, { "_id": "mMNXZ9mktJF4tMHxH", "text": "?", "optionA": "Hillary", "optionB": "Trump", "priority": 3, "createdAt": "2016-10-07T00:22:20.290Z", "count": { "A": 797, "B": 301 }, "lastUpdatedAt": "2017-05-22T00:24:00.967Z" }, { "_id": "gmbgFbMybT8odQSgy", "text": "Airbnb is a ?", "optionA": "Menace", "optionB": "Service", "priority": 2, "createdAt": "2016-10-06T15:30:48.618Z", "count": { "A": 141, "B": 164 }, "lastUpdatedAt": "2017-05-22T00:19:55.607Z" }, { "_id": "u8riooQJB4QiexMMX", "text": "Have you done something kind today?", "optionA": "Yes", "optionB": "No", "priority": 3, "createdAt": "2016-10-06T15:27:07.129Z", "count": { "A": 120, "B": 63 }, "lastUpdatedAt": "2017-05-22T00:18:54.484Z" }, { "_id": "2sYqAzwNQEjNi3ikk", "text": "Are you attractive?", "optionA": "Yes", "optionB": "No", "priority": 3, "createdAt": "2016-10-06T15:27:16.831Z", "count": { "A": 160, "B": 98 }, "lastUpdatedAt": "2017-05-22T00:16:52.343Z" }, { "_id": "Ce3GTajiyJuJYhw2q", "text": "?", "optionA": "red pill", "optionB": "blue pill", "priority": 2, "createdAt": "2016-10-05T07:43:55.877Z", "count": { "A": 211, "B": 195 }, "lastUpdatedAt": "2017-05-22T00:15:51.154Z" }, { "_id": "DZXsQJTtvioy5HiiP", "text": "Questionnaires?", "optionA": "scientific", "optionB": "biased", "priority": 2, "createdAt": "2016-10-07T22:28:19.984Z", "count": { "A": 132, "B": 178 }, "lastUpdatedAt": "2017-05-22T00:12:47.937Z" }, { "_id": "K6kuBFTycTrSRSiv5", "text": "?", "optionA": "heels", "optionB": "flats", "priority": 2, "createdAt": "2017-05-09T01:05:48.315Z", "count": { "A": 82, "B": 203 }, "lastUpdatedAt": "2017-05-22T00:11:46.714Z" }, { "_id": "4sXbvj8JWnCM6AK2R", "text": "If you were a hotdog, would you eat yourself?", "optionA": "Yes", "optionB": "No", "priority": 2, "createdAt": "2016-10-06T15:31:14.926Z", "count": { "A": 80, "B": 128 }, "lastUpdatedAt": "2017-05-22T00:10:45.460Z" }, { "_id": "ZJxSzJph2LE6inHwg", "text": "Gluten Free?", "optionA": "Faking it", "optionB": "Real", "priority": 2, "createdAt": "2016-10-08T05:12:42.934Z", "count": { "A": 365, "B": 373 }, "lastUpdatedAt": "2017-05-22T00:04:39.657Z" }, { "_id": "B4jDTkB3bj28hoKzN", "text": "Best Star Wars?", "optionA": "prequel", "optionB": "original", "priority": 1, "createdAt": "2016-10-08T14:31:39.098Z", "count": { "A": 204, "B": 646 }, "lastUpdatedAt": "2017-05-22T00:03:38.118Z" }, { "_id": "Sc77Q5PCZjg832CWf", "text": "Is virtue its own reward?", "optionA": "Yes", "optionB": "No", "priority": 2, "createdAt": "2016-10-08T15:51:01.947Z", "count": { "A": 157, "B": 179 }, "lastUpdatedAt": "2017-05-22T00:00:34.486Z" }, { "_id": "t6aqneCpg4wNCJQ7w", "text": "?", "optionA": "VR", "optionB": "AR", "priority": 2, "createdAt": "2016-10-08T18:13:36.654Z", "count": { "A": 164, "B": 188 }, "lastUpdatedAt": "2017-05-21T23:58:32.281Z" }, { "_id": "k9s5pMKTpQhiRGutp", "text": "?", "optionA": "tourist", "optionB": "local", "priority": 2, "createdAt": "2016-10-06T15:28:04.482Z", "count": { "A": 390, "B": 671 }, "lastUpdatedAt": "2017-05-21T23:53:26.437Z" }, { "_id": "curhpSNJhyzEghLse", "text": "?", "optionA": "pepsi", "optionB": "coke", "priority": 1, "createdAt": "2016-10-07T14:25:46.768Z", "count": { "A": 104, "B": 250 }, "lastUpdatedAt": "2017-05-21T23:52:25.348Z" }, { "_id": "RJWrAWsXWZ55JkSL3", "text": "?", "optionA": "U2", "optionB": "Rihanna", "priority": 2, "createdAt": "2016-10-08T18:24:58.089Z", "count": { "A": 181, "B": 153 }, "lastUpdatedAt": "2017-05-21T23:50:23.358Z" }, { "_id": "LZCSpQCgiaiteuaKd", "text": "Best coffee?", "optionA": "hot", "optionB": "iced", "priority": 3, "createdAt": "2016-10-08T14:39:40.906Z", "count": { "A": 115, "B": 148 }, "lastUpdatedAt": "2017-05-21T23:48:21.329Z" }, { "_id": "dc7wjni3MG44XSTib", "text": "?", "optionA": "PlayStation", "optionB": "Xbox", "priority": 2, "createdAt": "2016-10-08T14:37:54.043Z", "count": { "A": 87, "B": 100 }, "lastUpdatedAt": "2017-05-21T23:45:18.388Z" }, { "_id": "2rJA2ZthvJfuhoE6W", "text": "Have you hugged a friend today?", "optionA": "Yes", "optionB": "No", "priority": 1, "createdAt": "2016-11-06T21:41:20.575Z", "count": { "A": 262, "B": 162 }, "lastUpdatedAt": "2017-05-21T23:41:14.472Z" }, { "_id": "ELJxiSALznMC3kx8t", "text": "?", "optionA": "football", "optionB": "soccer", "priority": 2, "createdAt": "2016-10-08T15:09:30.324Z", "count": { "A": 202, "B": 352 }, "lastUpdatedAt": "2017-05-21T23:37:09.463Z" }, { "_id": "R3JFQ5sR9wFPyAPSd", "text": "In this moment, are you driven by fear or love?", "optionA": "Fear", "optionB": "Love", "priority": 2, "createdAt": "2016-10-06T15:26:10.207Z", "count": { "A": 102, "B": 179 }, "lastUpdatedAt": "2017-05-21T23:35:06.839Z" }, { "_id": "BqkYrLifXqfzXod8C", "text": "?", "optionA": "Big Mac", "optionB": "Whopper", "priority": 3, "createdAt": "2016-10-08T14:32:45.686Z", "count": { "A": 142, "B": 162 }, "lastUpdatedAt": "2017-05-21T23:32:04.130Z" }, { "_id": "3k8nyy8grNpaxv7Nz", "text": "Would you like fries with that?", "optionA": "Yes", "optionB": "No", "priority": 2, "createdAt": "2016-10-06T15:28:34.573Z", "count": { "A": 146, "B": 108 }, "lastUpdatedAt": "2017-05-21T23:26:56.380Z" }, { "_id": "bEEerWynEfZbKncmA", "text": "?", "optionA": "iPhone", "optionB": "Android", "priority": 3, "createdAt": "2016-10-08T03:42:35.095Z", "count": { "A": 352, "B": 319 }, "lastUpdatedAt": "2017-05-21T23:25:52.578Z" }, { "_id": "xFqSRCcfXFjjvnKZ2", "text": "?", "optionA": "Team Cap", "optionB": "Team Ironman", "priority": 2, "createdAt": "2016-10-08T04:15:42.176Z", "count": { "A": 203, "B": 272 }, "lastUpdatedAt": "2017-05-21T23:23:50.674Z" }, { "_id": "LnxtxaT6yk9dSgHfa", "text": "Pokemon Go?", "optionA": "Lovely", "optionB": "Annoying", "priority": 1, "createdAt": "2016-10-08T23:12:52.246Z", "count": { "A": 192, "B": 254 }, "lastUpdatedAt": "2017-05-21T23:16:43.479Z" }, { "_id": "yGjQ2dmEnxc8qWoLw", "text": "Build more housing?", "optionA": "Yes", "optionB": "No", "priority": 3, "createdAt": "2016-10-06T15:25:54.764Z", "count": { "A": 183, "B": 88 }, "lastUpdatedAt": "2017-05-21T23:15:42.500Z" }, { "_id": "7CwNGdoXD94vyibNv", "text": "Chelsea manning?", "optionA": "Hero", "optionB": "Traitor", "priority": 2, "createdAt": "2016-10-06T15:30:08.854Z", "count": { "A": 327, "B": 237 }, "lastUpdatedAt": "2017-05-21T23:08:35.598Z" }, { "_id": "PP5CCom5XSbzXfYWw", "text": "Julian Assange?", "optionA": "Hero", "optionB": "Terrorist", "priority": 2, "createdAt": "2016-10-06T15:29:43.420Z", "count": { "A": 179, "B": 178 }, "lastUpdatedAt": "2017-05-21T23:05:32.849Z" }, { "_id": "bpTm4aB8RAi2qvB3G", "text": "?", "optionA": "YIMBY", "optionB": "NIMBY", "priority": 3, "createdAt": "2016-10-07T18:39:14.022Z", "count": { "A": 69, "B": 102 }, "lastUpdatedAt": "2017-05-21T23:03:31.410Z" }, { "_id": "DjqY48Yp3xpgyLkgj", "text": "Stay or go?", "optionA": "Stay", "optionB": "Go", "priority": 2, "createdAt": "2016-10-05T07:43:38.380Z", "count": { "A": 129, "B": 145 }, "lastUpdatedAt": "2017-05-21T22:58:25.811Z" }, { "_id": "ZZPFXMbDbPT3iXGvn", "text": "?", "optionA": "Gun rights", "optionB": "Gun control", "priority": 2, "createdAt": "2016-10-07T18:40:11.112Z", "count": { "A": 217, "B": 425 }, "lastUpdatedAt": "2017-05-21T22:54:20.819Z" }, { "_id": "YcAyxQg4QJZbkAgg7", "text": "?", "optionA": "mac", "optionB": "windows", "priority": 2, "createdAt": "2017-05-20T00:05:10.254Z", "count": { "A": 176, "B": 176 }, "lastUpdatedAt": "2017-05-21T22:52:18.152Z" }, { "_id": "qT7CCabdjnyNx7D8t", "text": "Are you happy?", "optionA": "Yes", "optionB": "No", "priority": 2, "createdAt": "2016-10-05T07:43:25.424Z", "count": { "A": 320, "B": 142 }, "lastUpdatedAt": "2017-05-21T22:51:16.679Z" }, { "_id": "SymZ6oyHqqXNiqQvS", "text": "?", "optionA": "hotdog", "optionB": "not hotdog", "priority": 2, "createdAt": "2017-05-20T23:12:58.520Z", "count": { "A": 168, "B": 87 }, "lastUpdatedAt": "2017-05-21T22:50:15.532Z" }, { "_id": "qCHiu2fA8Qa5skKZj", "text": "Favorite koolaid flavor?", "optionA": "purple", "optionB": "red", "priority": 2, "createdAt": "2016-10-06T23:45:43.017Z", "count": { "A": 194, "B": 291 }, "lastUpdatedAt": "2017-05-21T22:49:14.275Z" }, { "_id": "XkCS7aPMZZCpGZSFS", "text": "Snowden?", "optionA": "Forgive", "optionB": "Applaud", "priority": 2, "createdAt": "2016-10-06T15:29:06.548Z", "count": { "A": 167, "B": 246 }, "lastUpdatedAt": "2017-05-21T22:49:14.154Z" }, { "_id": "88hYnvneC8Wty2yqk", "text": "Dance through the door?", "optionA": "Yes", "optionB": "No", "priority": 1, "createdAt": "2016-10-06T15:26:23.780Z", "count": { "A": 351, "B": 258 }, "lastUpdatedAt": "2017-05-21T22:48:12.977Z" }, { "_id": "tQRrMsXECakknkKDj", "text": "?", "optionA": "macvim", "optionB": "terminal vim", "priority": 2, "createdAt": "2016-10-07T20:43:10.328Z", "count": { "A": 42, "B": 80 }, "lastUpdatedAt": "2017-05-21T22:47:11.720Z" }, { "_id": "o2crRNrntyhFaZkPb", "text": "?", "optionA": "beer", "optionB": "wine", "priority": 3, "createdAt": "2017-05-21T17:03:56.602Z", "count": { "A": 83, "B": 72 }, "lastUpdatedAt": "2017-05-21T22:46:10.523Z" }, { "_id": "GgGxGgo2BDGTddA5S", "text": "Higher taxes for free college education?", "optionA": "yes", "optionB": "no", "priority": 3, "createdAt": "2016-10-07T14:50:12.771Z", "count": { "A": 78, "B": 52 }, "lastUpdatedAt": "2017-05-21T22:44:07.924Z" }, { "_id": "tzYANsqNaghnsKFBd", "text": "indent with tabs or spaces?", "optionA": "tabs", "optionB": "spaces", "priority": 3, "createdAt": "2016-10-07T14:25:28.767Z", "count": { "A": 274, "B": 218 }, "lastUpdatedAt": "2017-05-21T22:42:05.273Z" }, { "_id": "X5APqdYtDz5KxJH7f", "text": "Cops?", "optionA": "Save us", "optionB": "Leave us alone", "priority": 2, "createdAt": "2016-10-08T04:35:30.515Z", "count": { "A": 153, "B": 159 }, "lastUpdatedAt": "2017-05-21T22:41:01.056Z" }, { "_id": "HmpJLbaouRnqsTr5F", "text": "?", "optionA": "JRR Tolkien", "optionB": "CS Lewis", "priority": 2, "createdAt": "2017-05-09T00:34:18.501Z", "count": { "A": 176, "B": 109 }, "lastUpdatedAt": "2017-05-21T22:41:01.011Z" }, { "_id": "2FbZqoEDD7fsFBhmJ", "text": "Are you a leader or a follower?", "optionA": "Leader", "optionB": "Follower", "priority": 3, "createdAt": "2016-11-06T21:57:03.834Z", "count": { "A": 245, "B": 175 }, "lastUpdatedAt": "2017-05-21T22:38:56.125Z" }, { "_id": "Ka4FqpXjLL7r27RQn", "text": "Admiral of alligators or Cardinal of crocodiles?", "optionA": "alligators", "optionB": "crocodiles", "priority": 3, "createdAt": "2016-10-07T14:52:49.928Z", "count": { "A": 162, "B": 163 }, "lastUpdatedAt": "2017-05-21T22:27:36.312Z" }, { "_id": "TqPKfipzAcY8vz7q5", "text": "?", "optionA": "Nike", "optionB": "Adidas", "priority": 2, "createdAt": "2016-10-08T14:35:03.718Z", "count": { "A": 169, "B": 148 }, "lastUpdatedAt": "2017-05-21T22:24:29.780Z" }, { "_id": "hvzsy7sBf8JSgHKcu", "text": "Homeless?", "optionA": "Help them", "optionB": "Get away", "priority": 2, "createdAt": "2016-10-08T04:58:38.519Z", "count": { "A": 174, "B": 89 }, "lastUpdatedAt": "2017-05-21T22:23:28.669Z" }, { "_id": "EZuoG6PaDLs8uiE35", "text": "refugees?", "optionA": "keep in", "optionB": "kick out", "priority": 3, "createdAt": "2016-10-08T06:21:26.954Z", "count": { "A": 486, "B": 160 }, "lastUpdatedAt": "2017-05-21T22:12:05.988Z" }, { "_id": "HG4uaQPuhgBCeDMWv", "text": "gentrification?", "optionA": "revival", "optionB": "oppression", "priority": 3, "createdAt": "2016-10-08T22:08:03.022Z", "count": { "A": 115, "B": 109 }, "lastUpdatedAt": "2017-05-21T22:04:56.921Z" }, { "_id": "Y9v6N4aDKfPY7XPec", "text": "?", "optionA": "chocolate", "optionB": "chips", "priority": 3, "createdAt": "2016-10-07T23:20:26.063Z", "count": { "A": 201, "B": 176 }, "lastUpdatedAt": "2017-05-21T22:03:55.513Z" }, { "_id": "DBZgk7QyHvytNc74m", "text": "?", "optionA": "tea", "optionB": "coffee", "priority": 2, "createdAt": "2016-10-07T01:22:40.948Z", "count": { "A": 290, "B": 357 }, "lastUpdatedAt": "2017-05-21T22:01:53.000Z" }, { "_id": "XKAxdAvwqd78hqLB7", "text": "?", "optionA": "boba tea", "optionB": "icecream", "priority": 2, "createdAt": "2017-05-20T23:12:45.515Z", "count": { "A": 109, "B": 114 }, "lastUpdatedAt": "2017-05-21T21:53:37.853Z" }, { "_id": "FtJ7ffv4XJbKQjzuh", "text": "See someone you want to talk to right now?", "optionA": "Yes", "optionB": "No", "priority": 3, "createdAt": "2016-10-06T15:26:34.405Z", "count": { "A": 100, "B": 73 }, "lastUpdatedAt": "2017-05-21T21:49:29.949Z" }, { "_id": "9DbRHQGcof6Z4by8T", "text": "Do you live a reflective life?", "optionA": "Yes", "optionB": "No", "priority": 2, "createdAt": "2016-10-06T15:26:46.953Z", "count": { "A": 231, "B": 241 }, "lastUpdatedAt": "2017-05-21T21:48:28.705Z" }, { "_id": "63wNvoJXnmFacbomd", "text": "give flowers to loved one?", "optionA": "Yes", "optionB": "No", "priority": 3, "createdAt": "2016-11-06T21:30:17.604Z", "count": { "A": 103, "B": 80 }, "lastUpdatedAt": "2017-05-21T21:47:27.495Z" }, { "_id": "YeHrurDLdJZqyhPBK", "text": "?", "optionA": "pro choice", "optionB": "pro life", "priority": 2, "createdAt": "2016-10-07T00:48:54.199Z", "count": { "A": 348, "B": 141 }, "lastUpdatedAt": "2017-05-21T21:46:21.787Z" }, { "_id": "MZ5QtaSxgonppBYm9", "text": "Do you love yourself?", "optionA": "yes", "optionB": "no", "priority": 3, "createdAt": "2016-11-06T21:40:37.982Z", "count": { "A": 211, "B": 106 }, "lastUpdatedAt": "2017-05-21T21:44:19.541Z" }, { "_id": "AGwDAaCLN2fXn778N", "text": "?", "optionA": "Marvel", "optionB": "DC", "priority": 3, "createdAt": "2016-10-08T14:32:25.095Z", "count": { "A": 311, "B": 173 }, "lastUpdatedAt": "2017-05-21T21:37:05.237Z" }, { "_id": "vmd2vQAnH5pGN5nJG", "text": "?", "optionA": "Boxers", "optionB": "Briefs", "priority": 2, "createdAt": "2016-10-08T04:51:42.676Z", "count": { "A": 87, "B": 89 }, "lastUpdatedAt": "2017-05-21T21:29:51.008Z" }, { "_id": "SetnuPbedhyNi229a", "text": "?", "optionA": "SF", "optionB": "NYC", "priority": 2, "createdAt": "2016-10-07T16:20:11.010Z", "count": { "A": 77, "B": 54 }, "lastUpdatedAt": "2017-05-21T21:27:45.873Z" }, { "_id": "Quh6722Fhh65iGftN", "text": "?", "optionA": "yoga", "optionB": "dance", "priority": 3, "createdAt": "2016-10-07T22:29:05.770Z", "count": { "A": 68, "B": 213 }, "lastUpdatedAt": "2017-05-21T21:25:40.468Z" }, { "_id": "7bpFZzN4SDWwtTTtv", "text": "Give money to homeless?", "optionA": "Yes", "optionB": "No", "priority": 2, "createdAt": "2016-10-06T15:30:19.913Z", "count": { "A": 195, "B": 140 }, "lastUpdatedAt": "2017-05-21T21:23:34.034Z" }, { "_id": "BvopmN6MBMADwyR3A", "text": "Why vote?", "optionA": "Democracy", "optionB": "Hypocrisy", "priority": 2, "createdAt": "2016-10-08T19:28:08.735Z", "count": { "A": 106, "B": 96 }, "lastUpdatedAt": "2017-05-21T21:18:24.797Z" }, { "_id": "FHQ5hH6A2jnshZ9S8", "text": "?", "optionA": "baseball", "optionB": "football", "priority": 3, "createdAt": "2016-10-08T14:38:28.587Z", "count": { "A": 136, "B": 190 }, "lastUpdatedAt": "2017-05-21T21:06:01.836Z" }, { "_id": "GHgMir2gLMTD4YxWo", "text": "Musicals?", "optionA": "Terrific", "optionB": "Terrible", "priority": 3, "createdAt": "2016-11-06T22:35:39.634Z", "count": { "A": 202, "B": 125 }, "lastUpdatedAt": "2017-05-21T21:00:52.272Z" }, { "_id": "kRD6eKqNFwfqYjEzf", "text": "?", "optionA": "bear", "optionB": "chinosaur", "priority": 3, "createdAt": "2017-05-08T21:20:11.597Z", "count": { "A": 70, "B": 57 }, "lastUpdatedAt": "2017-05-20T22:43:11.400Z" }, { "_id": "ojc2RDYr6s3Bg5GK7", "text": "Your place or mine?", "optionA": "Yours", "optionB": "Mine", "priority": 3, "createdAt": "2016-10-07T18:40:42.743Z", "count": { "A": 42, "B": 60 }, "lastUpdatedAt": "2017-05-20T21:14:16.851Z" }, { "_id": "vAcRfxH5iDioZ5ZBX", "text": "?", "optionA": "thad starner", "optionB": "steve mann", "priority": 3, "createdAt": "2017-05-08T21:23:03.372Z", "count": { "A": 16, "B": 17 }, "lastUpdatedAt": "2017-05-20T00:15:59.131Z" }, { "_id": "gHsZ4cj2TP4i3QwBF", "text": "?", "optionA": "Trump", "optionB": "Hitler", "priority": 3, "createdAt": "2016-10-08T15:32:47.948Z", "count": { "A": 30, "B": 27 }, "lastUpdatedAt": "2017-05-19T21:42:08.497Z" }, { "_id": "Ab835dYJXWpx7xyTB", "text": "CHI", "optionA": "paper read", "optionB": "drinks had", "priority": 3, "createdAt": "2017-05-08T21:20:50.474Z", "count": { "A": 13, "B": 15 }, "lastUpdatedAt": "2017-05-19T21:42:08.423Z" }, { "_id": "hwtm43DJg7QqaSG2R", "text": "CHI", "optionA": "not really", "optionB": "impactful", "priority": 3, "createdAt": "2017-05-08T21:18:47.531Z", "count": { "A": 27, "B": 19 }, "lastUpdatedAt": "2017-05-19T21:40:06.202Z" }, { "_id": "i3bZ6cjJTvNkxmufr", "text": "CHI", "optionA": "significant", "optionB": "inspirational", "priority": 3, "createdAt": "2017-05-08T21:21:11.339Z", "count": { "A": 31, "B": 38 }, "lastUpdatedAt": "2017-05-19T21:38:03.403Z" }, { "_id": "YxXZsLboTg8fdHvoE", "text": "Do non-human objects have agency?", "optionA": "No", "optionB": "Yes", "priority": 3, "createdAt": "2017-05-09T23:57:23.021Z", "count": { "A": 1, "B": 5 }, "lastUpdatedAt": "2017-05-19T21:37:02.282Z" }, { "_id": "Hg79KSZGCJ4unZm8w", "text": "CHI", "optionA": "meet friends", "optionB": "papers", "priority": 3, "createdAt": "2017-05-08T21:19:22.439Z", "count": { "A": 37, "B": 16 }, "lastUpdatedAt": "2017-05-19T21:36:00.833Z" }, { "_id": "pkejnaqEvq48KuaF8", "text": "Primary methodological approach", "optionA": "Quantitative", "optionB": "Qualitative", "priority": 3, "createdAt": "2017-05-07T07:27:15.025Z", "count": { "A": 25, "B": 45 }, "lastUpdatedAt": "2017-05-19T21:36:00.824Z" }, { "_id": "j5J4kjKckMJD4R3nJ", "text": "Likert items are unintentionally misleading?", "optionA": "Agree", "optionB": "Strongly Agree", "priority": 3, "createdAt": "2017-05-07T07:28:00.736Z", "count": { "A": 12, "B": 2 }, "lastUpdatedAt": "2017-05-10T19:27:39.338Z" }, { "_id": "rymkhYRCDei26p33q", "text": "You favorite?", "optionA": "Chris Harrison", "optionB": "Scott Hudson", "priority": 3, "createdAt": "2017-05-08T20:19:17.176Z", "count": { "A": 16, "B": 18 }, "lastUpdatedAt": "2017-05-10T17:25:08.856Z" }, { "_id": "967Gb4n7iSDy8byS3", "text": "Novelty or Reproducibility?", "optionA": "Novelty", "optionB": "Reproducibility", "priority": 3, "createdAt": "2017-05-07T07:28:46.871Z", "count": { "A": 22, "B": 13 }, "lastUpdatedAt": "2017-05-10T16:58:38.420Z" }, { "_id": "ZYKtbgG9BP7BAtKDw", "text": "?", "optionA": "NYC", "optionB": "SF", "priority": 3, "createdAt": "2016-10-07T18:38:41.291Z", "count": { "A": 84, "B": 196 }, "lastUpdatedAt": "2016-12-04T23:41:58.476Z" }, { "_id": "PFgqadzeGB4YeaeoR", "text": "Which foot in the door?", "optionA": "Right foot", "optionB": "Left foot", "priority": 3, "createdAt": "2016-10-08T03:54:11.712Z", "count": { "A": 62, "B": 66 }, "lastUpdatedAt": "2016-12-04T06:32:50.358Z" }, { "_id": "9MeqtY35kL5YT8k5T", "text": "More programs in civic center?", "optionA": "Yes", "optionB": "no", "priority": 3, "createdAt": "2016-11-06T21:39:58.335Z", "count": { "A": 44, "B": 23 }, "lastUpdatedAt": "2016-12-04T06:32:50.232Z" }, { "_id": "owpZkcaTTbM5yGEdd", "text": "are you tired", "optionA": "yes", "optionB": "no", "priority": 3, "createdAt": "2016-10-08T09:10:00.714Z", "count": { "A": 66, "B": 210 }, "lastUpdatedAt": "2016-12-04T06:31:45.762Z" }, { "_id": "LQSYEP3aXXsokKtGb", "text": "Did you visit the Asian art museum today?", "optionA": "Yes", "optionB": "No", "priority": 3, "createdAt": "2016-11-06T21:25:57.528Z", "count": { "A": 45, "B": 66 }, "lastUpdatedAt": "2016-12-04T06:30:41.434Z" }, { "_id": "d8o7ogQZXrQweGAqH", "text": "?", "optionA": "Soccer", "optionB": "Hockey", "priority": 3, "createdAt": "2016-10-08T02:35:20.300Z", "count": { "A": 102, "B": 91 }, "lastUpdatedAt": "2016-12-04T06:29:36.127Z" }, { "_id": "vdWxGzLyEnkgL8Xv5", "text": "?", "optionA": "Small Cap", "optionB": "Large Cap", "priority": 3, "createdAt": "2016-10-08T05:45:31.602Z", "count": { "A": 12, "B": 21 }, "lastUpdatedAt": "2016-12-04T06:25:15.488Z" }, { "_id": "YQ8bQTX7HByfxGmih", "text": "?", "optionA": "Peets", "optionB": "Starbucks", "priority": 3, "createdAt": "2016-10-07T20:42:23.640Z", "count": { "A": 130, "B": 64 }, "lastUpdatedAt": "2016-12-04T06:16:27.879Z" }, { "_id": "TqHEaicpZ6zzxjwed", "text": "Should Taiwan be independent?", "optionA": "Yes", "optionB": "No", "priority": 3, "createdAt": "2016-10-07T18:37:26.009Z", "count": { "A": 66, "B": 20 }, "lastUpdatedAt": "2016-11-06T21:01:09.857Z" }, { "_id": "LeaSt4mdpmC6npnHG", "text": "Your fart....?", "optionA": "Stinks!", "optionB": "Good!", "priority": 3, "createdAt": "2016-10-08T04:13:01.035Z", "count": { "A": 20, "B": 38 }, "lastUpdatedAt": "2016-10-09T01:18:56.353Z" }, { "_id": "LH8obov9g2jn4xPrE", "text": "?", "optionA": "women", "optionB": "men", "priority": 3, "createdAt": "2016-10-08T14:30:37.431Z", "count": { "A": 1, "B": 1 }, "lastUpdatedAt": "2016-10-08T15:07:10.832Z" }, { "_id": "gBDirbvqR2cnpDuXr", "text": "?", "optionA": "rich", "optionB": "poor", "priority": 3, "createdAt": "2016-10-08T14:30:52.451Z", "count": { "A": 2, "B": 7 }, "lastUpdatedAt": "2016-10-08T15:01:03.255Z" }, { "_id": "CpobSvi2XMA9pLge3", "text": "?", "optionA": "cash", "optionB": "honeys", "priority": 3, "createdAt": "2016-10-08T14:29:24.257Z", "count": { "A": 4, "B": 5 }, "lastUpdatedAt": "2016-10-08T14:36:31.893Z" }, { "_id": "EhkSaPGrgCNokcY5K", "text": "?", "optionA": "Clinton", "optionB": "Trump", "priority": 3, "createdAt": "2016-10-07T23:20:21.192Z", "count": { "A": 137, "B": 31 }, "lastUpdatedAt": "2016-10-08T01:08:43.836Z" }, { "_id": "Y6PSgynbyC98sSPk7", "text": "?", "optionA": "Trump", "optionB": "Johnson", "priority": 3, "createdAt": "2016-10-07T23:34:16.402Z", "count": { "A": 18, "B": 65 }, "lastUpdatedAt": "2016-10-08T00:10:19.089Z" }, { "_id": "MWzvuJAbwrWEiYRad", "text": "Should US military stop Assad's mass killing in Allepo?", "optionA": "Yes", "optionB": "no", "priority": 3, "createdAt": "2016-10-07T14:49:11.356Z", "count": { "A": 60, "B": 53 }, "lastUpdatedAt": "2016-10-07T23:21:06.985Z" }, { "_id": "pxH72ixM7248FCQe6", "text": "?", "optionA": "zoho", "optionB": "sales force", "priority": 3, "createdAt": "2016-10-07T14:27:09.099Z", "count": { "A": 14, "B": 14 }, "lastUpdatedAt": "2016-10-07T18:37:28.295Z" }];
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},{"extensions":[".js",".json",".html",".jsx",".css"]});
require("./client/template.main.js");
require("./client/main.jsx");