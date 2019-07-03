!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module){module.exports=function(){function receivedResponse(xhr){return 200==xhr.status&&4==xhr.readyState}function handleResponse(xhr,callback){xhr.onreadystatechange=function(){if(receivedResponse(xhr))try{callback(null,JSON.parse(xhr.responseText))}catch(err){callback(err,null)}}}var self=this;self.load=function(location,callback){var xhr=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");xhr.open("GET",location,!0),handleResponse(xhr,callback),xhr.send()}}},{}],2:[function(require,module){function FuzzySearchStrategy(){function createFuzzyRegExpFromString(string){return new RegExp(string.split("").join(".*?"),"gi")}var self=this;self.matches=function(string,crit){return"string"!=typeof string?!1:(string=string.trim(),!!string.match(createFuzzyRegExpFromString(crit)))}}module.exports=new FuzzySearchStrategy},{}],3:[function(require,module){function LiteralSearchStrategy(){function doMatch(string,crit){return string.toLowerCase().indexOf(crit.toLowerCase())>=0}var self=this;self.matches=function(string,crit){return"string"!=typeof string?!1:(string=string.trim(),doMatch(string,crit))}}module.exports=new LiteralSearchStrategy},{}],4:[function(require,module){module.exports=function(){function findMatches(store,crit,strategy){for(var data=store.get(),i=0;i<data.length&&matches.length<limit;i++)findMatchesInObject(data[i],crit,strategy);return matches}function findMatchesInObject(obj,crit,strategy){for(var key in obj)if(strategy.matches(obj[key],crit)){matches.push(obj);break}}function getSearchStrategy(){return fuzzy?fuzzySearchStrategy:literalSearchStrategy}var self=this,matches=[],fuzzy=!1,limit=10,fuzzySearchStrategy=require("./SearchStrategies/fuzzy"),literalSearchStrategy=require("./SearchStrategies/literal");self.setFuzzy=function(_fuzzy){fuzzy=!!_fuzzy},self.setLimit=function(_limit){limit=parseInt(_limit,10)||limit},self.search=function(data,crit){return crit?(matches.length=0,findMatches(data,crit,getSearchStrategy())):[]}}},{"./SearchStrategies/fuzzy":2,"./SearchStrategies/literal":3}],5:[function(require,module){module.exports=function(_store){function isObject(obj){return!!obj&&"[object Object]"==Object.prototype.toString.call(obj)}function isArray(obj){return!!obj&&"[object Array]"==Object.prototype.toString.call(obj)}function addObject(data){return store.push(data),data}function addArray(data){for(var added=[],i=0;i<data.length;i++)isObject(data[i])&&added.push(addObject(data[i]));return added}var self=this,store=[];isArray(_store)&&addArray(_store),self.clear=function(){return store.length=0,store},self.get=function(){return store},self.put=function(data){return isObject(data)?addObject(data):isArray(data)?addArray(data):void 0}}},{}],6:[function(require,module){module.exports=function(){var self=this,templatePattern=/\{(.*?)\}/g;self.setTemplatePattern=function(newTemplatePattern){templatePattern=newTemplatePattern},self.render=function(t,data){return t.replace(templatePattern,function(match,prop){return data[prop]||match})}}},{}],7:[function(require){!function(window){"use strict";function SimpleJekyllSearch(){function initWithJSON(){store.put(opt.dataSource),registerInput()}function initWithURL(url){jsonLoader.load(url,function(err,json){err?throwError("failed to get JSON ("+url+")"):(store.put(json),registerInput())})}function throwError(message){throw new Error("SimpleJekyllSearch --- "+message)}function validateOptions(_opt){for(var i=0;i<requiredOptions.length;i++){var req=requiredOptions[i];_opt[req]||throwError("You must specify a "+req)}}function assignOptions(_opt){for(var option in opt)opt[option]=_opt[option]||opt[option]}function isJSON(json){try{return json instanceof Object&&JSON.parse(JSON.stringify(json))}catch(e){return!1}}function emptyResultsContainer(){opt.resultsContainer.innerHTML=""}function appendToResultsContainer(text){opt.resultsContainer.innerHTML+=text}function registerInput(){opt.searchInput.addEventListener("keyup",function(e){return 0==e.target.value.length?void emptyResultsContainer():void render(searcher.search(store,e.target.value))})}function render(results){if(emptyResultsContainer(),0==results.length)return appendToResultsContainer(opt.noResultsText);for(var i=0;i<results.length;i++)appendToResultsContainer(templater.render(opt.searchResultTemplate,results[i]))}var self=this,requiredOptions=["searchInput","resultsContainer","dataSource"],opt={searchInput:null,resultsContainer:null,dataSource:[],searchResultTemplate:'<li><a href="{url}" title="{desc}">{title}</a></li>',noResultsText:"No results found",limit:10,fuzzy:!1};self.init=function(_opt){validateOptions(_opt),assignOptions(_opt),isJSON(opt.dataSource)?initWithJSON(opt.dataSource):initWithURL(opt.dataSource)}}var Searcher=require("./Searcher"),Templater=require("./Templater"),Store=require("./Store"),JSONLoader=require("./JSONLoader"),searcher=new Searcher,templater=new Templater,store=new Store,jsonLoader=new JSONLoader;window.SimpleJekyllSearch=new SimpleJekyllSearch}(window,document)},{"./JSONLoader":1,"./Searcher":4,"./Store":5,"./Templater":6}]},{},[7]);

/*!
  * Simple-Jekyll-Search v1.7.1 (https://github.com/christian-fei/Simple-Jekyll-Search)
  * Copyright 2015-2018, Christian Fei
  * Licensed under the MIT License.
  */

// (function () {
//     /* globals ActiveXObject:false */

//     'use strict'

//     var _$JSONLoader_2 = {
//         load: load
//     }

//     function load(location, callback) {
//         var xhr = getXHR()
//         xhr.open('GET', location, true)
//         xhr.onreadystatechange = createStateChangeListener(xhr, callback)
//         xhr.send()
//     }

//     function createStateChangeListener(xhr, callback) {
//         return function () {
//             if (xhr.readyState === 4 && xhr.status === 200) {
//                 try {
//                     callback(null, JSON.parse(xhr.responseText))
//                 } catch (err) {
//                     callback(err, null)
//                 }
//             }
//         }
//     }

//     function getXHR() {
//         return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
//     }

//     'use strict'

//     var _$OptionsValidator_3 = function OptionsValidator(params) {
//         if (!validateParams(params)) {
//             throw new Error('-- OptionsValidator: required options missing')
//         }

//         if (!(this instanceof OptionsValidator)) {
//             return new OptionsValidator(params)
//         }

//         var requiredOptions = params.required

//         this.getRequiredOptions = function () {
//             return requiredOptions
//         }

//         this.validate = function (parameters) {
//             var errors = []
//             requiredOptions.forEach(function (requiredOptionName) {
//                 if (typeof parameters[requiredOptionName] === 'undefined') {
//                     errors.push(requiredOptionName)
//                 }
//             })
//             return errors
//         }

//         function validateParams(params) {
//             if (!params) {
//                 return false
//             }
//             return typeof params.required !== 'undefined' && params.required instanceof Array
//         }
//     }

//     'use strict';

//     function fuzzysearch(needle, haystack) {
//         var tlen = haystack.length;
//         var qlen = needle.length;
//         if (qlen > tlen) {
//             return false;
//         }
//         if (qlen === tlen) {
//             return needle === haystack;
//         }
//         outer: for (var i = 0, j = 0; i < qlen; i++) {
//             var nch = needle.charCodeAt(i);
//             while (j < tlen) {
//                 if (haystack.charCodeAt(j++) === nch) {
//                     continue outer;
//                 }
//             }
//             return false;
//         }
//         return true;
//     }

//     var _$fuzzysearch_1 = fuzzysearch;

//     'use strict'

// /* removed: var _$fuzzysearch_1 = require('fuzzysearch') */;

//     var _$FuzzySearchStrategy_5 = new FuzzySearchStrategy()

//     function FuzzySearchStrategy() {
//         this.matches = function (string, crit) {
//             return _$fuzzysearch_1(crit.toLowerCase(), string.toLowerCase())
//         }
//     }

//     'use strict'

//     var _$LiteralSearchStrategy_6 = new LiteralSearchStrategy()

//     function LiteralSearchStrategy() {
//         this.matches = function (str, crit) {
//             if (!str) return false

//             str = str.trim().toLowerCase()
//             crit = crit.toLowerCase()

//             return crit.split(' ').filter(function (word) {
//                 return str.indexOf(word) >= 0
//             }).length > 0
//         }
//     }

//     'use strict'

//     var _$Repository_4 = {
//         put: put,
//         clear: clear,
//         search: search,
//         setOptions: setOptions
//     }

// /* removed: var _$FuzzySearchStrategy_5 = require('./SearchStrategies/FuzzySearchStrategy') */;
// /* removed: var _$LiteralSearchStrategy_6 = require('./SearchStrategies/LiteralSearchStrategy') */;

//     function NoSort() {
//         return 0
//     }

//     var data = []
//     var opt = {}

//     opt.fuzzy = false
//     opt.limit = 10
//     opt.searchStrategy = opt.fuzzy ? _$FuzzySearchStrategy_5 : _$LiteralSearchStrategy_6
//     opt.sort = NoSort

//     function put(data) {
//         if (isObject(data)) {
//             return addObject(data)
//         }
//         if (isArray(data)) {
//             return addArray(data)
//         }
//         return undefined
//     }
//     function clear() {
//         data.length = 0
//         return data
//     }

//     function isObject(obj) {
//         return Boolean(obj) && Object.prototype.toString.call(obj) === '[object Object]'
//     }

//     function isArray(obj) {
//         return Boolean(obj) && Object.prototype.toString.call(obj) === '[object Array]'
//     }

//     function addObject(_data) {
//         data.push(_data)
//         return data
//     }

//     function addArray(_data) {
//         var added = []
//         clear()
//         for (var i = 0, len = _data.length; i < len; i++) {
//             if (isObject(_data[i])) {
//                 added.push(addObject(_data[i]))
//             }
//         }
//         return added
//     }

//     function search(crit) {
//         if (!crit) {
//             return []
//         }
//         return findMatches(data, crit, opt.searchStrategy, opt).sort(opt.sort)
//     }

//     function setOptions(_opt) {
//         opt = _opt || {}

//         opt.fuzzy = _opt.fuzzy || false
//         opt.limit = _opt.limit || 10
//         opt.searchStrategy = _opt.fuzzy ? _$FuzzySearchStrategy_5 : _$LiteralSearchStrategy_6
//         opt.sort = _opt.sort || NoSort
//     }

//     function findMatches(data, crit, strategy, opt) {
//         var matches = []
//         for (var i = 0; i < data.length && matches.length < opt.limit; i++) {
//             var match = findMatchesInObject(data[i], crit, strategy, opt)
//             if (match) {
//                 matches.push(match)
//             }
//         }
//         return matches
//     }

//     function findMatchesInObject(obj, crit, strategy, opt) {
//         for (var key in obj) {
//             if (!isExcluded(obj[key], opt.exclude) && strategy.matches(obj[key], crit)) {
//                 return obj
//             }
//         }
//     }

//     function isExcluded(term, excludedTerms) {
//         var excluded = false
//         excludedTerms = excludedTerms || []
//         for (var i = 0, len = excludedTerms.length; i < len; i++) {
//             var excludedTerm = excludedTerms[i]
//             if (!excluded && new RegExp(term).test(excludedTerm)) {
//                 excluded = true
//             }
//         }
//         return excluded
//     }

//     'use strict'

//     var _$Templater_7 = {
//         compile: compile,
//         setOptions: __setOptions_7
//     }

//     var options = {}
//     options.pattern = /\{(.*?)\}/g
//     options.template = ''
//     options.middleware = function () { }

//     function __setOptions_7(_options) {
//         options.pattern = _options.pattern || options.pattern
//         options.template = _options.template || options.template
//         if (typeof _options.middleware === 'function') {
//             options.middleware = _options.middleware
//         }
//     }

//     function compile(data) {
//         return options.template.replace(options.pattern, function (match, prop) {
//             var value = options.middleware(prop, data[prop], options.template)
//             if (typeof value !== 'undefined') {
//                 return value
//             }
//             return data[prop] || match
//         })
//     }

//     'use strict'

//     var _$utils_9 = {
//         merge: merge,
//         isJSON: isJSON
//     }

//     function merge(defaultParams, mergeParams) {
//         var mergedOptions = {}
//         for (var option in defaultParams) {
//             mergedOptions[option] = defaultParams[option]
//             if (typeof mergeParams[option] !== 'undefined') {
//                 mergedOptions[option] = mergeParams[option]
//             }
//         }
//         return mergedOptions
//     }

//     function isJSON(json) {
//         try {
//             if (json instanceof Object && JSON.parse(JSON.stringify(json))) {
//                 return true
//             }
//             return false
//         } catch (err) {
//             return false
//         }
//     }

//     var _$src_8 = {};
//     (function (window) {
//         'use strict'

//         var options = {
//             searchInput: null,
//             resultsContainer: null,
//             json: [],
//             success: Function.prototype,
//             searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>',
//             templateMiddleware: Function.prototype,
//             sortMiddleware: function () {
//                 return 0
//             },
//             noResultsText: 'No results found',
//             limit: 10,
//             fuzzy: false,
//             exclude: []
//         }

//         var requiredOptions = ['searchInput', 'resultsContainer', 'json']

//   /* removed: var _$Templater_7 = require('./Templater') */;
//   /* removed: var _$Repository_4 = require('./Repository') */;
//   /* removed: var _$JSONLoader_2 = require('./JSONLoader') */;
//         var optionsValidator = _$OptionsValidator_3({
//             required: requiredOptions
//         })
//   /* removed: var _$utils_9 = require('./utils') */;

//         window.SimpleJekyllSearch = function (_options) {
//             var errors = optionsValidator.validate(_options)
//             if (errors.length > 0) {
//                 throwError('You must specify the following required options: ' + requiredOptions)
//             }

//             options = _$utils_9.merge(options, _options)

//             _$Templater_7.setOptions({
//                 template: options.searchResultTemplate,
//                 middleware: options.templateMiddleware
//             })

//             _$Repository_4.setOptions({
//                 fuzzy: options.fuzzy,
//                 limit: options.limit,
//                 sort: options.sortMiddleware
//             })

//             if (_$utils_9.isJSON(options.json)) {
//                 initWithJSON(options.json)
//             } else {
//                 initWithURL(options.json)
//             }

//             return {
//                 search: search
//             }
//         }

//         function initWithJSON(json) {
//             options.success(json)
//             _$Repository_4.put(json)
//             registerInput()
//         }

//         function initWithURL(url) {
//             _$JSONLoader_2.load(url, function (err, json) {
//                 if (err) {
//                     throwError('failed to get JSON (' + url + ')')
//                 }
//                 initWithJSON(json)
//             })
//         }

//         function emptyResultsContainer() {
//             options.resultsContainer.innerHTML = ''
//         }

//         function appendToResultsContainer(text) {
//             options.resultsContainer.innerHTML += text
//         }

//         function registerInput() {
//             options.searchInput.addEventListener('keyup', function (e) {
//                 if (isWhitelistedKey(e.which)) {
//                     emptyResultsContainer()
//                     search(e.target.value)
//                 }
//             })
//         }

//         function search(query) {
//             if (isValidQuery(query)) {
//                 emptyResultsContainer()
//                 render(_$Repository_4.search(query))
//             }
//         }

//         function render(results) {
//             var len = results.length
//             if (len === 0) {
//                 return appendToResultsContainer(options.noResultsText)
//             }
//             for (var i = 0; i < len; i++) {
//                 appendToResultsContainer(_$Templater_7.compile(results[i]))
//             }
//         }

//         function isValidQuery(query) {
//             return query && query.length > 0
//         }

//         function isWhitelistedKey(key) {
//             return [13, 16, 20, 37, 38, 39, 40, 91].indexOf(key) === -1
//         }

//         function throwError(message) {
//             throw new Error('SimpleJekyllSearch --- ' + message)
//         }
//     })(window)

// }());