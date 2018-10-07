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

/* Package-scope variables */
var Chart;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/chart_chart/packages/chart_chart.js                      //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/chart:chart/Chart.js                                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/*!                                                                                                                   // 1
 * Chart.js                                                                                                           // 2
 * http://chartjs.org/                                                                                                // 3
 * Version: 1.0.1-beta.4                                                                                              // 4
 *                                                                                                                    // 5
 * Copyright 2014 Nick Downie                                                                                         // 6
 * Released under the MIT license                                                                                     // 7
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md                                                          // 8
 */                                                                                                                   // 9
                                                                                                                      // 10
                                                                                                                      // 11
(function(){                                                                                                          // 12
                                                                                                                      // 13
	"use strict";                                                                                                        // 14
                                                                                                                      // 15
	//Declare root variable - window in the browser, global on the server                                                // 16
	var root = this,                                                                                                     // 17
		previous = root.Chart;                                                                                              // 18
                                                                                                                      // 19
	//Occupy the global variable of Chart, and create a simple base class                                                // 20
	var Chart = function(context){                                                                                       // 21
		var chart = this;                                                                                                   // 22
		this.canvas = context.canvas;                                                                                       // 23
                                                                                                                      // 24
		this.ctx = context;                                                                                                 // 25
                                                                                                                      // 26
		//Variables global to the chart                                                                                     // 27
		var width = this.width = context.canvas.width;                                                                      // 28
		var height = this.height = context.canvas.height;                                                                   // 29
		this.aspectRatio = this.width / this.height;                                                                        // 30
		//High pixel density displays - multiply the size of the canvas height/width by the device pixel ratio, then scale. // 31
		helpers.retinaScale(this);                                                                                          // 32
                                                                                                                      // 33
		return this;                                                                                                        // 34
	};                                                                                                                   // 35
	//Globally expose the defaults to allow for user updating/changing                                                   // 36
	Chart.defaults = {                                                                                                   // 37
		global: {                                                                                                           // 38
			// Boolean - Whether to animate the chart                                                                          // 39
			animation: true,                                                                                                   // 40
                                                                                                                      // 41
			// Number - Number of animation steps                                                                              // 42
			animationSteps: 60,                                                                                                // 43
                                                                                                                      // 44
			// String - Animation easing effect                                                                                // 45
			animationEasing: "easeOutQuart",                                                                                   // 46
                                                                                                                      // 47
			// Boolean - If we should show the scale at all                                                                    // 48
			showScale: true,                                                                                                   // 49
                                                                                                                      // 50
			// Boolean - If we want to override with a hard coded scale                                                        // 51
			scaleOverride: false,                                                                                              // 52
                                                                                                                      // 53
			// ** Required if scaleOverride is true **                                                                         // 54
			// Number - The number of steps in a hard coded scale                                                              // 55
			scaleSteps: null,                                                                                                  // 56
			// Number - The value jump in the hard coded scale                                                                 // 57
			scaleStepWidth: null,                                                                                              // 58
			// Number - The scale starting value                                                                               // 59
			scaleStartValue: null,                                                                                             // 60
                                                                                                                      // 61
			// String - Colour of the scale line                                                                               // 62
			scaleLineColor: "rgba(0,0,0,.1)",                                                                                  // 63
                                                                                                                      // 64
			// Number - Pixel width of the scale line                                                                          // 65
			scaleLineWidth: 1,                                                                                                 // 66
                                                                                                                      // 67
			// Boolean - Whether to show labels on the scale                                                                   // 68
			scaleShowLabels: true,                                                                                             // 69
                                                                                                                      // 70
			// Interpolated JS string - can access value                                                                       // 71
			scaleLabel: "<%=value%>",                                                                                          // 72
                                                                                                                      // 73
			// Boolean - Whether the scale should stick to integers, and not show any floats even if drawing space is there    // 74
			scaleIntegersOnly: true,                                                                                           // 75
                                                                                                                      // 76
			// Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value           // 77
			scaleBeginAtZero: false,                                                                                           // 78
                                                                                                                      // 79
			// String - Scale label font declaration for the scale label                                                       // 80
			scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",                                             // 81
                                                                                                                      // 82
			// Number - Scale label font size in pixels                                                                        // 83
			scaleFontSize: 12,                                                                                                 // 84
                                                                                                                      // 85
			// String - Scale label font weight style                                                                          // 86
			scaleFontStyle: "normal",                                                                                          // 87
                                                                                                                      // 88
			// String - Scale label font colour                                                                                // 89
			scaleFontColor: "#666",                                                                                            // 90
                                                                                                                      // 91
			// Boolean - whether or not the chart should be responsive and resize when the browser does.                       // 92
			responsive: false,                                                                                                 // 93
                                                                                                                      // 94
                        // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
                        maintainAspectRatio: true,                                                                    // 96
                                                                                                                      // 97
			// Boolean - Determines whether to draw tooltips on the canvas or not - attaches events to touchmove & mousemove   // 98
			showTooltips: true,                                                                                                // 99
                                                                                                                      // 100
			// Array - Array of string names to attach tooltip events                                                          // 101
			tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],                                               // 102
                                                                                                                      // 103
			// String - Tooltip background colour                                                                              // 104
			tooltipFillColor: "rgba(0,0,0,0.8)",                                                                               // 105
                                                                                                                      // 106
			// String - Tooltip label font declaration for the scale label                                                     // 107
			tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",                                           // 108
                                                                                                                      // 109
			// Number - Tooltip label font size in pixels                                                                      // 110
			tooltipFontSize: 14,                                                                                               // 111
                                                                                                                      // 112
			// String - Tooltip font weight style                                                                              // 113
			tooltipFontStyle: "normal",                                                                                        // 114
                                                                                                                      // 115
			// String - Tooltip label font colour                                                                              // 116
			tooltipFontColor: "#fff",                                                                                          // 117
                                                                                                                      // 118
			// String - Tooltip title font declaration for the scale label                                                     // 119
			tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",                                      // 120
                                                                                                                      // 121
			// Number - Tooltip title font size in pixels                                                                      // 122
			tooltipTitleFontSize: 14,                                                                                          // 123
                                                                                                                      // 124
			// String - Tooltip title font weight style                                                                        // 125
			tooltipTitleFontStyle: "bold",                                                                                     // 126
                                                                                                                      // 127
			// String - Tooltip title font colour                                                                              // 128
			tooltipTitleFontColor: "#fff",                                                                                     // 129
                                                                                                                      // 130
			// Number - pixel width of padding around tooltip text                                                             // 131
			tooltipYPadding: 6,                                                                                                // 132
                                                                                                                      // 133
			// Number - pixel width of padding around tooltip text                                                             // 134
			tooltipXPadding: 6,                                                                                                // 135
                                                                                                                      // 136
			// Number - Size of the caret on the tooltip                                                                       // 137
			tooltipCaretSize: 8,                                                                                               // 138
                                                                                                                      // 139
			// Number - Pixel radius of the tooltip border                                                                     // 140
			tooltipCornerRadius: 6,                                                                                            // 141
                                                                                                                      // 142
			// Number - Pixel offset from point x to tooltip edge                                                              // 143
			tooltipXOffset: 10,                                                                                                // 144
                                                                                                                      // 145
			// String - Template string for single tooltips                                                                    // 146
			tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",                                                   // 147
                                                                                                                      // 148
			// String - Template string for single tooltips                                                                    // 149
			multiTooltipTemplate: "<%= value %>",                                                                              // 150
                                                                                                                      // 151
			// String - Colour behind the legend colour block                                                                  // 152
			multiTooltipKeyBackground: '#fff',                                                                                 // 153
                                                                                                                      // 154
			// Function - Will fire on animation progression.                                                                  // 155
			onAnimationProgress: function(){},                                                                                 // 156
                                                                                                                      // 157
			// Function - Will fire on animation completion.                                                                   // 158
			onAnimationComplete: function(){}                                                                                  // 159
                                                                                                                      // 160
		}                                                                                                                   // 161
	};                                                                                                                   // 162
                                                                                                                      // 163
	//Create a dictionary of chart types, to allow for extension of existing types                                       // 164
	Chart.types = {};                                                                                                    // 165
                                                                                                                      // 166
	//Global Chart helpers object for utility methods and classes                                                        // 167
	var helpers = Chart.helpers = {};                                                                                    // 168
                                                                                                                      // 169
		//-- Basic js utility methods                                                                                       // 170
	var each = helpers.each = function(loopable,callback,self){                                                          // 171
			var additionalArgs = Array.prototype.slice.call(arguments, 3);                                                     // 172
			// Check to see if null or undefined firstly.                                                                      // 173
			if (loopable){                                                                                                     // 174
				if (loopable.length === +loopable.length){                                                                        // 175
					var i;                                                                                                           // 176
					for (i=0; i<loopable.length; i++){                                                                               // 177
						callback.apply(self,[loopable[i], i].concat(additionalArgs));                                                   // 178
					}                                                                                                                // 179
				}                                                                                                                 // 180
				else{                                                                                                             // 181
					for (var item in loopable){                                                                                      // 182
						callback.apply(self,[loopable[item],item].concat(additionalArgs));                                              // 183
					}                                                                                                                // 184
				}                                                                                                                 // 185
			}                                                                                                                  // 186
		},                                                                                                                  // 187
		clone = helpers.clone = function(obj){                                                                              // 188
			var objClone = {};                                                                                                 // 189
			each(obj,function(value,key){                                                                                      // 190
				if (obj.hasOwnProperty(key)) objClone[key] = value;                                                               // 191
			});                                                                                                                // 192
			return objClone;                                                                                                   // 193
		},                                                                                                                  // 194
		extend = helpers.extend = function(base){                                                                           // 195
			each(Array.prototype.slice.call(arguments,1), function(extensionObject) {                                          // 196
				each(extensionObject,function(value,key){                                                                         // 197
					if (extensionObject.hasOwnProperty(key)) base[key] = value;                                                      // 198
				});                                                                                                               // 199
			});                                                                                                                // 200
			return base;                                                                                                       // 201
		},                                                                                                                  // 202
		merge = helpers.merge = function(base,master){                                                                      // 203
			//Merge properties in left object over to a shallow clone of object right.                                         // 204
			var args = Array.prototype.slice.call(arguments,0);                                                                // 205
			args.unshift({});                                                                                                  // 206
			return extend.apply(null, args);                                                                                   // 207
		},                                                                                                                  // 208
		indexOf = helpers.indexOf = function(arrayToSearch, item){                                                          // 209
			if (Array.prototype.indexOf) {                                                                                     // 210
				return arrayToSearch.indexOf(item);                                                                               // 211
			}                                                                                                                  // 212
			else{                                                                                                              // 213
				for (var i = 0; i < arrayToSearch.length; i++) {                                                                  // 214
					if (arrayToSearch[i] === item) return i;                                                                         // 215
				}                                                                                                                 // 216
				return -1;                                                                                                        // 217
			}                                                                                                                  // 218
		},                                                                                                                  // 219
		where = helpers.where = function(collection, filterCallback){                                                       // 220
			var filtered = [];                                                                                                 // 221
                                                                                                                      // 222
			helpers.each(collection, function(item){                                                                           // 223
				if (filterCallback(item)){                                                                                        // 224
					filtered.push(item);                                                                                             // 225
				}                                                                                                                 // 226
			});                                                                                                                // 227
                                                                                                                      // 228
			return filtered;                                                                                                   // 229
		},                                                                                                                  // 230
		findNextWhere = helpers.findNextWhere = function(arrayToSearch, filterCallback, startIndex){                        // 231
			// Default to start of the array                                                                                   // 232
			if (!startIndex){                                                                                                  // 233
				startIndex = -1;                                                                                                  // 234
			}                                                                                                                  // 235
			for (var i = startIndex + 1; i < arrayToSearch.length; i++) {                                                      // 236
				var currentItem = arrayToSearch[i];                                                                               // 237
				if (filterCallback(currentItem)){                                                                                 // 238
					return currentItem;                                                                                              // 239
				}                                                                                                                 // 240
			};                                                                                                                 // 241
		},                                                                                                                  // 242
		findPreviousWhere = helpers.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex){                // 243
			// Default to end of the array                                                                                     // 244
			if (!startIndex){                                                                                                  // 245
				startIndex = arrayToSearch.length;                                                                                // 246
			}                                                                                                                  // 247
			for (var i = startIndex - 1; i >= 0; i--) {                                                                        // 248
				var currentItem = arrayToSearch[i];                                                                               // 249
				if (filterCallback(currentItem)){                                                                                 // 250
					return currentItem;                                                                                              // 251
				}                                                                                                                 // 252
			};                                                                                                                 // 253
		},                                                                                                                  // 254
		inherits = helpers.inherits = function(extensions){                                                                 // 255
			//Basic javascript inheritance based on the model created in Backbone.js                                           // 256
			var parent = this;                                                                                                 // 257
			var ChartElement = (extensions && extensions.hasOwnProperty("constructor")) ? extensions.constructor : function(){ return parent.apply(this, arguments); };
                                                                                                                      // 259
			var Surrogate = function(){ this.constructor = ChartElement;};                                                     // 260
			Surrogate.prototype = parent.prototype;                                                                            // 261
			ChartElement.prototype = new Surrogate();                                                                          // 262
                                                                                                                      // 263
			ChartElement.extend = inherits;                                                                                    // 264
                                                                                                                      // 265
			if (extensions) extend(ChartElement.prototype, extensions);                                                        // 266
                                                                                                                      // 267
			ChartElement.__super__ = parent.prototype;                                                                         // 268
                                                                                                                      // 269
			return ChartElement;                                                                                               // 270
		},                                                                                                                  // 271
		noop = helpers.noop = function(){},                                                                                 // 272
		uid = helpers.uid = (function(){                                                                                    // 273
			var id=0;                                                                                                          // 274
			return function(){                                                                                                 // 275
				return "chart-" + id++;                                                                                           // 276
			};                                                                                                                 // 277
		})(),                                                                                                               // 278
		warn = helpers.warn = function(str){                                                                                // 279
			//Method for warning of errors                                                                                     // 280
			if (window.console && typeof window.console.warn == "function") console.warn(str);                                 // 281
		},                                                                                                                  // 282
		amd = helpers.amd = (typeof define == 'function' && define.amd),                                                    // 283
		//-- Math methods                                                                                                   // 284
		isNumber = helpers.isNumber = function(n){                                                                          // 285
			return !isNaN(parseFloat(n)) && isFinite(n);                                                                       // 286
		},                                                                                                                  // 287
		max = helpers.max = function(array){                                                                                // 288
			return Math.max.apply( Math, array );                                                                              // 289
		},                                                                                                                  // 290
		min = helpers.min = function(array){                                                                                // 291
			return Math.min.apply( Math, array );                                                                              // 292
		},                                                                                                                  // 293
		cap = helpers.cap = function(valueToCap,maxValue,minValue){                                                         // 294
			if(isNumber(maxValue)) {                                                                                           // 295
				if( valueToCap > maxValue ) {                                                                                     // 296
					return maxValue;                                                                                                 // 297
				}                                                                                                                 // 298
			}                                                                                                                  // 299
			else if(isNumber(minValue)){                                                                                       // 300
				if ( valueToCap < minValue ){                                                                                     // 301
					return minValue;                                                                                                 // 302
				}                                                                                                                 // 303
			}                                                                                                                  // 304
			return valueToCap;                                                                                                 // 305
		},                                                                                                                  // 306
		getDecimalPlaces = helpers.getDecimalPlaces = function(num){                                                        // 307
			if (num%1!==0 && isNumber(num)){                                                                                   // 308
				return num.toString().split(".")[1].length;                                                                       // 309
			}                                                                                                                  // 310
			else {                                                                                                             // 311
				return 0;                                                                                                         // 312
			}                                                                                                                  // 313
		},                                                                                                                  // 314
		toRadians = helpers.radians = function(degrees){                                                                    // 315
			return degrees * (Math.PI/180);                                                                                    // 316
		},                                                                                                                  // 317
		// Gets the angle from vertical upright to the point about a centre.                                                // 318
		getAngleFromPoint = helpers.getAngleFromPoint = function(centrePoint, anglePoint){                                  // 319
			var distanceFromXCenter = anglePoint.x - centrePoint.x,                                                            // 320
				distanceFromYCenter = anglePoint.y - centrePoint.y,                                                               // 321
				radialDistanceFromCenter = Math.sqrt( distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
                                                                                                                      // 323
                                                                                                                      // 324
			var angle = Math.PI * 2 + Math.atan2(distanceFromYCenter, distanceFromXCenter);                                    // 325
                                                                                                                      // 326
			//If the segment is in the top left quadrant, we need to add another rotation to the angle                         // 327
			if (distanceFromXCenter < 0 && distanceFromYCenter < 0){                                                           // 328
				angle += Math.PI*2;                                                                                               // 329
			}                                                                                                                  // 330
                                                                                                                      // 331
			return {                                                                                                           // 332
				angle: angle,                                                                                                     // 333
				distance: radialDistanceFromCenter                                                                                // 334
			};                                                                                                                 // 335
		},                                                                                                                  // 336
		aliasPixel = helpers.aliasPixel = function(pixelWidth){                                                             // 337
			return (pixelWidth % 2 === 0) ? 0 : 0.5;                                                                           // 338
		},                                                                                                                  // 339
		splineCurve = helpers.splineCurve = function(FirstPoint,MiddlePoint,AfterPoint,t){                                  // 340
			//Props to Rob Spencer at scaled innovation for his post on splining between points                                // 341
			//http://scaledinnovation.com/analytics/splines/aboutSplines.html                                                  // 342
			var d01=Math.sqrt(Math.pow(MiddlePoint.x-FirstPoint.x,2)+Math.pow(MiddlePoint.y-FirstPoint.y,2)),                  // 343
				d12=Math.sqrt(Math.pow(AfterPoint.x-MiddlePoint.x,2)+Math.pow(AfterPoint.y-MiddlePoint.y,2)),                     // 344
				fa=t*d01/(d01+d12),// scaling factor for triangle Ta                                                              // 345
				fb=t*d12/(d01+d12);                                                                                               // 346
			return {                                                                                                           // 347
				inner : {                                                                                                         // 348
					x : MiddlePoint.x-fa*(AfterPoint.x-FirstPoint.x),                                                                // 349
					y : MiddlePoint.y-fa*(AfterPoint.y-FirstPoint.y)                                                                 // 350
				},                                                                                                                // 351
				outer : {                                                                                                         // 352
					x: MiddlePoint.x+fb*(AfterPoint.x-FirstPoint.x),                                                                 // 353
					y : MiddlePoint.y+fb*(AfterPoint.y-FirstPoint.y)                                                                 // 354
				}                                                                                                                 // 355
			};                                                                                                                 // 356
		},                                                                                                                  // 357
		calculateOrderOfMagnitude = helpers.calculateOrderOfMagnitude = function(val){                                      // 358
			return Math.floor(Math.log(val) / Math.LN10);                                                                      // 359
		},                                                                                                                  // 360
		calculateScaleRange = helpers.calculateScaleRange = function(valuesArray, drawingSize, textSize, startFromZero, integersOnly){
                                                                                                                      // 362
			//Set a minimum step of two - a point at the top of the graph, and a point at the base                             // 363
			var minSteps = 2,                                                                                                  // 364
				maxSteps = Math.floor(drawingSize/(textSize * 1.5)),                                                              // 365
				skipFitting = (minSteps >= maxSteps);                                                                             // 366
                                                                                                                      // 367
			var maxValue = max(valuesArray),                                                                                   // 368
				minValue = min(valuesArray);                                                                                      // 369
                                                                                                                      // 370
			// We need some degree of seperation here to calculate the scales if all the values are the same                   // 371
			// Adding/minusing 0.5 will give us a range of 1.                                                                  // 372
			if (maxValue === minValue){                                                                                        // 373
				maxValue += 0.5;                                                                                                  // 374
				// So we don't end up with a graph with a negative start value if we've said always start from zero               // 375
				if (minValue >= 0.5 && !startFromZero){                                                                           // 376
					minValue -= 0.5;                                                                                                 // 377
				}                                                                                                                 // 378
				else{                                                                                                             // 379
					// Make up a whole number above the values                                                                       // 380
					maxValue += 0.5;                                                                                                 // 381
				}                                                                                                                 // 382
			}                                                                                                                  // 383
                                                                                                                      // 384
			var	valueRange = Math.abs(maxValue - minValue),                                                                    // 385
				rangeOrderOfMagnitude = calculateOrderOfMagnitude(valueRange),                                                    // 386
				graphMax = Math.ceil(maxValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude), // 387
				graphMin = (startFromZero) ? 0 : Math.floor(minValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude),
				graphRange = graphMax - graphMin,                                                                                 // 389
				stepValue = Math.pow(10, rangeOrderOfMagnitude),                                                                  // 390
				numberOfSteps = Math.round(graphRange / stepValue);                                                               // 391
                                                                                                                      // 392
			//If we have more space on the graph we'll use it to give more definition to the data                              // 393
			while((numberOfSteps > maxSteps || (numberOfSteps * 2) < maxSteps) && !skipFitting) {                              // 394
				if(numberOfSteps > maxSteps){                                                                                     // 395
					stepValue *=2;                                                                                                   // 396
					numberOfSteps = Math.round(graphRange/stepValue);                                                                // 397
					// Don't ever deal with a decimal number of steps - cancel fitting and just use the minimum number of steps.     // 398
					if (numberOfSteps % 1 !== 0){                                                                                    // 399
						skipFitting = true;                                                                                             // 400
					}                                                                                                                // 401
				}                                                                                                                 // 402
				//We can fit in double the amount of scale points on the scale                                                    // 403
				else{                                                                                                             // 404
					//If user has declared ints only, and the step value isn't a decimal                                             // 405
					if (integersOnly && rangeOrderOfMagnitude >= 0){                                                                 // 406
						//If the user has said integers only, we need to check that making the scale more granular wouldn't make it a float
						if(stepValue/2 % 1 === 0){                                                                                      // 408
							stepValue /=2;                                                                                                 // 409
							numberOfSteps = Math.round(graphRange/stepValue);                                                              // 410
						}                                                                                                               // 411
						//If it would make it a float break out of the loop                                                             // 412
						else{                                                                                                           // 413
							break;                                                                                                         // 414
						}                                                                                                               // 415
					}                                                                                                                // 416
					//If the scale doesn't have to be an int, make the scale more granular anyway.                                   // 417
					else{                                                                                                            // 418
						stepValue /=2;                                                                                                  // 419
						numberOfSteps = Math.round(graphRange/stepValue);                                                               // 420
					}                                                                                                                // 421
                                                                                                                      // 422
				}                                                                                                                 // 423
			}                                                                                                                  // 424
                                                                                                                      // 425
			if (skipFitting){                                                                                                  // 426
				numberOfSteps = minSteps;                                                                                         // 427
				stepValue = graphRange / numberOfSteps;                                                                           // 428
			}                                                                                                                  // 429
                                                                                                                      // 430
			return {                                                                                                           // 431
				steps : numberOfSteps,                                                                                            // 432
				stepValue : stepValue,                                                                                            // 433
				min : graphMin,                                                                                                   // 434
				max	: graphMin + (numberOfSteps * stepValue)                                                                      // 435
			};                                                                                                                 // 436
                                                                                                                      // 437
		},                                                                                                                  // 438
		/* jshint ignore:start */                                                                                           // 439
		// Blows up jshint errors based on the new Function constructor                                                     // 440
		//Templating methods                                                                                                // 441
		//Javascript micro templating by John Resig - source at http://ejohn.org/blog/javascript-micro-templating/          // 442
		template = helpers.template = function(templateString, valuesObject){                                               // 443
			 // If templateString is function rather than string-template - call the function for valuesObject                 // 444
			if(templateString instanceof Function){                                                                            // 445
			 	return templateString(valuesObject);                                                                             // 446
		 	}                                                                                                                 // 447
                                                                                                                      // 448
			var cache = {};                                                                                                    // 449
			function tmpl(str, data){                                                                                          // 450
				// Figure out if we're getting a template, or if we need to                                                       // 451
				// load the template - and be sure to cache the result.                                                           // 452
				var fn = !/\W/.test(str) ?                                                                                        // 453
				cache[str] = cache[str] :                                                                                         // 454
                                                                                                                      // 455
				// Generate a reusable function that will serve as a template                                                     // 456
				// generator (and which will be cached).                                                                          // 457
				new Function("obj",                                                                                               // 458
					"var p=[],print=function(){p.push.apply(p,arguments);};" +                                                       // 459
                                                                                                                      // 460
					// Introduce the data as local variables using with(){}                                                          // 461
					"with(obj){p.push('" +                                                                                           // 462
                                                                                                                      // 463
					// Convert the template into pure JavaScript                                                                     // 464
					str                                                                                                              // 465
						.replace(/[\r\t\n]/g, " ")                                                                                      // 466
						.split("<%").join("\t")                                                                                         // 467
						.replace(/((^|%>)[^\t]*)'/g, "$1\r")                                                                            // 468
						.replace(/\t=(.*?)%>/g, "',$1,'")                                                                               // 469
						.split("\t").join("');")                                                                                        // 470
						.split("%>").join("p.push('")                                                                                   // 471
						.split("\r").join("\\'") +                                                                                      // 472
					"');}return p.join('');"                                                                                         // 473
				);                                                                                                                // 474
                                                                                                                      // 475
				// Provide some basic currying to the user                                                                        // 476
				return data ? fn( data ) : fn;                                                                                    // 477
			}                                                                                                                  // 478
			return tmpl(templateString,valuesObject);                                                                          // 479
		},                                                                                                                  // 480
		/* jshint ignore:end */                                                                                             // 481
		generateLabels = helpers.generateLabels = function(templateString,numberOfSteps,graphMin,stepValue){                // 482
			var labelsArray = new Array(numberOfSteps);                                                                        // 483
			if (labelTemplateString){                                                                                          // 484
				each(labelsArray,function(val,index){                                                                             // 485
					labelsArray[index] = template(templateString,{value: (graphMin + (stepValue*(index+1)))});                       // 486
				});                                                                                                               // 487
			}                                                                                                                  // 488
			return labelsArray;                                                                                                // 489
		},                                                                                                                  // 490
		//--Animation methods                                                                                               // 491
		//Easing functions adapted from Robert Penner's easing equations                                                    // 492
		//http://www.robertpenner.com/easing/                                                                               // 493
		easingEffects = helpers.easingEffects = {                                                                           // 494
			linear: function (t) {                                                                                             // 495
				return t;                                                                                                         // 496
			},                                                                                                                 // 497
			easeInQuad: function (t) {                                                                                         // 498
				return t * t;                                                                                                     // 499
			},                                                                                                                 // 500
			easeOutQuad: function (t) {                                                                                        // 501
				return -1 * t * (t - 2);                                                                                          // 502
			},                                                                                                                 // 503
			easeInOutQuad: function (t) {                                                                                      // 504
				if ((t /= 1 / 2) < 1) return 1 / 2 * t * t;                                                                       // 505
				return -1 / 2 * ((--t) * (t - 2) - 1);                                                                            // 506
			},                                                                                                                 // 507
			easeInCubic: function (t) {                                                                                        // 508
				return t * t * t;                                                                                                 // 509
			},                                                                                                                 // 510
			easeOutCubic: function (t) {                                                                                       // 511
				return 1 * ((t = t / 1 - 1) * t * t + 1);                                                                         // 512
			},                                                                                                                 // 513
			easeInOutCubic: function (t) {                                                                                     // 514
				if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t;                                                                   // 515
				return 1 / 2 * ((t -= 2) * t * t + 2);                                                                            // 516
			},                                                                                                                 // 517
			easeInQuart: function (t) {                                                                                        // 518
				return t * t * t * t;                                                                                             // 519
			},                                                                                                                 // 520
			easeOutQuart: function (t) {                                                                                       // 521
				return -1 * ((t = t / 1 - 1) * t * t * t - 1);                                                                    // 522
			},                                                                                                                 // 523
			easeInOutQuart: function (t) {                                                                                     // 524
				if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t;                                                               // 525
				return -1 / 2 * ((t -= 2) * t * t * t - 2);                                                                       // 526
			},                                                                                                                 // 527
			easeInQuint: function (t) {                                                                                        // 528
				return 1 * (t /= 1) * t * t * t * t;                                                                              // 529
			},                                                                                                                 // 530
			easeOutQuint: function (t) {                                                                                       // 531
				return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);                                                                 // 532
			},                                                                                                                 // 533
			easeInOutQuint: function (t) {                                                                                     // 534
				if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t * t;                                                           // 535
				return 1 / 2 * ((t -= 2) * t * t * t * t + 2);                                                                    // 536
			},                                                                                                                 // 537
			easeInSine: function (t) {                                                                                         // 538
				return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;                                                                  // 539
			},                                                                                                                 // 540
			easeOutSine: function (t) {                                                                                        // 541
				return 1 * Math.sin(t / 1 * (Math.PI / 2));                                                                       // 542
			},                                                                                                                 // 543
			easeInOutSine: function (t) {                                                                                      // 544
				return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);                                                                  // 545
			},                                                                                                                 // 546
			easeInExpo: function (t) {                                                                                         // 547
				return (t === 0) ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));                                                         // 548
			},                                                                                                                 // 549
			easeOutExpo: function (t) {                                                                                        // 550
				return (t === 1) ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);                                                       // 551
			},                                                                                                                 // 552
			easeInOutExpo: function (t) {                                                                                      // 553
				if (t === 0) return 0;                                                                                            // 554
				if (t === 1) return 1;                                                                                            // 555
				if ((t /= 1 / 2) < 1) return 1 / 2 * Math.pow(2, 10 * (t - 1));                                                   // 556
				return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);                                                                     // 557
			},                                                                                                                 // 558
			easeInCirc: function (t) {                                                                                         // 559
				if (t >= 1) return t;                                                                                             // 560
				return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);                                                                    // 561
			},                                                                                                                 // 562
			easeOutCirc: function (t) {                                                                                        // 563
				return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);                                                                    // 564
			},                                                                                                                 // 565
			easeInOutCirc: function (t) {                                                                                      // 566
				if ((t /= 1 / 2) < 1) return -1 / 2 * (Math.sqrt(1 - t * t) - 1);                                                 // 567
				return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);                                                                 // 568
			},                                                                                                                 // 569
			easeInElastic: function (t) {                                                                                      // 570
				var s = 1.70158;                                                                                                  // 571
				var p = 0;                                                                                                        // 572
				var a = 1;                                                                                                        // 573
				if (t === 0) return 0;                                                                                            // 574
				if ((t /= 1) == 1) return 1;                                                                                      // 575
				if (!p) p = 1 * 0.3;                                                                                              // 576
				if (a < Math.abs(1)) {                                                                                            // 577
					a = 1;                                                                                                           // 578
					s = p / 4;                                                                                                       // 579
				} else s = p / (2 * Math.PI) * Math.asin(1 / a);                                                                  // 580
				return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));                             // 581
			},                                                                                                                 // 582
			easeOutElastic: function (t) {                                                                                     // 583
				var s = 1.70158;                                                                                                  // 584
				var p = 0;                                                                                                        // 585
				var a = 1;                                                                                                        // 586
				if (t === 0) return 0;                                                                                            // 587
				if ((t /= 1) == 1) return 1;                                                                                      // 588
				if (!p) p = 1 * 0.3;                                                                                              // 589
				if (a < Math.abs(1)) {                                                                                            // 590
					a = 1;                                                                                                           // 591
					s = p / 4;                                                                                                       // 592
				} else s = p / (2 * Math.PI) * Math.asin(1 / a);                                                                  // 593
				return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;                                  // 594
			},                                                                                                                 // 595
			easeInOutElastic: function (t) {                                                                                   // 596
				var s = 1.70158;                                                                                                  // 597
				var p = 0;                                                                                                        // 598
				var a = 1;                                                                                                        // 599
				if (t === 0) return 0;                                                                                            // 600
				if ((t /= 1 / 2) == 2) return 1;                                                                                  // 601
				if (!p) p = 1 * (0.3 * 1.5);                                                                                      // 602
				if (a < Math.abs(1)) {                                                                                            // 603
					a = 1;                                                                                                           // 604
					s = p / 4;                                                                                                       // 605
				} else s = p / (2 * Math.PI) * Math.asin(1 / a);                                                                  // 606
				if (t < 1) return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));            // 607
				return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * 0.5 + 1;                     // 608
			},                                                                                                                 // 609
			easeInBack: function (t) {                                                                                         // 610
				var s = 1.70158;                                                                                                  // 611
				return 1 * (t /= 1) * t * ((s + 1) * t - s);                                                                      // 612
			},                                                                                                                 // 613
			easeOutBack: function (t) {                                                                                        // 614
				var s = 1.70158;                                                                                                  // 615
				return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);                                                         // 616
			},                                                                                                                 // 617
			easeInOutBack: function (t) {                                                                                      // 618
				var s = 1.70158;                                                                                                  // 619
				if ((t /= 1 / 2) < 1) return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));                                    // 620
				return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);                                               // 621
			},                                                                                                                 // 622
			easeInBounce: function (t) {                                                                                       // 623
				return 1 - easingEffects.easeOutBounce(1 - t);                                                                    // 624
			},                                                                                                                 // 625
			easeOutBounce: function (t) {                                                                                      // 626
				if ((t /= 1) < (1 / 2.75)) {                                                                                      // 627
					return 1 * (7.5625 * t * t);                                                                                     // 628
				} else if (t < (2 / 2.75)) {                                                                                      // 629
					return 1 * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75);                                                            // 630
				} else if (t < (2.5 / 2.75)) {                                                                                    // 631
					return 1 * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375);                                                         // 632
				} else {                                                                                                          // 633
					return 1 * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375);                                                      // 634
				}                                                                                                                 // 635
			},                                                                                                                 // 636
			easeInOutBounce: function (t) {                                                                                    // 637
				if (t < 1 / 2) return easingEffects.easeInBounce(t * 2) * 0.5;                                                    // 638
				return easingEffects.easeOutBounce(t * 2 - 1) * 0.5 + 1 * 0.5;                                                    // 639
			}                                                                                                                  // 640
		},                                                                                                                  // 641
		//Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/             // 642
		requestAnimFrame = helpers.requestAnimFrame = (function(){                                                          // 643
			return window.requestAnimationFrame ||                                                                             // 644
				window.webkitRequestAnimationFrame ||                                                                             // 645
				window.mozRequestAnimationFrame ||                                                                                // 646
				window.oRequestAnimationFrame ||                                                                                  // 647
				window.msRequestAnimationFrame ||                                                                                 // 648
				function(callback) {                                                                                              // 649
					return window.setTimeout(callback, 1000 / 60);                                                                   // 650
				};                                                                                                                // 651
		})(),                                                                                                               // 652
		cancelAnimFrame = helpers.cancelAnimFrame = (function(){                                                            // 653
			return window.cancelAnimationFrame ||                                                                              // 654
				window.webkitCancelAnimationFrame ||                                                                              // 655
				window.mozCancelAnimationFrame ||                                                                                 // 656
				window.oCancelAnimationFrame ||                                                                                   // 657
				window.msCancelAnimationFrame ||                                                                                  // 658
				function(callback) {                                                                                              // 659
					return window.clearTimeout(callback, 1000 / 60);                                                                 // 660
				};                                                                                                                // 661
		})(),                                                                                                               // 662
		animationLoop = helpers.animationLoop = function(callback,totalSteps,easingString,onProgress,onComplete,chartInstance){
                                                                                                                      // 664
			var currentStep = 0,                                                                                               // 665
				easingFunction = easingEffects[easingString] || easingEffects.linear;                                             // 666
                                                                                                                      // 667
			var animationFrame = function(){                                                                                   // 668
				currentStep++;                                                                                                    // 669
				var stepDecimal = currentStep/totalSteps;                                                                         // 670
				var easeDecimal = easingFunction(stepDecimal);                                                                    // 671
                                                                                                                      // 672
				callback.call(chartInstance,easeDecimal,stepDecimal, currentStep);                                                // 673
				onProgress.call(chartInstance,easeDecimal,stepDecimal);                                                           // 674
				if (currentStep < totalSteps){                                                                                    // 675
					chartInstance.animationFrame = requestAnimFrame(animationFrame);                                                 // 676
				} else{                                                                                                           // 677
					onComplete.apply(chartInstance);                                                                                 // 678
				}                                                                                                                 // 679
			};                                                                                                                 // 680
			requestAnimFrame(animationFrame);                                                                                  // 681
		},                                                                                                                  // 682
		//-- DOM methods                                                                                                    // 683
		getRelativePosition = helpers.getRelativePosition = function(evt){                                                  // 684
			var mouseX, mouseY;                                                                                                // 685
			var e = evt.originalEvent || evt,                                                                                  // 686
				canvas = evt.currentTarget || evt.srcElement,                                                                     // 687
				boundingRect = canvas.getBoundingClientRect();                                                                    // 688
                                                                                                                      // 689
			if (e.touches){                                                                                                    // 690
				mouseX = e.touches[0].clientX - boundingRect.left;                                                                // 691
				mouseY = e.touches[0].clientY - boundingRect.top;                                                                 // 692
                                                                                                                      // 693
			}                                                                                                                  // 694
			else{                                                                                                              // 695
				mouseX = e.clientX - boundingRect.left;                                                                           // 696
				mouseY = e.clientY - boundingRect.top;                                                                            // 697
			}                                                                                                                  // 698
                                                                                                                      // 699
			return {                                                                                                           // 700
				x : mouseX,                                                                                                       // 701
				y : mouseY                                                                                                        // 702
			};                                                                                                                 // 703
                                                                                                                      // 704
		},                                                                                                                  // 705
		addEvent = helpers.addEvent = function(node,eventType,method){                                                      // 706
			if (node.addEventListener){                                                                                        // 707
				node.addEventListener(eventType,method);                                                                          // 708
			} else if (node.attachEvent){                                                                                      // 709
				node.attachEvent("on"+eventType, method);                                                                         // 710
			} else {                                                                                                           // 711
				node["on"+eventType] = method;                                                                                    // 712
			}                                                                                                                  // 713
		},                                                                                                                  // 714
		removeEvent = helpers.removeEvent = function(node, eventType, handler){                                             // 715
			if (node.removeEventListener){                                                                                     // 716
				node.removeEventListener(eventType, handler, false);                                                              // 717
			} else if (node.detachEvent){                                                                                      // 718
				node.detachEvent("on"+eventType,handler);                                                                         // 719
			} else{                                                                                                            // 720
				node["on" + eventType] = noop;                                                                                    // 721
			}                                                                                                                  // 722
		},                                                                                                                  // 723
		bindEvents = helpers.bindEvents = function(chartInstance, arrayOfEvents, handler){                                  // 724
			// Create the events object if it's not already present                                                            // 725
			if (!chartInstance.events) chartInstance.events = {};                                                              // 726
                                                                                                                      // 727
			each(arrayOfEvents,function(eventName){                                                                            // 728
				chartInstance.events[eventName] = function(){                                                                     // 729
					handler.apply(chartInstance, arguments);                                                                         // 730
				};                                                                                                                // 731
				addEvent(chartInstance.chart.canvas,eventName,chartInstance.events[eventName]);                                   // 732
			});                                                                                                                // 733
		},                                                                                                                  // 734
		unbindEvents = helpers.unbindEvents = function (chartInstance, arrayOfEvents) {                                     // 735
			each(arrayOfEvents, function(handler,eventName){                                                                   // 736
				removeEvent(chartInstance.chart.canvas, eventName, handler);                                                      // 737
			});                                                                                                                // 738
		},                                                                                                                  // 739
		getMaximumWidth = helpers.getMaximumWidth = function(domNode){                                                      // 740
			var container = domNode.parentNode;                                                                                // 741
			// TODO = check cross browser stuff with this.                                                                     // 742
			return container.clientWidth;                                                                                      // 743
		},                                                                                                                  // 744
		getMaximumHeight = helpers.getMaximumHeight = function(domNode){                                                    // 745
			var container = domNode.parentNode;                                                                                // 746
			// TODO = check cross browser stuff with this.                                                                     // 747
			return container.clientHeight;                                                                                     // 748
		},                                                                                                                  // 749
		getMaximumSize = helpers.getMaximumSize = helpers.getMaximumWidth, // legacy support                                // 750
		retinaScale = helpers.retinaScale = function(chart){                                                                // 751
			var ctx = chart.ctx,                                                                                               // 752
				width = chart.canvas.width,                                                                                       // 753
				height = chart.canvas.height;                                                                                     // 754
                                                                                                                      // 755
			if (window.devicePixelRatio) {                                                                                     // 756
				ctx.canvas.style.width = width + "px";                                                                            // 757
				ctx.canvas.style.height = height + "px";                                                                          // 758
				ctx.canvas.height = height * window.devicePixelRatio;                                                             // 759
				ctx.canvas.width = width * window.devicePixelRatio;                                                               // 760
				ctx.scale(window.devicePixelRatio, window.devicePixelRatio);                                                      // 761
			}                                                                                                                  // 762
		},                                                                                                                  // 763
		//-- Canvas methods                                                                                                 // 764
		clear = helpers.clear = function(chart){                                                                            // 765
			chart.ctx.clearRect(0,0,chart.width,chart.height);                                                                 // 766
		},                                                                                                                  // 767
		fontString = helpers.fontString = function(pixelSize,fontStyle,fontFamily){                                         // 768
			return fontStyle + " " + pixelSize+"px " + fontFamily;                                                             // 769
		},                                                                                                                  // 770
		longestText = helpers.longestText = function(ctx,font,arrayOfStrings){                                              // 771
			ctx.font = font;                                                                                                   // 772
			var longest = 0;                                                                                                   // 773
			each(arrayOfStrings,function(string){                                                                              // 774
				var textWidth = ctx.measureText(string).width;                                                                    // 775
				longest = (textWidth > longest) ? textWidth : longest;                                                            // 776
			});                                                                                                                // 777
			return longest;                                                                                                    // 778
		},                                                                                                                  // 779
		drawRoundedRectangle = helpers.drawRoundedRectangle = function(ctx,x,y,width,height,radius){                        // 780
			ctx.beginPath();                                                                                                   // 781
			ctx.moveTo(x + radius, y);                                                                                         // 782
			ctx.lineTo(x + width - radius, y);                                                                                 // 783
			ctx.quadraticCurveTo(x + width, y, x + width, y + radius);                                                         // 784
			ctx.lineTo(x + width, y + height - radius);                                                                        // 785
			ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);                                       // 786
			ctx.lineTo(x + radius, y + height);                                                                                // 787
			ctx.quadraticCurveTo(x, y + height, x, y + height - radius);                                                       // 788
			ctx.lineTo(x, y + radius);                                                                                         // 789
			ctx.quadraticCurveTo(x, y, x + radius, y);                                                                         // 790
			ctx.closePath();                                                                                                   // 791
		};                                                                                                                  // 792
                                                                                                                      // 793
                                                                                                                      // 794
	//Store a reference to each instance - allowing us to globally resize chart instances on window resize.              // 795
	//Destroy method on the chart will remove the instance of the chart from this reference.                             // 796
	Chart.instances = {};                                                                                                // 797
                                                                                                                      // 798
	Chart.Type = function(data,options,chart){                                                                           // 799
		this.options = options;                                                                                             // 800
		this.chart = chart;                                                                                                 // 801
		this.id = uid();                                                                                                    // 802
		//Add the chart instance to the global namespace                                                                    // 803
		Chart.instances[this.id] = this;                                                                                    // 804
                                                                                                                      // 805
		// Initialize is always called when a chart type is created                                                         // 806
		// By default it is a no op, but it should be extended                                                              // 807
		if (options.responsive){                                                                                            // 808
			this.resize();                                                                                                     // 809
		}                                                                                                                   // 810
		this.initialize.call(this,data);                                                                                    // 811
	};                                                                                                                   // 812
                                                                                                                      // 813
	//Core methods that'll be a part of every chart type                                                                 // 814
	extend(Chart.Type.prototype,{                                                                                        // 815
		initialize : function(){return this;},                                                                              // 816
		clear : function(){                                                                                                 // 817
			clear(this.chart);                                                                                                 // 818
			return this;                                                                                                       // 819
		},                                                                                                                  // 820
		stop : function(){                                                                                                  // 821
			// Stops any current animation loop occuring                                                                       // 822
			helpers.cancelAnimFrame.call(root, this.animationFrame);                                                           // 823
			return this;                                                                                                       // 824
		},                                                                                                                  // 825
		resize : function(callback){                                                                                        // 826
			this.stop();                                                                                                       // 827
			var canvas = this.chart.canvas,                                                                                    // 828
				newWidth = getMaximumWidth(this.chart.canvas),                                                                    // 829
				newHeight = this.options.maintainAspectRatio ? newWidth / this.chart.aspectRatio : getMaximumHeight(this.chart.canvas);
                                                                                                                      // 831
			canvas.width = this.chart.width = newWidth;                                                                        // 832
			canvas.height =  this.chart.height = newHeight;                                                                    // 833
                                                                                                                      // 834
			retinaScale(this.chart);                                                                                           // 835
                                                                                                                      // 836
			if (typeof callback === "function"){                                                                               // 837
				callback.apply(this, Array.prototype.slice.call(arguments, 1));                                                   // 838
			}                                                                                                                  // 839
			return this;                                                                                                       // 840
		},                                                                                                                  // 841
		reflow : noop,                                                                                                      // 842
		render : function(reflow){                                                                                          // 843
			if (reflow){                                                                                                       // 844
				this.reflow();                                                                                                    // 845
			}                                                                                                                  // 846
			if (this.options.animation && !reflow){                                                                            // 847
				helpers.animationLoop(                                                                                            // 848
					this.draw,                                                                                                       // 849
					this.options.animationSteps,                                                                                     // 850
					this.options.animationEasing,                                                                                    // 851
					this.options.onAnimationProgress,                                                                                // 852
					this.options.onAnimationComplete,                                                                                // 853
					this                                                                                                             // 854
				);                                                                                                                // 855
			}                                                                                                                  // 856
			else{                                                                                                              // 857
				this.draw();                                                                                                      // 858
				this.options.onAnimationComplete.call(this);                                                                      // 859
			}                                                                                                                  // 860
			return this;                                                                                                       // 861
		},                                                                                                                  // 862
		generateLegend : function(){                                                                                        // 863
			return template(this.options.legendTemplate,this);                                                                 // 864
		},                                                                                                                  // 865
		destroy : function(){                                                                                               // 866
			this.clear();                                                                                                      // 867
			unbindEvents(this, this.events);                                                                                   // 868
			delete Chart.instances[this.id];                                                                                   // 869
		},                                                                                                                  // 870
		showTooltip : function(ChartElements, forceRedraw){                                                                 // 871
			// Only redraw the chart if we've actually changed what we're hovering on.                                         // 872
			if (typeof this.activeElements === 'undefined') this.activeElements = [];                                          // 873
                                                                                                                      // 874
			var isChanged = (function(Elements){                                                                               // 875
				var changed = false;                                                                                              // 876
                                                                                                                      // 877
				if (Elements.length !== this.activeElements.length){                                                              // 878
					changed = true;                                                                                                  // 879
					return changed;                                                                                                  // 880
				}                                                                                                                 // 881
                                                                                                                      // 882
				each(Elements, function(element, index){                                                                          // 883
					if (element !== this.activeElements[index]){                                                                     // 884
						changed = true;                                                                                                 // 885
					}                                                                                                                // 886
				}, this);                                                                                                         // 887
				return changed;                                                                                                   // 888
			}).call(this, ChartElements);                                                                                      // 889
                                                                                                                      // 890
			if (!isChanged && !forceRedraw){                                                                                   // 891
				return;                                                                                                           // 892
			}                                                                                                                  // 893
			else{                                                                                                              // 894
				this.activeElements = ChartElements;                                                                              // 895
			}                                                                                                                  // 896
			this.draw();                                                                                                       // 897
			if (ChartElements.length > 0){                                                                                     // 898
				// If we have multiple datasets, show a MultiTooltip for all of the data points at that index                     // 899
				if (this.datasets && this.datasets.length > 1) {                                                                  // 900
					var dataArray,                                                                                                   // 901
						dataIndex;                                                                                                      // 902
                                                                                                                      // 903
					for (var i = this.datasets.length - 1; i >= 0; i--) {                                                            // 904
						dataArray = this.datasets[i].points || this.datasets[i].bars || this.datasets[i].segments;                      // 905
						dataIndex = indexOf(dataArray, ChartElements[0]);                                                               // 906
						if (dataIndex !== -1){                                                                                          // 907
							break;                                                                                                         // 908
						}                                                                                                               // 909
					}                                                                                                                // 910
					var tooltipLabels = [],                                                                                          // 911
						tooltipColors = [],                                                                                             // 912
						medianPosition = (function(index) {                                                                             // 913
                                                                                                                      // 914
							// Get all the points at that particular index                                                                 // 915
							var Elements = [],                                                                                             // 916
								dataCollection,                                                                                               // 917
								xPositions = [],                                                                                              // 918
								yPositions = [],                                                                                              // 919
								xMax,                                                                                                         // 920
								yMax,                                                                                                         // 921
								xMin,                                                                                                         // 922
								yMin;                                                                                                         // 923
							helpers.each(this.datasets, function(dataset){                                                                 // 924
								dataCollection = dataset.points || dataset.bars || dataset.segments;                                          // 925
								if (dataCollection[dataIndex] && dataCollection[dataIndex].hasValue()){                                       // 926
									Elements.push(dataCollection[dataIndex]);                                                                    // 927
								}                                                                                                             // 928
							});                                                                                                            // 929
                                                                                                                      // 930
							helpers.each(Elements, function(element) {                                                                     // 931
								xPositions.push(element.x);                                                                                   // 932
								yPositions.push(element.y);                                                                                   // 933
                                                                                                                      // 934
                                                                                                                      // 935
								//Include any colour information about the element                                                            // 936
								tooltipLabels.push(helpers.template(this.options.multiTooltipTemplate, element));                             // 937
								tooltipColors.push({                                                                                          // 938
									fill: element._saved.fillColor || element.fillColor,                                                         // 939
									stroke: element._saved.strokeColor || element.strokeColor                                                    // 940
								});                                                                                                           // 941
                                                                                                                      // 942
							}, this);                                                                                                      // 943
                                                                                                                      // 944
							yMin = min(yPositions);                                                                                        // 945
							yMax = max(yPositions);                                                                                        // 946
                                                                                                                      // 947
							xMin = min(xPositions);                                                                                        // 948
							xMax = max(xPositions);                                                                                        // 949
                                                                                                                      // 950
							return {                                                                                                       // 951
								x: (xMin > this.chart.width/2) ? xMin : xMax,                                                                 // 952
								y: (yMin + yMax)/2                                                                                            // 953
							};                                                                                                             // 954
						}).call(this, dataIndex);                                                                                       // 955
                                                                                                                      // 956
					new Chart.MultiTooltip({                                                                                         // 957
						x: medianPosition.x,                                                                                            // 958
						y: medianPosition.y,                                                                                            // 959
						xPadding: this.options.tooltipXPadding,                                                                         // 960
						yPadding: this.options.tooltipYPadding,                                                                         // 961
						xOffset: this.options.tooltipXOffset,                                                                           // 962
						fillColor: this.options.tooltipFillColor,                                                                       // 963
						textColor: this.options.tooltipFontColor,                                                                       // 964
						fontFamily: this.options.tooltipFontFamily,                                                                     // 965
						fontStyle: this.options.tooltipFontStyle,                                                                       // 966
						fontSize: this.options.tooltipFontSize,                                                                         // 967
						titleTextColor: this.options.tooltipTitleFontColor,                                                             // 968
						titleFontFamily: this.options.tooltipTitleFontFamily,                                                           // 969
						titleFontStyle: this.options.tooltipTitleFontStyle,                                                             // 970
						titleFontSize: this.options.tooltipTitleFontSize,                                                               // 971
						cornerRadius: this.options.tooltipCornerRadius,                                                                 // 972
						labels: tooltipLabels,                                                                                          // 973
						legendColors: tooltipColors,                                                                                    // 974
						legendColorBackground : this.options.multiTooltipKeyBackground,                                                 // 975
						title: ChartElements[0].label,                                                                                  // 976
						chart: this.chart,                                                                                              // 977
						ctx: this.chart.ctx                                                                                             // 978
					}).draw();                                                                                                       // 979
                                                                                                                      // 980
				} else {                                                                                                          // 981
					each(ChartElements, function(Element) {                                                                          // 982
						var tooltipPosition = Element.tooltipPosition();                                                                // 983
						new Chart.Tooltip({                                                                                             // 984
							x: Math.round(tooltipPosition.x),                                                                              // 985
							y: Math.round(tooltipPosition.y),                                                                              // 986
							xPadding: this.options.tooltipXPadding,                                                                        // 987
							yPadding: this.options.tooltipYPadding,                                                                        // 988
							fillColor: this.options.tooltipFillColor,                                                                      // 989
							textColor: this.options.tooltipFontColor,                                                                      // 990
							fontFamily: this.options.tooltipFontFamily,                                                                    // 991
							fontStyle: this.options.tooltipFontStyle,                                                                      // 992
							fontSize: this.options.tooltipFontSize,                                                                        // 993
							caretHeight: this.options.tooltipCaretSize,                                                                    // 994
							cornerRadius: this.options.tooltipCornerRadius,                                                                // 995
							text: template(this.options.tooltipTemplate, Element),                                                         // 996
							chart: this.chart                                                                                              // 997
						}).draw();                                                                                                      // 998
					}, this);                                                                                                        // 999
				}                                                                                                                 // 1000
			}                                                                                                                  // 1001
			return this;                                                                                                       // 1002
		},                                                                                                                  // 1003
		toBase64Image : function(){                                                                                         // 1004
			return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);                                            // 1005
		}                                                                                                                   // 1006
	});                                                                                                                  // 1007
                                                                                                                      // 1008
	Chart.Type.extend = function(extensions){                                                                            // 1009
                                                                                                                      // 1010
		var parent = this;                                                                                                  // 1011
                                                                                                                      // 1012
		var ChartType = function(){                                                                                         // 1013
			return parent.apply(this,arguments);                                                                               // 1014
		};                                                                                                                  // 1015
                                                                                                                      // 1016
		//Copy the prototype object of the this class                                                                       // 1017
		ChartType.prototype = clone(parent.prototype);                                                                      // 1018
		//Now overwrite some of the properties in the base class with the new extensions                                    // 1019
		extend(ChartType.prototype, extensions);                                                                            // 1020
                                                                                                                      // 1021
		ChartType.extend = Chart.Type.extend;                                                                               // 1022
                                                                                                                      // 1023
		if (extensions.name || parent.prototype.name){                                                                      // 1024
                                                                                                                      // 1025
			var chartName = extensions.name || parent.prototype.name;                                                          // 1026
			//Assign any potential default values of the new chart type                                                        // 1027
                                                                                                                      // 1028
			//If none are defined, we'll use a clone of the chart type this is being extended from.                            // 1029
			//I.e. if we extend a line chart, we'll use the defaults from the line chart if our new chart                      // 1030
			//doesn't define some defaults of their own.                                                                       // 1031
                                                                                                                      // 1032
			var baseDefaults = (Chart.defaults[parent.prototype.name]) ? clone(Chart.defaults[parent.prototype.name]) : {};    // 1033
                                                                                                                      // 1034
			Chart.defaults[chartName] = extend(baseDefaults,extensions.defaults);                                              // 1035
                                                                                                                      // 1036
			Chart.types[chartName] = ChartType;                                                                                // 1037
                                                                                                                      // 1038
			//Register this new chart type in the Chart prototype                                                              // 1039
			Chart.prototype[chartName] = function(data,options){                                                               // 1040
				var config = merge(Chart.defaults.global, Chart.defaults[chartName], options || {});                              // 1041
				return new ChartType(data,config,this);                                                                           // 1042
			};                                                                                                                 // 1043
		} else{                                                                                                             // 1044
			warn("Name not provided for this chart, so it hasn't been registered");                                            // 1045
		}                                                                                                                   // 1046
		return parent;                                                                                                      // 1047
	};                                                                                                                   // 1048
                                                                                                                      // 1049
	Chart.Element = function(configuration){                                                                             // 1050
		extend(this,configuration);                                                                                         // 1051
		this.initialize.apply(this,arguments);                                                                              // 1052
		this.save();                                                                                                        // 1053
	};                                                                                                                   // 1054
	extend(Chart.Element.prototype,{                                                                                     // 1055
		initialize : function(){},                                                                                          // 1056
		restore : function(props){                                                                                          // 1057
			if (!props){                                                                                                       // 1058
				extend(this,this._saved);                                                                                         // 1059
			} else {                                                                                                           // 1060
				each(props,function(key){                                                                                         // 1061
					this[key] = this._saved[key];                                                                                    // 1062
				},this);                                                                                                          // 1063
			}                                                                                                                  // 1064
			return this;                                                                                                       // 1065
		},                                                                                                                  // 1066
		save : function(){                                                                                                  // 1067
			this._saved = clone(this);                                                                                         // 1068
			delete this._saved._saved;                                                                                         // 1069
			return this;                                                                                                       // 1070
		},                                                                                                                  // 1071
		update : function(newProps){                                                                                        // 1072
			each(newProps,function(value,key){                                                                                 // 1073
				this._saved[key] = this[key];                                                                                     // 1074
				this[key] = value;                                                                                                // 1075
			},this);                                                                                                           // 1076
			return this;                                                                                                       // 1077
		},                                                                                                                  // 1078
		transition : function(props,ease){                                                                                  // 1079
			each(props,function(value,key){                                                                                    // 1080
				this[key] = ((value - this._saved[key]) * ease) + this._saved[key];                                               // 1081
			},this);                                                                                                           // 1082
			return this;                                                                                                       // 1083
		},                                                                                                                  // 1084
		tooltipPosition : function(){                                                                                       // 1085
			return {                                                                                                           // 1086
				x : this.x,                                                                                                       // 1087
				y : this.y                                                                                                        // 1088
			};                                                                                                                 // 1089
		},                                                                                                                  // 1090
		hasValue: function(){                                                                                               // 1091
			return isNumber(this.value);                                                                                       // 1092
		}                                                                                                                   // 1093
	});                                                                                                                  // 1094
                                                                                                                      // 1095
	Chart.Element.extend = inherits;                                                                                     // 1096
                                                                                                                      // 1097
                                                                                                                      // 1098
	Chart.Point = Chart.Element.extend({                                                                                 // 1099
		display: true,                                                                                                      // 1100
		inRange: function(chartX,chartY){                                                                                   // 1101
			var hitDetectionRange = this.hitDetectionRadius + this.radius;                                                     // 1102
			return ((Math.pow(chartX-this.x, 2)+Math.pow(chartY-this.y, 2)) < Math.pow(hitDetectionRange,2));                  // 1103
		},                                                                                                                  // 1104
		draw : function(){                                                                                                  // 1105
			if (this.display){                                                                                                 // 1106
				var ctx = this.ctx;                                                                                               // 1107
				ctx.beginPath();                                                                                                  // 1108
                                                                                                                      // 1109
				ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);                                                               // 1110
				ctx.closePath();                                                                                                  // 1111
                                                                                                                      // 1112
				ctx.strokeStyle = this.strokeColor;                                                                               // 1113
				ctx.lineWidth = this.strokeWidth;                                                                                 // 1114
                                                                                                                      // 1115
				ctx.fillStyle = this.fillColor;                                                                                   // 1116
                                                                                                                      // 1117
				ctx.fill();                                                                                                       // 1118
				ctx.stroke();                                                                                                     // 1119
			}                                                                                                                  // 1120
                                                                                                                      // 1121
                                                                                                                      // 1122
			//Quick debug for bezier curve splining                                                                            // 1123
			//Highlights control points and the line between them.                                                             // 1124
			//Handy for dev - stripped in the min version.                                                                     // 1125
                                                                                                                      // 1126
			// ctx.save();                                                                                                     // 1127
			// ctx.fillStyle = "black";                                                                                        // 1128
			// ctx.strokeStyle = "black"                                                                                       // 1129
			// ctx.beginPath();                                                                                                // 1130
			// ctx.arc(this.controlPoints.inner.x,this.controlPoints.inner.y, 2, 0, Math.PI*2);                                // 1131
			// ctx.fill();                                                                                                     // 1132
                                                                                                                      // 1133
			// ctx.beginPath();                                                                                                // 1134
			// ctx.arc(this.controlPoints.outer.x,this.controlPoints.outer.y, 2, 0, Math.PI*2);                                // 1135
			// ctx.fill();                                                                                                     // 1136
                                                                                                                      // 1137
			// ctx.moveTo(this.controlPoints.inner.x,this.controlPoints.inner.y);                                              // 1138
			// ctx.lineTo(this.x, this.y);                                                                                     // 1139
			// ctx.lineTo(this.controlPoints.outer.x,this.controlPoints.outer.y);                                              // 1140
			// ctx.stroke();                                                                                                   // 1141
                                                                                                                      // 1142
			// ctx.restore();                                                                                                  // 1143
                                                                                                                      // 1144
                                                                                                                      // 1145
                                                                                                                      // 1146
		}                                                                                                                   // 1147
	});                                                                                                                  // 1148
                                                                                                                      // 1149
	Chart.Arc = Chart.Element.extend({                                                                                   // 1150
		inRange : function(chartX,chartY){                                                                                  // 1151
                                                                                                                      // 1152
			var pointRelativePosition = helpers.getAngleFromPoint(this, {                                                      // 1153
				x: chartX,                                                                                                        // 1154
				y: chartY                                                                                                         // 1155
			});                                                                                                                // 1156
                                                                                                                      // 1157
			//Check if within the range of the open/close angle                                                                // 1158
			var betweenAngles = (pointRelativePosition.angle >= this.startAngle && pointRelativePosition.angle <= this.endAngle),
				withinRadius = (pointRelativePosition.distance >= this.innerRadius && pointRelativePosition.distance <= this.outerRadius);
                                                                                                                      // 1161
			return (betweenAngles && withinRadius);                                                                            // 1162
			//Ensure within the outside of the arc centre, but inside arc outer                                                // 1163
		},                                                                                                                  // 1164
		tooltipPosition : function(){                                                                                       // 1165
			var centreAngle = this.startAngle + ((this.endAngle - this.startAngle) / 2),                                       // 1166
				rangeFromCentre = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;                                   // 1167
			return {                                                                                                           // 1168
				x : this.x + (Math.cos(centreAngle) * rangeFromCentre),                                                           // 1169
				y : this.y + (Math.sin(centreAngle) * rangeFromCentre)                                                            // 1170
			};                                                                                                                 // 1171
		},                                                                                                                  // 1172
		draw : function(animationPercent){                                                                                  // 1173
                                                                                                                      // 1174
			var easingDecimal = animationPercent || 1;                                                                         // 1175
                                                                                                                      // 1176
			var ctx = this.ctx;                                                                                                // 1177
                                                                                                                      // 1178
			ctx.beginPath();                                                                                                   // 1179
                                                                                                                      // 1180
			ctx.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle);                                         // 1181
                                                                                                                      // 1182
			ctx.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, true);                                   // 1183
                                                                                                                      // 1184
			ctx.closePath();                                                                                                   // 1185
			ctx.strokeStyle = this.strokeColor;                                                                                // 1186
			ctx.lineWidth = this.strokeWidth;                                                                                  // 1187
                                                                                                                      // 1188
			ctx.fillStyle = this.fillColor;                                                                                    // 1189
                                                                                                                      // 1190
			ctx.fill();                                                                                                        // 1191
			ctx.lineJoin = 'bevel';                                                                                            // 1192
                                                                                                                      // 1193
			if (this.showStroke){                                                                                              // 1194
				ctx.stroke();                                                                                                     // 1195
			}                                                                                                                  // 1196
		}                                                                                                                   // 1197
	});                                                                                                                  // 1198
                                                                                                                      // 1199
	Chart.Rectangle = Chart.Element.extend({                                                                             // 1200
		draw : function(){                                                                                                  // 1201
			var ctx = this.ctx,                                                                                                // 1202
				halfWidth = this.width/2,                                                                                         // 1203
				leftX = this.x - halfWidth,                                                                                       // 1204
				rightX = this.x + halfWidth,                                                                                      // 1205
				top = this.base - (this.base - this.y),                                                                           // 1206
				halfStroke = this.strokeWidth / 2;                                                                                // 1207
                                                                                                                      // 1208
			// Canvas doesn't allow us to stroke inside the width so we can                                                    // 1209
			// adjust the sizes to fit if we're setting a stroke on the line                                                   // 1210
			if (this.showStroke){                                                                                              // 1211
				leftX += halfStroke;                                                                                              // 1212
				rightX -= halfStroke;                                                                                             // 1213
				top += halfStroke;                                                                                                // 1214
			}                                                                                                                  // 1215
                                                                                                                      // 1216
			ctx.beginPath();                                                                                                   // 1217
                                                                                                                      // 1218
			ctx.fillStyle = this.fillColor;                                                                                    // 1219
			ctx.strokeStyle = this.strokeColor;                                                                                // 1220
			ctx.lineWidth = this.strokeWidth;                                                                                  // 1221
                                                                                                                      // 1222
			// It'd be nice to keep this class totally generic to any rectangle                                                // 1223
			// and simply specify which border to miss out.                                                                    // 1224
			ctx.moveTo(leftX, this.base);                                                                                      // 1225
			ctx.lineTo(leftX, top);                                                                                            // 1226
			ctx.lineTo(rightX, top);                                                                                           // 1227
			ctx.lineTo(rightX, this.base);                                                                                     // 1228
			ctx.fill();                                                                                                        // 1229
			if (this.showStroke){                                                                                              // 1230
				ctx.stroke();                                                                                                     // 1231
			}                                                                                                                  // 1232
		},                                                                                                                  // 1233
		height : function(){                                                                                                // 1234
			return this.base - this.y;                                                                                         // 1235
		},                                                                                                                  // 1236
		inRange : function(chartX,chartY){                                                                                  // 1237
			return (chartX >= this.x - this.width/2 && chartX <= this.x + this.width/2) && (chartY >= this.y && chartY <= this.base);
		}                                                                                                                   // 1239
	});                                                                                                                  // 1240
                                                                                                                      // 1241
	Chart.Tooltip = Chart.Element.extend({                                                                               // 1242
		draw : function(){                                                                                                  // 1243
                                                                                                                      // 1244
			var ctx = this.chart.ctx;                                                                                          // 1245
                                                                                                                      // 1246
			ctx.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);                                               // 1247
                                                                                                                      // 1248
			this.xAlign = "center";                                                                                            // 1249
			this.yAlign = "above";                                                                                             // 1250
                                                                                                                      // 1251
			//Distance between the actual element.y position and the start of the tooltip caret                                // 1252
			var caretPadding = 2;                                                                                              // 1253
                                                                                                                      // 1254
			var tooltipWidth = ctx.measureText(this.text).width + 2*this.xPadding,                                             // 1255
				tooltipRectHeight = this.fontSize + 2*this.yPadding,                                                              // 1256
				tooltipHeight = tooltipRectHeight + this.caretHeight + caretPadding;                                              // 1257
                                                                                                                      // 1258
			if (this.x + tooltipWidth/2 >this.chart.width){                                                                    // 1259
				this.xAlign = "left";                                                                                             // 1260
			} else if (this.x - tooltipWidth/2 < 0){                                                                           // 1261
				this.xAlign = "right";                                                                                            // 1262
			}                                                                                                                  // 1263
                                                                                                                      // 1264
			if (this.y - tooltipHeight < 0){                                                                                   // 1265
				this.yAlign = "below";                                                                                            // 1266
			}                                                                                                                  // 1267
                                                                                                                      // 1268
                                                                                                                      // 1269
			var tooltipX = this.x - tooltipWidth/2,                                                                            // 1270
				tooltipY = this.y - tooltipHeight;                                                                                // 1271
                                                                                                                      // 1272
			ctx.fillStyle = this.fillColor;                                                                                    // 1273
                                                                                                                      // 1274
			switch(this.yAlign)                                                                                                // 1275
			{                                                                                                                  // 1276
			case "above":                                                                                                      // 1277
				//Draw a caret above the x/y                                                                                      // 1278
				ctx.beginPath();                                                                                                  // 1279
				ctx.moveTo(this.x,this.y - caretPadding);                                                                         // 1280
				ctx.lineTo(this.x + this.caretHeight, this.y - (caretPadding + this.caretHeight));                                // 1281
				ctx.lineTo(this.x - this.caretHeight, this.y - (caretPadding + this.caretHeight));                                // 1282
				ctx.closePath();                                                                                                  // 1283
				ctx.fill();                                                                                                       // 1284
				break;                                                                                                            // 1285
			case "below":                                                                                                      // 1286
				tooltipY = this.y + caretPadding + this.caretHeight;                                                              // 1287
				//Draw a caret below the x/y                                                                                      // 1288
				ctx.beginPath();                                                                                                  // 1289
				ctx.moveTo(this.x, this.y + caretPadding);                                                                        // 1290
				ctx.lineTo(this.x + this.caretHeight, this.y + caretPadding + this.caretHeight);                                  // 1291
				ctx.lineTo(this.x - this.caretHeight, this.y + caretPadding + this.caretHeight);                                  // 1292
				ctx.closePath();                                                                                                  // 1293
				ctx.fill();                                                                                                       // 1294
				break;                                                                                                            // 1295
			}                                                                                                                  // 1296
                                                                                                                      // 1297
			switch(this.xAlign)                                                                                                // 1298
			{                                                                                                                  // 1299
			case "left":                                                                                                       // 1300
				tooltipX = this.x - tooltipWidth + (this.cornerRadius + this.caretHeight);                                        // 1301
				break;                                                                                                            // 1302
			case "right":                                                                                                      // 1303
				tooltipX = this.x - (this.cornerRadius + this.caretHeight);                                                       // 1304
				break;                                                                                                            // 1305
			}                                                                                                                  // 1306
                                                                                                                      // 1307
			drawRoundedRectangle(ctx,tooltipX,tooltipY,tooltipWidth,tooltipRectHeight,this.cornerRadius);                      // 1308
                                                                                                                      // 1309
			ctx.fill();                                                                                                        // 1310
                                                                                                                      // 1311
			ctx.fillStyle = this.textColor;                                                                                    // 1312
			ctx.textAlign = "center";                                                                                          // 1313
			ctx.textBaseline = "middle";                                                                                       // 1314
			ctx.fillText(this.text, tooltipX + tooltipWidth/2, tooltipY + tooltipRectHeight/2);                                // 1315
		}                                                                                                                   // 1316
	});                                                                                                                  // 1317
                                                                                                                      // 1318
	Chart.MultiTooltip = Chart.Element.extend({                                                                          // 1319
		initialize : function(){                                                                                            // 1320
			this.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);                                              // 1321
                                                                                                                      // 1322
			this.titleFont = fontString(this.titleFontSize,this.titleFontStyle,this.titleFontFamily);                          // 1323
                                                                                                                      // 1324
			this.height = (this.labels.length * this.fontSize) + ((this.labels.length-1) * (this.fontSize/2)) + (this.yPadding*2) + this.titleFontSize *1.5;
                                                                                                                      // 1326
			this.ctx.font = this.titleFont;                                                                                    // 1327
                                                                                                                      // 1328
			var titleWidth = this.ctx.measureText(this.title).width,                                                           // 1329
				//Label has a legend square as well so account for this.                                                          // 1330
				labelWidth = longestText(this.ctx,this.font,this.labels) + this.fontSize + 3,                                     // 1331
				longestTextWidth = max([labelWidth,titleWidth]);                                                                  // 1332
                                                                                                                      // 1333
			this.width = longestTextWidth + (this.xPadding*2);                                                                 // 1334
                                                                                                                      // 1335
                                                                                                                      // 1336
			var halfHeight = this.height/2;                                                                                    // 1337
                                                                                                                      // 1338
			//Check to ensure the height will fit on the canvas                                                                // 1339
			//The three is to buffer form the very                                                                             // 1340
			if (this.y - halfHeight < 0 ){                                                                                     // 1341
				this.y = halfHeight;                                                                                              // 1342
			} else if (this.y + halfHeight > this.chart.height){                                                               // 1343
				this.y = this.chart.height - halfHeight;                                                                          // 1344
			}                                                                                                                  // 1345
                                                                                                                      // 1346
			//Decide whether to align left or right based on position on canvas                                                // 1347
			if (this.x > this.chart.width/2){                                                                                  // 1348
				this.x -= this.xOffset + this.width;                                                                              // 1349
			} else {                                                                                                           // 1350
				this.x += this.xOffset;                                                                                           // 1351
			}                                                                                                                  // 1352
                                                                                                                      // 1353
                                                                                                                      // 1354
		},                                                                                                                  // 1355
		getLineHeight : function(index){                                                                                    // 1356
			var baseLineHeight = this.y - (this.height/2) + this.yPadding,                                                     // 1357
				afterTitleIndex = index-1;                                                                                        // 1358
                                                                                                                      // 1359
			//If the index is zero, we're getting the title                                                                    // 1360
			if (index === 0){                                                                                                  // 1361
				return baseLineHeight + this.titleFontSize/2;                                                                     // 1362
			} else{                                                                                                            // 1363
				return baseLineHeight + ((this.fontSize*1.5*afterTitleIndex) + this.fontSize/2) + this.titleFontSize * 1.5;       // 1364
			}                                                                                                                  // 1365
                                                                                                                      // 1366
		},                                                                                                                  // 1367
		draw : function(){                                                                                                  // 1368
			drawRoundedRectangle(this.ctx,this.x,this.y - this.height/2,this.width,this.height,this.cornerRadius);             // 1369
			var ctx = this.ctx;                                                                                                // 1370
			ctx.fillStyle = this.fillColor;                                                                                    // 1371
			ctx.fill();                                                                                                        // 1372
			ctx.closePath();                                                                                                   // 1373
                                                                                                                      // 1374
			ctx.textAlign = "left";                                                                                            // 1375
			ctx.textBaseline = "middle";                                                                                       // 1376
			ctx.fillStyle = this.titleTextColor;                                                                               // 1377
			ctx.font = this.titleFont;                                                                                         // 1378
                                                                                                                      // 1379
			ctx.fillText(this.title,this.x + this.xPadding, this.getLineHeight(0));                                            // 1380
                                                                                                                      // 1381
			ctx.font = this.font;                                                                                              // 1382
			helpers.each(this.labels,function(label,index){                                                                    // 1383
				ctx.fillStyle = this.textColor;                                                                                   // 1384
				ctx.fillText(label,this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(index + 1));                    // 1385
                                                                                                                      // 1386
				//A bit gnarly, but clearing this rectangle breaks when using explorercanvas (clears whole canvas)                // 1387
				//ctx.clearRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);
				//Instead we'll make a white filled block to put the legendColour palette over.                                   // 1389
                                                                                                                      // 1390
				ctx.fillStyle = this.legendColorBackground;                                                                       // 1391
				ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);
                                                                                                                      // 1393
				ctx.fillStyle = this.legendColors[index].fill;                                                                    // 1394
				ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize/2, this.fontSize, this.fontSize);
                                                                                                                      // 1396
                                                                                                                      // 1397
			},this);                                                                                                           // 1398
		}                                                                                                                   // 1399
	});                                                                                                                  // 1400
                                                                                                                      // 1401
	Chart.Scale = Chart.Element.extend({                                                                                 // 1402
		initialize : function(){                                                                                            // 1403
			this.fit();                                                                                                        // 1404
		},                                                                                                                  // 1405
		buildYLabels : function(){                                                                                          // 1406
			this.yLabels = [];                                                                                                 // 1407
                                                                                                                      // 1408
			var stepDecimalPlaces = getDecimalPlaces(this.stepValue);                                                          // 1409
                                                                                                                      // 1410
			for (var i=0; i<=this.steps; i++){                                                                                 // 1411
				this.yLabels.push(template(this.templateString,{value:(this.min + (i * this.stepValue)).toFixed(stepDecimalPlaces)}));
			}                                                                                                                  // 1413
			this.yLabelWidth = (this.display && this.showLabels) ? longestText(this.ctx,this.font,this.yLabels) : 0;           // 1414
		},                                                                                                                  // 1415
		addXLabel : function(label){                                                                                        // 1416
			this.xLabels.push(label);                                                                                          // 1417
			this.valuesCount++;                                                                                                // 1418
			this.fit();                                                                                                        // 1419
		},                                                                                                                  // 1420
		removeXLabel : function(){                                                                                          // 1421
			this.xLabels.shift();                                                                                              // 1422
			this.valuesCount--;                                                                                                // 1423
			this.fit();                                                                                                        // 1424
		},                                                                                                                  // 1425
		// Fitting loop to rotate x Labels and figure out what fits there, and also calculate how many Y steps to use       // 1426
		fit: function(){                                                                                                    // 1427
			// First we need the width of the yLabels, assuming the xLabels aren't rotated                                     // 1428
                                                                                                                      // 1429
			// To do that we need the base line at the top and base of the chart, assuming there is no x label rotation        // 1430
			this.startPoint = (this.display) ? this.fontSize : 0;                                                              // 1431
			this.endPoint = (this.display) ? this.height - (this.fontSize * 1.5) - 5 : this.height; // -5 to pad labels        // 1432
                                                                                                                      // 1433
			// Apply padding settings to the start and end point.                                                              // 1434
			this.startPoint += this.padding;                                                                                   // 1435
			this.endPoint -= this.padding;                                                                                     // 1436
                                                                                                                      // 1437
			// Cache the starting height, so can determine if we need to recalculate the scale yAxis                           // 1438
			var cachedHeight = this.endPoint - this.startPoint,                                                                // 1439
				cachedYLabelWidth;                                                                                                // 1440
                                                                                                                      // 1441
			// Build the current yLabels so we have an idea of what size they'll be to start                                   // 1442
			/*                                                                                                                 // 1443
			 *	This sets what is returned from calculateScaleRange as static properties of this class:                         // 1444
			 *                                                                                                                 // 1445
				this.steps;                                                                                                       // 1446
				this.stepValue;                                                                                                   // 1447
				this.min;                                                                                                         // 1448
				this.max;                                                                                                         // 1449
			 *                                                                                                                 // 1450
			 */                                                                                                                // 1451
			this.calculateYRange(cachedHeight);                                                                                // 1452
                                                                                                                      // 1453
			// With these properties set we can now build the array of yLabels                                                 // 1454
			// and also the width of the largest yLabel                                                                        // 1455
			this.buildYLabels();                                                                                               // 1456
                                                                                                                      // 1457
			this.calculateXLabelRotation();                                                                                    // 1458
                                                                                                                      // 1459
			while((cachedHeight > this.endPoint - this.startPoint)){                                                           // 1460
				cachedHeight = this.endPoint - this.startPoint;                                                                   // 1461
				cachedYLabelWidth = this.yLabelWidth;                                                                             // 1462
                                                                                                                      // 1463
				this.calculateYRange(cachedHeight);                                                                               // 1464
				this.buildYLabels();                                                                                              // 1465
                                                                                                                      // 1466
				// Only go through the xLabel loop again if the yLabel width has changed                                          // 1467
				if (cachedYLabelWidth < this.yLabelWidth){                                                                        // 1468
					this.calculateXLabelRotation();                                                                                  // 1469
				}                                                                                                                 // 1470
			}                                                                                                                  // 1471
                                                                                                                      // 1472
		},                                                                                                                  // 1473
		calculateXLabelRotation : function(){                                                                               // 1474
			//Get the width of each grid by calculating the difference                                                         // 1475
			//between x offsets between 0 and 1.                                                                               // 1476
                                                                                                                      // 1477
			this.ctx.font = this.font;                                                                                         // 1478
                                                                                                                      // 1479
			var firstWidth = this.ctx.measureText(this.xLabels[0]).width,                                                      // 1480
				lastWidth = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width,                                    // 1481
				firstRotated,                                                                                                     // 1482
				lastRotated;                                                                                                      // 1483
                                                                                                                      // 1484
                                                                                                                      // 1485
			this.xScalePaddingRight = lastWidth/2 + 3;                                                                         // 1486
			this.xScalePaddingLeft = (firstWidth/2 > this.yLabelWidth + 10) ? firstWidth/2 : this.yLabelWidth + 10;            // 1487
                                                                                                                      // 1488
			this.xLabelRotation = 0;                                                                                           // 1489
			if (this.display){                                                                                                 // 1490
				var originalLabelWidth = longestText(this.ctx,this.font,this.xLabels),                                            // 1491
					cosRotation,                                                                                                     // 1492
					firstRotatedWidth;                                                                                               // 1493
				this.xLabelWidth = originalLabelWidth;                                                                            // 1494
				//Allow 3 pixels x2 padding either side for label readability                                                     // 1495
				var xGridWidth = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6;                                         // 1496
                                                                                                                      // 1497
				//Max label rotate should be 90 - also act as a loop counter                                                      // 1498
				while ((this.xLabelWidth > xGridWidth && this.xLabelRotation === 0) || (this.xLabelWidth > xGridWidth && this.xLabelRotation <= 90 && this.xLabelRotation > 0)){
					cosRotation = Math.cos(toRadians(this.xLabelRotation));                                                          // 1500
                                                                                                                      // 1501
					firstRotated = cosRotation * firstWidth;                                                                         // 1502
					lastRotated = cosRotation * lastWidth;                                                                           // 1503
                                                                                                                      // 1504
					// We're right aligning the text now.                                                                            // 1505
					if (firstRotated + this.fontSize / 2 > this.yLabelWidth + 8){                                                    // 1506
						this.xScalePaddingLeft = firstRotated + this.fontSize / 2;                                                      // 1507
					}                                                                                                                // 1508
					this.xScalePaddingRight = this.fontSize/2;                                                                       // 1509
                                                                                                                      // 1510
                                                                                                                      // 1511
					this.xLabelRotation++;                                                                                           // 1512
					this.xLabelWidth = cosRotation * originalLabelWidth;                                                             // 1513
                                                                                                                      // 1514
				}                                                                                                                 // 1515
				if (this.xLabelRotation > 0){                                                                                     // 1516
					this.endPoint -= Math.sin(toRadians(this.xLabelRotation))*originalLabelWidth + 3;                                // 1517
				}                                                                                                                 // 1518
			}                                                                                                                  // 1519
			else{                                                                                                              // 1520
				this.xLabelWidth = 0;                                                                                             // 1521
				this.xScalePaddingRight = this.padding;                                                                           // 1522
				this.xScalePaddingLeft = this.padding;                                                                            // 1523
			}                                                                                                                  // 1524
                                                                                                                      // 1525
		},                                                                                                                  // 1526
		// Needs to be overidden in each Chart type                                                                         // 1527
		// Otherwise we need to pass all the data into the scale class                                                      // 1528
		calculateYRange: noop,                                                                                              // 1529
		drawingArea: function(){                                                                                            // 1530
			return this.startPoint - this.endPoint;                                                                            // 1531
		},                                                                                                                  // 1532
		calculateY : function(value){                                                                                       // 1533
			var scalingFactor = this.drawingArea() / (this.min - this.max);                                                    // 1534
			return this.endPoint - (scalingFactor * (value - this.min));                                                       // 1535
		},                                                                                                                  // 1536
		calculateX : function(index){                                                                                       // 1537
			var isRotated = (this.xLabelRotation > 0),                                                                         // 1538
				// innerWidth = (this.offsetGridLines) ? this.width - offsetLeft - this.padding : this.width - (offsetLeft + halfLabelWidth * 2) - this.padding,
				innerWidth = this.width - (this.xScalePaddingLeft + this.xScalePaddingRight),                                     // 1540
				valueWidth = innerWidth/(this.valuesCount - ((this.offsetGridLines) ? 0 : 1)),                                    // 1541
				valueOffset = (valueWidth * index) + this.xScalePaddingLeft;                                                      // 1542
                                                                                                                      // 1543
			if (this.offsetGridLines){                                                                                         // 1544
				valueOffset += (valueWidth/2);                                                                                    // 1545
			}                                                                                                                  // 1546
                                                                                                                      // 1547
			return Math.round(valueOffset);                                                                                    // 1548
		},                                                                                                                  // 1549
		update : function(newProps){                                                                                        // 1550
			helpers.extend(this, newProps);                                                                                    // 1551
			this.fit();                                                                                                        // 1552
		},                                                                                                                  // 1553
		draw : function(){                                                                                                  // 1554
			var ctx = this.ctx,                                                                                                // 1555
				yLabelGap = (this.endPoint - this.startPoint) / this.steps,                                                       // 1556
				xStart = Math.round(this.xScalePaddingLeft);                                                                      // 1557
			if (this.display){                                                                                                 // 1558
				ctx.fillStyle = this.textColor;                                                                                   // 1559
				ctx.font = this.font;                                                                                             // 1560
				each(this.yLabels,function(labelString,index){                                                                    // 1561
					var yLabelCenter = this.endPoint - (yLabelGap * index),                                                          // 1562
						linePositionY = Math.round(yLabelCenter);                                                                       // 1563
                                                                                                                      // 1564
					ctx.textAlign = "right";                                                                                         // 1565
					ctx.textBaseline = "middle";                                                                                     // 1566
					if (this.showLabels){                                                                                            // 1567
						ctx.fillText(labelString,xStart - 10,yLabelCenter);                                                             // 1568
					}                                                                                                                // 1569
					ctx.beginPath();                                                                                                 // 1570
					if (index > 0){                                                                                                  // 1571
						// This is a grid line in the centre, so drop that                                                              // 1572
						ctx.lineWidth = this.gridLineWidth;                                                                             // 1573
						ctx.strokeStyle = this.gridLineColor;                                                                           // 1574
					} else {                                                                                                         // 1575
						// This is the first line on the scale                                                                          // 1576
						ctx.lineWidth = this.lineWidth;                                                                                 // 1577
						ctx.strokeStyle = this.lineColor;                                                                               // 1578
					}                                                                                                                // 1579
                                                                                                                      // 1580
					linePositionY += helpers.aliasPixel(ctx.lineWidth);                                                              // 1581
                                                                                                                      // 1582
					ctx.moveTo(xStart, linePositionY);                                                                               // 1583
					ctx.lineTo(this.width, linePositionY);                                                                           // 1584
					ctx.stroke();                                                                                                    // 1585
					ctx.closePath();                                                                                                 // 1586
                                                                                                                      // 1587
					ctx.lineWidth = this.lineWidth;                                                                                  // 1588
					ctx.strokeStyle = this.lineColor;                                                                                // 1589
					ctx.beginPath();                                                                                                 // 1590
					ctx.moveTo(xStart - 5, linePositionY);                                                                           // 1591
					ctx.lineTo(xStart, linePositionY);                                                                               // 1592
					ctx.stroke();                                                                                                    // 1593
					ctx.closePath();                                                                                                 // 1594
                                                                                                                      // 1595
				},this);                                                                                                          // 1596
                                                                                                                      // 1597
				each(this.xLabels,function(label,index){                                                                          // 1598
					var xPos = this.calculateX(index) + aliasPixel(this.lineWidth),                                                  // 1599
						// Check to see if line/bar here and decide where to place the line                                             // 1600
						linePos = this.calculateX(index - (this.offsetGridLines ? 0.5 : 0)) + aliasPixel(this.lineWidth),               // 1601
						isRotated = (this.xLabelRotation > 0);                                                                          // 1602
                                                                                                                      // 1603
					ctx.beginPath();                                                                                                 // 1604
                                                                                                                      // 1605
					if (index > 0){                                                                                                  // 1606
						// This is a grid line in the centre, so drop that                                                              // 1607
						ctx.lineWidth = this.gridLineWidth;                                                                             // 1608
						ctx.strokeStyle = this.gridLineColor;                                                                           // 1609
					} else {                                                                                                         // 1610
						// This is the first line on the scale                                                                          // 1611
						ctx.lineWidth = this.lineWidth;                                                                                 // 1612
						ctx.strokeStyle = this.lineColor;                                                                               // 1613
					}                                                                                                                // 1614
					ctx.moveTo(linePos,this.endPoint);                                                                               // 1615
					ctx.lineTo(linePos,this.startPoint - 3);                                                                         // 1616
					ctx.stroke();                                                                                                    // 1617
					ctx.closePath();                                                                                                 // 1618
                                                                                                                      // 1619
                                                                                                                      // 1620
					ctx.lineWidth = this.lineWidth;                                                                                  // 1621
					ctx.strokeStyle = this.lineColor;                                                                                // 1622
                                                                                                                      // 1623
                                                                                                                      // 1624
					// Small lines at the bottom of the base grid line                                                               // 1625
					ctx.beginPath();                                                                                                 // 1626
					ctx.moveTo(linePos,this.endPoint);                                                                               // 1627
					ctx.lineTo(linePos,this.endPoint + 5);                                                                           // 1628
					ctx.stroke();                                                                                                    // 1629
					ctx.closePath();                                                                                                 // 1630
                                                                                                                      // 1631
					ctx.save();                                                                                                      // 1632
					ctx.translate(xPos,(isRotated) ? this.endPoint + 12 : this.endPoint + 8);                                        // 1633
					ctx.rotate(toRadians(this.xLabelRotation)*-1);                                                                   // 1634
					ctx.font = this.font;                                                                                            // 1635
					ctx.textAlign = (isRotated) ? "right" : "center";                                                                // 1636
					ctx.textBaseline = (isRotated) ? "middle" : "top";                                                               // 1637
					ctx.fillText(label, 0, 0);                                                                                       // 1638
					ctx.restore();                                                                                                   // 1639
				},this);                                                                                                          // 1640
                                                                                                                      // 1641
			}                                                                                                                  // 1642
		}                                                                                                                   // 1643
                                                                                                                      // 1644
	});                                                                                                                  // 1645
                                                                                                                      // 1646
	Chart.RadialScale = Chart.Element.extend({                                                                           // 1647
		initialize: function(){                                                                                             // 1648
			this.size = min([this.height, this.width]);                                                                        // 1649
			this.drawingArea = (this.display) ? (this.size/2) - (this.fontSize/2 + this.backdropPaddingY) : (this.size/2);     // 1650
		},                                                                                                                  // 1651
		calculateCenterOffset: function(value){                                                                             // 1652
			// Take into account half font size + the yPadding of the top value                                                // 1653
			var scalingFactor = this.drawingArea / (this.max - this.min);                                                      // 1654
                                                                                                                      // 1655
			return (value - this.min) * scalingFactor;                                                                         // 1656
		},                                                                                                                  // 1657
		update : function(){                                                                                                // 1658
			if (!this.lineArc){                                                                                                // 1659
				this.setScaleSize();                                                                                              // 1660
			} else {                                                                                                           // 1661
				this.drawingArea = (this.display) ? (this.size/2) - (this.fontSize/2 + this.backdropPaddingY) : (this.size/2);    // 1662
			}                                                                                                                  // 1663
			this.buildYLabels();                                                                                               // 1664
		},                                                                                                                  // 1665
		buildYLabels: function(){                                                                                           // 1666
			this.yLabels = [];                                                                                                 // 1667
                                                                                                                      // 1668
			var stepDecimalPlaces = getDecimalPlaces(this.stepValue);                                                          // 1669
                                                                                                                      // 1670
			for (var i=0; i<=this.steps; i++){                                                                                 // 1671
				this.yLabels.push(template(this.templateString,{value:(this.min + (i * this.stepValue)).toFixed(stepDecimalPlaces)}));
			}                                                                                                                  // 1673
		},                                                                                                                  // 1674
		getCircumference : function(){                                                                                      // 1675
			return ((Math.PI*2) / this.valuesCount);                                                                           // 1676
		},                                                                                                                  // 1677
		setScaleSize: function(){                                                                                           // 1678
			/*                                                                                                                 // 1679
			 * Right, this is really confusing and there is a lot of maths going on here                                       // 1680
			 * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9                            // 1681
			 *                                                                                                                 // 1682
			 * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif                                       // 1683
			 *                                                                                                                 // 1684
			 * Solution:                                                                                                       // 1685
			 *                                                                                                                 // 1686
			 * We assume the radius of the polygon is half the size of the canvas at first                                     // 1687
			 * at each index we check if the text overlaps.                                                                    // 1688
			 *                                                                                                                 // 1689
			 * Where it does, we store that angle and that index.                                                              // 1690
			 *                                                                                                                 // 1691
			 * After finding the largest index and angle we calculate how much we need to remove                               // 1692
			 * from the shape radius to move the point inwards by that x.                                                      // 1693
			 *                                                                                                                 // 1694
			 * We average the left and right distances to get the maximum shape radius that can fit in the box                 // 1695
			 * along with labels.                                                                                              // 1696
			 *                                                                                                                 // 1697
			 * Once we have that, we can find the centre point for the chart, by taking the x text protrusion                  // 1698
			 * on each side, removing that from the size, halving it and adding the left x protrusion width.                   // 1699
			 *                                                                                                                 // 1700
			 * This will mean we have a shape fitted to the canvas, as large as it can be with the labels                      // 1701
			 * and position it in the most space efficient manner                                                              // 1702
			 *                                                                                                                 // 1703
			 * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif                                                    // 1704
			 */                                                                                                                // 1705
                                                                                                                      // 1706
                                                                                                                      // 1707
			// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.             // 1708
			// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
			var largestPossibleRadius = min([(this.height/2 - this.pointLabelFontSize - 5), this.width/2]),                    // 1710
				pointPosition,                                                                                                    // 1711
				i,                                                                                                                // 1712
				textWidth,                                                                                                        // 1713
				halfTextWidth,                                                                                                    // 1714
				furthestRight = this.width,                                                                                       // 1715
				furthestRightIndex,                                                                                               // 1716
				furthestRightAngle,                                                                                               // 1717
				furthestLeft = 0,                                                                                                 // 1718
				furthestLeftIndex,                                                                                                // 1719
				furthestLeftAngle,                                                                                                // 1720
				xProtrusionLeft,                                                                                                  // 1721
				xProtrusionRight,                                                                                                 // 1722
				radiusReductionRight,                                                                                             // 1723
				radiusReductionLeft,                                                                                              // 1724
				maxWidthRadius;                                                                                                   // 1725
			this.ctx.font = fontString(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);            // 1726
			for (i=0;i<this.valuesCount;i++){                                                                                  // 1727
				// 5px to space the text slightly out - similar to what we do in the draw function.                               // 1728
				pointPosition = this.getPointPosition(i, largestPossibleRadius);                                                  // 1729
				textWidth = this.ctx.measureText(template(this.templateString, { value: this.labels[i] })).width + 5;             // 1730
				if (i === 0 || i === this.valuesCount/2){                                                                         // 1731
					// If we're at index zero, or exactly the middle, we're at exactly the top/bottom                                // 1732
					// of the radar chart, so text will be aligned centrally, so we'll half it and compare                           // 1733
					// w/left and right text sizes                                                                                   // 1734
					halfTextWidth = textWidth/2;                                                                                     // 1735
					if (pointPosition.x + halfTextWidth > furthestRight) {                                                           // 1736
						furthestRight = pointPosition.x + halfTextWidth;                                                                // 1737
						furthestRightIndex = i;                                                                                         // 1738
					}                                                                                                                // 1739
					if (pointPosition.x - halfTextWidth < furthestLeft) {                                                            // 1740
						furthestLeft = pointPosition.x - halfTextWidth;                                                                 // 1741
						furthestLeftIndex = i;                                                                                          // 1742
					}                                                                                                                // 1743
				}                                                                                                                 // 1744
				else if (i < this.valuesCount/2) {                                                                                // 1745
					// Less than half the values means we'll left align the text                                                     // 1746
					if (pointPosition.x + textWidth > furthestRight) {                                                               // 1747
						furthestRight = pointPosition.x + textWidth;                                                                    // 1748
						furthestRightIndex = i;                                                                                         // 1749
					}                                                                                                                // 1750
				}                                                                                                                 // 1751
				else if (i > this.valuesCount/2){                                                                                 // 1752
					// More than half the values means we'll right align the text                                                    // 1753
					if (pointPosition.x - textWidth < furthestLeft) {                                                                // 1754
						furthestLeft = pointPosition.x - textWidth;                                                                     // 1755
						furthestLeftIndex = i;                                                                                          // 1756
					}                                                                                                                // 1757
				}                                                                                                                 // 1758
			}                                                                                                                  // 1759
                                                                                                                      // 1760
			xProtrusionLeft = furthestLeft;                                                                                    // 1761
                                                                                                                      // 1762
			xProtrusionRight = Math.ceil(furthestRight - this.width);                                                          // 1763
                                                                                                                      // 1764
			furthestRightAngle = this.getIndexAngle(furthestRightIndex);                                                       // 1765
                                                                                                                      // 1766
			furthestLeftAngle = this.getIndexAngle(furthestLeftIndex);                                                         // 1767
                                                                                                                      // 1768
			radiusReductionRight = xProtrusionRight / Math.sin(furthestRightAngle + Math.PI/2);                                // 1769
                                                                                                                      // 1770
			radiusReductionLeft = xProtrusionLeft / Math.sin(furthestLeftAngle + Math.PI/2);                                   // 1771
                                                                                                                      // 1772
			// Ensure we actually need to reduce the size of the chart                                                         // 1773
			radiusReductionRight = (isNumber(radiusReductionRight)) ? radiusReductionRight : 0;                                // 1774
			radiusReductionLeft = (isNumber(radiusReductionLeft)) ? radiusReductionLeft : 0;                                   // 1775
                                                                                                                      // 1776
			this.drawingArea = largestPossibleRadius - (radiusReductionLeft + radiusReductionRight)/2;                         // 1777
                                                                                                                      // 1778
			//this.drawingArea = min([maxWidthRadius, (this.height - (2 * (this.pointLabelFontSize + 5)))/2])                  // 1779
			this.setCenterPoint(radiusReductionLeft, radiusReductionRight);                                                    // 1780
                                                                                                                      // 1781
		},                                                                                                                  // 1782
		setCenterPoint: function(leftMovement, rightMovement){                                                              // 1783
                                                                                                                      // 1784
			var maxRight = this.width - rightMovement - this.drawingArea,                                                      // 1785
				maxLeft = leftMovement + this.drawingArea;                                                                        // 1786
                                                                                                                      // 1787
			this.xCenter = (maxLeft + maxRight)/2;                                                                             // 1788
			// Always vertically in the centre as the text height doesn't change                                               // 1789
			this.yCenter = (this.height/2);                                                                                    // 1790
		},                                                                                                                  // 1791
                                                                                                                      // 1792
		getIndexAngle : function(index){                                                                                    // 1793
			var angleMultiplier = (Math.PI * 2) / this.valuesCount;                                                            // 1794
			// Start from the top instead of right, so remove a quarter of the circle                                          // 1795
                                                                                                                      // 1796
			return index * angleMultiplier - (Math.PI/2);                                                                      // 1797
		},                                                                                                                  // 1798
		getPointPosition : function(index, distanceFromCenter){                                                             // 1799
			var thisAngle = this.getIndexAngle(index);                                                                         // 1800
			return {                                                                                                           // 1801
				x : (Math.cos(thisAngle) * distanceFromCenter) + this.xCenter,                                                    // 1802
				y : (Math.sin(thisAngle) * distanceFromCenter) + this.yCenter                                                     // 1803
			};                                                                                                                 // 1804
		},                                                                                                                  // 1805
		draw: function(){                                                                                                   // 1806
			if (this.display){                                                                                                 // 1807
				var ctx = this.ctx;                                                                                               // 1808
				each(this.yLabels, function(label, index){                                                                        // 1809
					// Don't draw a centre value                                                                                     // 1810
					if (index > 0){                                                                                                  // 1811
						var yCenterOffset = index * (this.drawingArea/this.steps),                                                      // 1812
							yHeight = this.yCenter - yCenterOffset,                                                                        // 1813
							pointPosition;                                                                                                 // 1814
                                                                                                                      // 1815
						// Draw circular lines around the scale                                                                         // 1816
						if (this.lineWidth > 0){                                                                                        // 1817
							ctx.strokeStyle = this.lineColor;                                                                              // 1818
							ctx.lineWidth = this.lineWidth;                                                                                // 1819
                                                                                                                      // 1820
							if(this.lineArc){                                                                                              // 1821
								ctx.beginPath();                                                                                              // 1822
								ctx.arc(this.xCenter, this.yCenter, yCenterOffset, 0, Math.PI*2);                                             // 1823
								ctx.closePath();                                                                                              // 1824
								ctx.stroke();                                                                                                 // 1825
							} else{                                                                                                        // 1826
								ctx.beginPath();                                                                                              // 1827
								for (var i=0;i<this.valuesCount;i++)                                                                          // 1828
								{                                                                                                             // 1829
									pointPosition = this.getPointPosition(i, this.calculateCenterOffset(this.min + (index * this.stepValue)));   // 1830
									if (i === 0){                                                                                                // 1831
										ctx.moveTo(pointPosition.x, pointPosition.y);                                                               // 1832
									} else {                                                                                                     // 1833
										ctx.lineTo(pointPosition.x, pointPosition.y);                                                               // 1834
									}                                                                                                            // 1835
								}                                                                                                             // 1836
								ctx.closePath();                                                                                              // 1837
								ctx.stroke();                                                                                                 // 1838
							}                                                                                                              // 1839
						}                                                                                                               // 1840
						if(this.showLabels){                                                                                            // 1841
							ctx.font = fontString(this.fontSize,this.fontStyle,this.fontFamily);                                           // 1842
							if (this.showLabelBackdrop){                                                                                   // 1843
								var labelWidth = ctx.measureText(label).width;                                                                // 1844
								ctx.fillStyle = this.backdropColor;                                                                           // 1845
								ctx.fillRect(                                                                                                 // 1846
									this.xCenter - labelWidth/2 - this.backdropPaddingX,                                                         // 1847
									yHeight - this.fontSize/2 - this.backdropPaddingY,                                                           // 1848
									labelWidth + this.backdropPaddingX*2,                                                                        // 1849
									this.fontSize + this.backdropPaddingY*2                                                                      // 1850
								);                                                                                                            // 1851
							}                                                                                                              // 1852
							ctx.textAlign = 'center';                                                                                      // 1853
							ctx.textBaseline = "middle";                                                                                   // 1854
							ctx.fillStyle = this.fontColor;                                                                                // 1855
							ctx.fillText(label, this.xCenter, yHeight);                                                                    // 1856
						}                                                                                                               // 1857
					}                                                                                                                // 1858
				}, this);                                                                                                         // 1859
                                                                                                                      // 1860
				if (!this.lineArc){                                                                                               // 1861
					ctx.lineWidth = this.angleLineWidth;                                                                             // 1862
					ctx.strokeStyle = this.angleLineColor;                                                                           // 1863
					for (var i = this.valuesCount - 1; i >= 0; i--) {                                                                // 1864
						if (this.angleLineWidth > 0){                                                                                   // 1865
							var outerPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max));                            // 1866
							ctx.beginPath();                                                                                               // 1867
							ctx.moveTo(this.xCenter, this.yCenter);                                                                        // 1868
							ctx.lineTo(outerPosition.x, outerPosition.y);                                                                  // 1869
							ctx.stroke();                                                                                                  // 1870
							ctx.closePath();                                                                                               // 1871
						}                                                                                                               // 1872
						// Extra 3px out for some label spacing                                                                         // 1873
						var pointLabelPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max) + 5);                    // 1874
						ctx.font = fontString(this.pointLabelFontSize,this.pointLabelFontStyle,this.pointLabelFontFamily);              // 1875
						ctx.fillStyle = this.pointLabelFontColor;                                                                       // 1876
                                                                                                                      // 1877
						var labelsCount = this.labels.length,                                                                           // 1878
							halfLabelsCount = this.labels.length/2,                                                                        // 1879
							quarterLabelsCount = halfLabelsCount/2,                                                                        // 1880
							upperHalf = (i < quarterLabelsCount || i > labelsCount - quarterLabelsCount),                                  // 1881
							exactQuarter = (i === quarterLabelsCount || i === labelsCount - quarterLabelsCount);                           // 1882
						if (i === 0){                                                                                                   // 1883
							ctx.textAlign = 'center';                                                                                      // 1884
						} else if(i === halfLabelsCount){                                                                               // 1885
							ctx.textAlign = 'center';                                                                                      // 1886
						} else if (i < halfLabelsCount){                                                                                // 1887
							ctx.textAlign = 'left';                                                                                        // 1888
						} else {                                                                                                        // 1889
							ctx.textAlign = 'right';                                                                                       // 1890
						}                                                                                                               // 1891
                                                                                                                      // 1892
						// Set the correct text baseline based on outer positioning                                                     // 1893
						if (exactQuarter){                                                                                              // 1894
							ctx.textBaseline = 'middle';                                                                                   // 1895
						} else if (upperHalf){                                                                                          // 1896
							ctx.textBaseline = 'bottom';                                                                                   // 1897
						} else {                                                                                                        // 1898
							ctx.textBaseline = 'top';                                                                                      // 1899
						}                                                                                                               // 1900
                                                                                                                      // 1901
						ctx.fillText(this.labels[i], pointLabelPosition.x, pointLabelPosition.y);                                       // 1902
					}                                                                                                                // 1903
				}                                                                                                                 // 1904
			}                                                                                                                  // 1905
		}                                                                                                                   // 1906
	});                                                                                                                  // 1907
                                                                                                                      // 1908
	// Attach global event to resize each chart instance when the browser resizes                                        // 1909
	helpers.addEvent(window, "resize", (function(){                                                                      // 1910
		// Basic debounce of resize function so it doesn't hurt performance when resizing browser.                          // 1911
		var timeout;                                                                                                        // 1912
		return function(){                                                                                                  // 1913
			clearTimeout(timeout);                                                                                             // 1914
			timeout = setTimeout(function(){                                                                                   // 1915
				each(Chart.instances,function(instance){                                                                          // 1916
					// If the responsive flag is set in the chart instance config                                                    // 1917
					// Cascade the resize event down to the chart.                                                                   // 1918
					if (instance.options.responsive){                                                                                // 1919
						instance.resize(instance.render, true);                                                                         // 1920
					}                                                                                                                // 1921
				});                                                                                                               // 1922
			}, 50);                                                                                                            // 1923
		};                                                                                                                  // 1924
	})());                                                                                                               // 1925
                                                                                                                      // 1926
                                                                                                                      // 1927
	if (amd) {                                                                                                           // 1928
		define(function(){                                                                                                  // 1929
			return Chart;                                                                                                      // 1930
		});                                                                                                                 // 1931
	} else if (typeof module === 'object' && module.exports) {                                                           // 1932
		module.exports = Chart;                                                                                             // 1933
	}                                                                                                                    // 1934
                                                                                                                      // 1935
	root.Chart = Chart;                                                                                                  // 1936
                                                                                                                      // 1937
	Chart.noConflict = function(){                                                                                       // 1938
		root.Chart = previous;                                                                                              // 1939
		return Chart;                                                                                                       // 1940
	};                                                                                                                   // 1941
                                                                                                                      // 1942
}).call(this);                                                                                                        // 1943
                                                                                                                      // 1944
(function(){                                                                                                          // 1945
	"use strict";                                                                                                        // 1946
                                                                                                                      // 1947
	var root = this,                                                                                                     // 1948
		Chart = root.Chart,                                                                                                 // 1949
		helpers = Chart.helpers;                                                                                            // 1950
                                                                                                                      // 1951
                                                                                                                      // 1952
	var defaultConfig = {                                                                                                // 1953
		//Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value             // 1954
		scaleBeginAtZero : true,                                                                                            // 1955
                                                                                                                      // 1956
		//Boolean - Whether grid lines are shown across the chart                                                           // 1957
		scaleShowGridLines : true,                                                                                          // 1958
                                                                                                                      // 1959
		//String - Colour of the grid lines                                                                                 // 1960
		scaleGridLineColor : "rgba(0,0,0,.05)",                                                                             // 1961
                                                                                                                      // 1962
		//Number - Width of the grid lines                                                                                  // 1963
		scaleGridLineWidth : 1,                                                                                             // 1964
                                                                                                                      // 1965
		//Boolean - If there is a stroke on each bar                                                                        // 1966
		barShowStroke : true,                                                                                               // 1967
                                                                                                                      // 1968
		//Number - Pixel width of the bar stroke                                                                            // 1969
		barStrokeWidth : 2,                                                                                                 // 1970
                                                                                                                      // 1971
		//Number - Spacing between each of the X value sets                                                                 // 1972
		barValueSpacing : 5,                                                                                                // 1973
                                                                                                                      // 1974
		//Number - Spacing between data sets within X values                                                                // 1975
		barDatasetSpacing : 1,                                                                                              // 1976
                                                                                                                      // 1977
		//String - A legend template                                                                                        // 1978
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
                                                                                                                      // 1980
	};                                                                                                                   // 1981
                                                                                                                      // 1982
                                                                                                                      // 1983
	Chart.Type.extend({                                                                                                  // 1984
		name: "Bar",                                                                                                        // 1985
		defaults : defaultConfig,                                                                                           // 1986
		initialize:  function(data){                                                                                        // 1987
                                                                                                                      // 1988
			//Expose options as a scope variable here so we can access it in the ScaleClass                                    // 1989
			var options = this.options;                                                                                        // 1990
                                                                                                                      // 1991
			this.ScaleClass = Chart.Scale.extend({                                                                             // 1992
				offsetGridLines : true,                                                                                           // 1993
				calculateBarX : function(datasetCount, datasetIndex, barIndex){                                                   // 1994
					//Reusable method for calculating the xPosition of a given bar based on datasetIndex & width of the bar          // 1995
					var xWidth = this.calculateBaseWidth(),                                                                          // 1996
						xAbsolute = this.calculateX(barIndex) - (xWidth/2),                                                             // 1997
						barWidth = this.calculateBarWidth(datasetCount);                                                                // 1998
                                                                                                                      // 1999
					return xAbsolute + (barWidth * datasetIndex) + (datasetIndex * options.barDatasetSpacing) + barWidth/2;          // 2000
				},                                                                                                                // 2001
				calculateBaseWidth : function(){                                                                                  // 2002
					return (this.calculateX(1) - this.calculateX(0)) - (2*options.barValueSpacing);                                  // 2003
				},                                                                                                                // 2004
				calculateBarWidth : function(datasetCount){                                                                       // 2005
					//The padding between datasets is to the right of each bar, providing that there are more than 1 dataset         // 2006
					var baseWidth = this.calculateBaseWidth() - ((datasetCount - 1) * options.barDatasetSpacing);                    // 2007
                                                                                                                      // 2008
					return (baseWidth / datasetCount);                                                                               // 2009
				}                                                                                                                 // 2010
			});                                                                                                                // 2011
                                                                                                                      // 2012
			this.datasets = [];                                                                                                // 2013
                                                                                                                      // 2014
			//Set up tooltip events on the chart                                                                               // 2015
			if (this.options.showTooltips){                                                                                    // 2016
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){                                               // 2017
					var activeBars = (evt.type !== 'mouseout') ? this.getBarsAtEvent(evt) : [];                                      // 2018
                                                                                                                      // 2019
					this.eachBars(function(bar){                                                                                     // 2020
						bar.restore(['fillColor', 'strokeColor']);                                                                      // 2021
					});                                                                                                              // 2022
					helpers.each(activeBars, function(activeBar){                                                                    // 2023
						activeBar.fillColor = activeBar.highlightFill;                                                                  // 2024
						activeBar.strokeColor = activeBar.highlightStroke;                                                              // 2025
					});                                                                                                              // 2026
					this.showTooltip(activeBars);                                                                                    // 2027
				});                                                                                                               // 2028
			}                                                                                                                  // 2029
                                                                                                                      // 2030
			//Declare the extension of the default point, to cater for the options passed in to the constructor                // 2031
			this.BarClass = Chart.Rectangle.extend({                                                                           // 2032
				strokeWidth : this.options.barStrokeWidth,                                                                        // 2033
				showStroke : this.options.barShowStroke,                                                                          // 2034
				ctx : this.chart.ctx                                                                                              // 2035
			});                                                                                                                // 2036
                                                                                                                      // 2037
			//Iterate through each of the datasets, and build this into a property of the chart                                // 2038
			helpers.each(data.datasets,function(dataset,datasetIndex){                                                         // 2039
                                                                                                                      // 2040
				var datasetObject = {                                                                                             // 2041
					label : dataset.label || null,                                                                                   // 2042
					fillColor : dataset.fillColor,                                                                                   // 2043
					strokeColor : dataset.strokeColor,                                                                               // 2044
					bars : []                                                                                                        // 2045
				};                                                                                                                // 2046
                                                                                                                      // 2047
				this.datasets.push(datasetObject);                                                                                // 2048
                                                                                                                      // 2049
				helpers.each(dataset.data,function(dataPoint,index){                                                              // 2050
					//Add a new point for each piece of data, passing any required data to draw.                                     // 2051
					datasetObject.bars.push(new this.BarClass({                                                                      // 2052
						value : dataPoint,                                                                                              // 2053
						label : data.labels[index],                                                                                     // 2054
						datasetLabel: dataset.label,                                                                                    // 2055
						strokeColor : dataset.strokeColor,                                                                              // 2056
						fillColor : dataset.fillColor,                                                                                  // 2057
						highlightFill : dataset.highlightFill || dataset.fillColor,                                                     // 2058
						highlightStroke : dataset.highlightStroke || dataset.strokeColor                                                // 2059
					}));                                                                                                             // 2060
				},this);                                                                                                          // 2061
                                                                                                                      // 2062
			},this);                                                                                                           // 2063
                                                                                                                      // 2064
			this.buildScale(data.labels);                                                                                      // 2065
                                                                                                                      // 2066
			this.BarClass.prototype.base = this.scale.endPoint;                                                                // 2067
                                                                                                                      // 2068
			this.eachBars(function(bar, index, datasetIndex){                                                                  // 2069
				helpers.extend(bar, {                                                                                             // 2070
					width : this.scale.calculateBarWidth(this.datasets.length),                                                      // 2071
					x: this.scale.calculateBarX(this.datasets.length, datasetIndex, index),                                          // 2072
					y: this.scale.endPoint                                                                                           // 2073
				});                                                                                                               // 2074
				bar.save();                                                                                                       // 2075
			}, this);                                                                                                          // 2076
                                                                                                                      // 2077
			this.render();                                                                                                     // 2078
		},                                                                                                                  // 2079
		update : function(){                                                                                                // 2080
			this.scale.update();                                                                                               // 2081
			// Reset any highlight colours before updating.                                                                    // 2082
			helpers.each(this.activeElements, function(activeElement){                                                         // 2083
				activeElement.restore(['fillColor', 'strokeColor']);                                                              // 2084
			});                                                                                                                // 2085
                                                                                                                      // 2086
			this.eachBars(function(bar){                                                                                       // 2087
				bar.save();                                                                                                       // 2088
			});                                                                                                                // 2089
			this.render();                                                                                                     // 2090
		},                                                                                                                  // 2091
		eachBars : function(callback){                                                                                      // 2092
			helpers.each(this.datasets,function(dataset, datasetIndex){                                                        // 2093
				helpers.each(dataset.bars, callback, this, datasetIndex);                                                         // 2094
			},this);                                                                                                           // 2095
		},                                                                                                                  // 2096
		getBarsAtEvent : function(e){                                                                                       // 2097
			var barsArray = [],                                                                                                // 2098
				eventPosition = helpers.getRelativePosition(e),                                                                   // 2099
				datasetIterator = function(dataset){                                                                              // 2100
					barsArray.push(dataset.bars[barIndex]);                                                                          // 2101
				},                                                                                                                // 2102
				barIndex;                                                                                                         // 2103
                                                                                                                      // 2104
			for (var datasetIndex = 0; datasetIndex < this.datasets.length; datasetIndex++) {                                  // 2105
				for (barIndex = 0; barIndex < this.datasets[datasetIndex].bars.length; barIndex++) {                              // 2106
					if (this.datasets[datasetIndex].bars[barIndex].inRange(eventPosition.x,eventPosition.y)){                        // 2107
						helpers.each(this.datasets, datasetIterator);                                                                   // 2108
						return barsArray;                                                                                               // 2109
					}                                                                                                                // 2110
				}                                                                                                                 // 2111
			}                                                                                                                  // 2112
                                                                                                                      // 2113
			return barsArray;                                                                                                  // 2114
		},                                                                                                                  // 2115
		buildScale : function(labels){                                                                                      // 2116
			var self = this;                                                                                                   // 2117
                                                                                                                      // 2118
			var dataTotal = function(){                                                                                        // 2119
				var values = [];                                                                                                  // 2120
				self.eachBars(function(bar){                                                                                      // 2121
					values.push(bar.value);                                                                                          // 2122
				});                                                                                                               // 2123
				return values;                                                                                                    // 2124
			};                                                                                                                 // 2125
                                                                                                                      // 2126
			var scaleOptions = {                                                                                               // 2127
				templateString : this.options.scaleLabel,                                                                         // 2128
				height : this.chart.height,                                                                                       // 2129
				width : this.chart.width,                                                                                         // 2130
				ctx : this.chart.ctx,                                                                                             // 2131
				textColor : this.options.scaleFontColor,                                                                          // 2132
				fontSize : this.options.scaleFontSize,                                                                            // 2133
				fontStyle : this.options.scaleFontStyle,                                                                          // 2134
				fontFamily : this.options.scaleFontFamily,                                                                        // 2135
				valuesCount : labels.length,                                                                                      // 2136
				beginAtZero : this.options.scaleBeginAtZero,                                                                      // 2137
				integersOnly : this.options.scaleIntegersOnly,                                                                    // 2138
				calculateYRange: function(currentHeight){                                                                         // 2139
					var updatedRanges = helpers.calculateScaleRange(                                                                 // 2140
						dataTotal(),                                                                                                    // 2141
						currentHeight,                                                                                                  // 2142
						this.fontSize,                                                                                                  // 2143
						this.beginAtZero,                                                                                               // 2144
						this.integersOnly                                                                                               // 2145
					);                                                                                                               // 2146
					helpers.extend(this, updatedRanges);                                                                             // 2147
				},                                                                                                                // 2148
				xLabels : labels,                                                                                                 // 2149
				font : helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily), // 2150
				lineWidth : this.options.scaleLineWidth,                                                                          // 2151
				lineColor : this.options.scaleLineColor,                                                                          // 2152
				gridLineWidth : (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,                          // 2153
				gridLineColor : (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",            // 2154
				padding : (this.options.showScale) ? 0 : (this.options.barShowStroke) ? this.options.barStrokeWidth : 0,          // 2155
				showLabels : this.options.scaleShowLabels,                                                                        // 2156
				display : this.options.showScale                                                                                  // 2157
			};                                                                                                                 // 2158
                                                                                                                      // 2159
			if (this.options.scaleOverride){                                                                                   // 2160
				helpers.extend(scaleOptions, {                                                                                    // 2161
					calculateYRange: helpers.noop,                                                                                   // 2162
					steps: this.options.scaleSteps,                                                                                  // 2163
					stepValue: this.options.scaleStepWidth,                                                                          // 2164
					min: this.options.scaleStartValue,                                                                               // 2165
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)                      // 2166
				});                                                                                                               // 2167
			}                                                                                                                  // 2168
                                                                                                                      // 2169
			this.scale = new this.ScaleClass(scaleOptions);                                                                    // 2170
		},                                                                                                                  // 2171
		addData : function(valuesArray,label){                                                                              // 2172
			//Map the values array for each of the datasets                                                                    // 2173
			helpers.each(valuesArray,function(value,datasetIndex){                                                             // 2174
				//Add a new point for each piece of data, passing any required data to draw.                                      // 2175
				this.datasets[datasetIndex].bars.push(new this.BarClass({                                                         // 2176
					value : value,                                                                                                   // 2177
					label : label,                                                                                                   // 2178
					x: this.scale.calculateBarX(this.datasets.length, datasetIndex, this.scale.valuesCount+1),                       // 2179
					y: this.scale.endPoint,                                                                                          // 2180
					width : this.scale.calculateBarWidth(this.datasets.length),                                                      // 2181
					base : this.scale.endPoint,                                                                                      // 2182
					strokeColor : this.datasets[datasetIndex].strokeColor,                                                           // 2183
					fillColor : this.datasets[datasetIndex].fillColor                                                                // 2184
				}));                                                                                                              // 2185
			},this);                                                                                                           // 2186
                                                                                                                      // 2187
			this.scale.addXLabel(label);                                                                                       // 2188
			//Then re-render the chart.                                                                                        // 2189
			this.update();                                                                                                     // 2190
		},                                                                                                                  // 2191
		removeData : function(){                                                                                            // 2192
			this.scale.removeXLabel();                                                                                         // 2193
			//Then re-render the chart.                                                                                        // 2194
			helpers.each(this.datasets,function(dataset){                                                                      // 2195
				dataset.bars.shift();                                                                                             // 2196
			},this);                                                                                                           // 2197
			this.update();                                                                                                     // 2198
		},                                                                                                                  // 2199
		reflow : function(){                                                                                                // 2200
			helpers.extend(this.BarClass.prototype,{                                                                           // 2201
				y: this.scale.endPoint,                                                                                           // 2202
				base : this.scale.endPoint                                                                                        // 2203
			});                                                                                                                // 2204
			var newScaleProps = helpers.extend({                                                                               // 2205
				height : this.chart.height,                                                                                       // 2206
				width : this.chart.width                                                                                          // 2207
			});                                                                                                                // 2208
			this.scale.update(newScaleProps);                                                                                  // 2209
		},                                                                                                                  // 2210
		draw : function(ease){                                                                                              // 2211
			var easingDecimal = ease || 1;                                                                                     // 2212
			this.clear();                                                                                                      // 2213
                                                                                                                      // 2214
			var ctx = this.chart.ctx;                                                                                          // 2215
                                                                                                                      // 2216
			this.scale.draw(easingDecimal);                                                                                    // 2217
                                                                                                                      // 2218
			//Draw all the bars for each dataset                                                                               // 2219
			helpers.each(this.datasets,function(dataset,datasetIndex){                                                         // 2220
				helpers.each(dataset.bars,function(bar,index){                                                                    // 2221
					if (bar.hasValue()){                                                                                             // 2222
						bar.base = this.scale.endPoint;                                                                                 // 2223
						//Transition then draw                                                                                          // 2224
						bar.transition({                                                                                                // 2225
							x : this.scale.calculateBarX(this.datasets.length, datasetIndex, index),                                       // 2226
							y : this.scale.calculateY(bar.value),                                                                          // 2227
							width : this.scale.calculateBarWidth(this.datasets.length)                                                     // 2228
						}, easingDecimal).draw();                                                                                       // 2229
					}                                                                                                                // 2230
				},this);                                                                                                          // 2231
                                                                                                                      // 2232
			},this);                                                                                                           // 2233
		}                                                                                                                   // 2234
	});                                                                                                                  // 2235
                                                                                                                      // 2236
                                                                                                                      // 2237
}).call(this);                                                                                                        // 2238
(function(){                                                                                                          // 2239
	"use strict";                                                                                                        // 2240
                                                                                                                      // 2241
	var root = this,                                                                                                     // 2242
		Chart = root.Chart,                                                                                                 // 2243
		//Cache a local reference to Chart.helpers                                                                          // 2244
		helpers = Chart.helpers;                                                                                            // 2245
                                                                                                                      // 2246
	var defaultConfig = {                                                                                                // 2247
		//Boolean - Whether we should show a stroke on each segment                                                         // 2248
		segmentShowStroke : true,                                                                                           // 2249
                                                                                                                      // 2250
		//String - The colour of each segment stroke                                                                        // 2251
		segmentStrokeColor : "#fff",                                                                                        // 2252
                                                                                                                      // 2253
		//Number - The width of each segment stroke                                                                         // 2254
		segmentStrokeWidth : 2,                                                                                             // 2255
                                                                                                                      // 2256
		//The percentage of the chart that we cut out of the middle.                                                        // 2257
		percentageInnerCutout : 50,                                                                                         // 2258
                                                                                                                      // 2259
		//Number - Amount of animation steps                                                                                // 2260
		animationSteps : 100,                                                                                               // 2261
                                                                                                                      // 2262
		//String - Animation easing effect                                                                                  // 2263
		animationEasing : "easeOutBounce",                                                                                  // 2264
                                                                                                                      // 2265
		//Boolean - Whether we animate the rotation of the Doughnut                                                         // 2266
		animateRotate : true,                                                                                               // 2267
                                                                                                                      // 2268
		//Boolean - Whether we animate scaling the Doughnut from the centre                                                 // 2269
		animateScale : false,                                                                                               // 2270
                                                                                                                      // 2271
		//String - A legend template                                                                                        // 2272
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
                                                                                                                      // 2274
	};                                                                                                                   // 2275
                                                                                                                      // 2276
                                                                                                                      // 2277
	Chart.Type.extend({                                                                                                  // 2278
		//Passing in a name registers this chart in the Chart namespace                                                     // 2279
		name: "Doughnut",                                                                                                   // 2280
		//Providing a defaults will also register the deafults in the chart namespace                                       // 2281
		defaults : defaultConfig,                                                                                           // 2282
		//Initialize is fired when the chart is initialized - Data is passed in as a parameter                              // 2283
		//Config is automatically merged by the core of Chart.js, and is available at this.options                          // 2284
		initialize:  function(data){                                                                                        // 2285
                                                                                                                      // 2286
			//Declare segments as a static property to prevent inheriting across the Chart type prototype                      // 2287
			this.segments = [];                                                                                                // 2288
			this.outerRadius = (helpers.min([this.chart.width,this.chart.height]) -	this.options.segmentStrokeWidth/2)/2;      // 2289
                                                                                                                      // 2290
			this.SegmentArc = Chart.Arc.extend({                                                                               // 2291
				ctx : this.chart.ctx,                                                                                             // 2292
				x : this.chart.width/2,                                                                                           // 2293
				y : this.chart.height/2                                                                                           // 2294
			});                                                                                                                // 2295
                                                                                                                      // 2296
			//Set up tooltip events on the chart                                                                               // 2297
			if (this.options.showTooltips){                                                                                    // 2298
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){                                               // 2299
					var activeSegments = (evt.type !== 'mouseout') ? this.getSegmentsAtEvent(evt) : [];                              // 2300
                                                                                                                      // 2301
					helpers.each(this.segments,function(segment){                                                                    // 2302
						segment.restore(["fillColor"]);                                                                                 // 2303
					});                                                                                                              // 2304
					helpers.each(activeSegments,function(activeSegment){                                                             // 2305
						activeSegment.fillColor = activeSegment.highlightColor;                                                         // 2306
					});                                                                                                              // 2307
					this.showTooltip(activeSegments);                                                                                // 2308
				});                                                                                                               // 2309
			}                                                                                                                  // 2310
			this.calculateTotal(data);                                                                                         // 2311
                                                                                                                      // 2312
			helpers.each(data,function(datapoint, index){                                                                      // 2313
				this.addData(datapoint, index, true);                                                                             // 2314
			},this);                                                                                                           // 2315
                                                                                                                      // 2316
			this.render();                                                                                                     // 2317
		},                                                                                                                  // 2318
		getSegmentsAtEvent : function(e){                                                                                   // 2319
			var segmentsArray = [];                                                                                            // 2320
                                                                                                                      // 2321
			var location = helpers.getRelativePosition(e);                                                                     // 2322
                                                                                                                      // 2323
			helpers.each(this.segments,function(segment){                                                                      // 2324
				if (segment.inRange(location.x,location.y)) segmentsArray.push(segment);                                          // 2325
			},this);                                                                                                           // 2326
			return segmentsArray;                                                                                              // 2327
		},                                                                                                                  // 2328
		addData : function(segment, atIndex, silent){                                                                       // 2329
			var index = atIndex || this.segments.length;                                                                       // 2330
			this.segments.splice(index, 0, new this.SegmentArc({                                                               // 2331
				value : segment.value,                                                                                            // 2332
				outerRadius : (this.options.animateScale) ? 0 : this.outerRadius,                                                 // 2333
				innerRadius : (this.options.animateScale) ? 0 : (this.outerRadius/100) * this.options.percentageInnerCutout,      // 2334
				fillColor : segment.color,                                                                                        // 2335
				highlightColor : segment.highlight || segment.color,                                                              // 2336
				showStroke : this.options.segmentShowStroke,                                                                      // 2337
				strokeWidth : this.options.segmentStrokeWidth,                                                                    // 2338
				strokeColor : this.options.segmentStrokeColor,                                                                    // 2339
				startAngle : Math.PI * 1.5,                                                                                       // 2340
				circumference : (this.options.animateRotate) ? 0 : this.calculateCircumference(segment.value),                    // 2341
				label : segment.label                                                                                             // 2342
			}));                                                                                                               // 2343
			if (!silent){                                                                                                      // 2344
				this.reflow();                                                                                                    // 2345
				this.update();                                                                                                    // 2346
			}                                                                                                                  // 2347
		},                                                                                                                  // 2348
		calculateCircumference : function(value){                                                                           // 2349
			return (Math.PI*2)*(value / this.total);                                                                           // 2350
		},                                                                                                                  // 2351
		calculateTotal : function(data){                                                                                    // 2352
			this.total = 0;                                                                                                    // 2353
			helpers.each(data,function(segment){                                                                               // 2354
				this.total += segment.value;                                                                                      // 2355
			},this);                                                                                                           // 2356
		},                                                                                                                  // 2357
		update : function(){                                                                                                // 2358
			this.calculateTotal(this.segments);                                                                                // 2359
                                                                                                                      // 2360
			// Reset any highlight colours before updating.                                                                    // 2361
			helpers.each(this.activeElements, function(activeElement){                                                         // 2362
				activeElement.restore(['fillColor']);                                                                             // 2363
			});                                                                                                                // 2364
                                                                                                                      // 2365
			helpers.each(this.segments,function(segment){                                                                      // 2366
				segment.save();                                                                                                   // 2367
			});                                                                                                                // 2368
			this.render();                                                                                                     // 2369
		},                                                                                                                  // 2370
                                                                                                                      // 2371
		removeData: function(atIndex){                                                                                      // 2372
			var indexToDelete = (helpers.isNumber(atIndex)) ? atIndex : this.segments.length-1;                                // 2373
			this.segments.splice(indexToDelete, 1);                                                                            // 2374
			this.reflow();                                                                                                     // 2375
			this.update();                                                                                                     // 2376
		},                                                                                                                  // 2377
                                                                                                                      // 2378
		reflow : function(){                                                                                                // 2379
			helpers.extend(this.SegmentArc.prototype,{                                                                         // 2380
				x : this.chart.width/2,                                                                                           // 2381
				y : this.chart.height/2                                                                                           // 2382
			});                                                                                                                // 2383
			this.outerRadius = (helpers.min([this.chart.width,this.chart.height]) -	this.options.segmentStrokeWidth/2)/2;      // 2384
			helpers.each(this.segments, function(segment){                                                                     // 2385
				segment.update({                                                                                                  // 2386
					outerRadius : this.outerRadius,                                                                                  // 2387
					innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout                                        // 2388
				});                                                                                                               // 2389
			}, this);                                                                                                          // 2390
		},                                                                                                                  // 2391
		draw : function(easeDecimal){                                                                                       // 2392
			var animDecimal = (easeDecimal) ? easeDecimal : 1;                                                                 // 2393
			this.clear();                                                                                                      // 2394
			helpers.each(this.segments,function(segment,index){                                                                // 2395
				segment.transition({                                                                                              // 2396
					circumference : this.calculateCircumference(segment.value),                                                      // 2397
					outerRadius : this.outerRadius,                                                                                  // 2398
					innerRadius : (this.outerRadius/100) * this.options.percentageInnerCutout                                        // 2399
				},animDecimal);                                                                                                   // 2400
                                                                                                                      // 2401
				segment.endAngle = segment.startAngle + segment.circumference;                                                    // 2402
                                                                                                                      // 2403
				segment.draw();                                                                                                   // 2404
				if (index === 0){                                                                                                 // 2405
					segment.startAngle = Math.PI * 1.5;                                                                              // 2406
				}                                                                                                                 // 2407
				//Check to see if it's the last segment, if not get the next and update the start angle                           // 2408
				if (index < this.segments.length-1){                                                                              // 2409
					this.segments[index+1].startAngle = segment.endAngle;                                                            // 2410
				}                                                                                                                 // 2411
			},this);                                                                                                           // 2412
                                                                                                                      // 2413
		}                                                                                                                   // 2414
	});                                                                                                                  // 2415
                                                                                                                      // 2416
	Chart.types.Doughnut.extend({                                                                                        // 2417
		name : "Pie",                                                                                                       // 2418
		defaults : helpers.merge(defaultConfig,{percentageInnerCutout : 0})                                                 // 2419
	});                                                                                                                  // 2420
                                                                                                                      // 2421
}).call(this);                                                                                                        // 2422
(function(){                                                                                                          // 2423
	"use strict";                                                                                                        // 2424
                                                                                                                      // 2425
	var root = this,                                                                                                     // 2426
		Chart = root.Chart,                                                                                                 // 2427
		helpers = Chart.helpers;                                                                                            // 2428
                                                                                                                      // 2429
	var defaultConfig = {                                                                                                // 2430
                                                                                                                      // 2431
		///Boolean - Whether grid lines are shown across the chart                                                          // 2432
		scaleShowGridLines : true,                                                                                          // 2433
                                                                                                                      // 2434
		//String - Colour of the grid lines                                                                                 // 2435
		scaleGridLineColor : "rgba(0,0,0,.05)",                                                                             // 2436
                                                                                                                      // 2437
		//Number - Width of the grid lines                                                                                  // 2438
		scaleGridLineWidth : 1,                                                                                             // 2439
                                                                                                                      // 2440
		//Boolean - Whether the line is curved between points                                                               // 2441
		bezierCurve : true,                                                                                                 // 2442
                                                                                                                      // 2443
		//Number - Tension of the bezier curve between points                                                               // 2444
		bezierCurveTension : 0.4,                                                                                           // 2445
                                                                                                                      // 2446
		//Boolean - Whether to show a dot for each point                                                                    // 2447
		pointDot : true,                                                                                                    // 2448
                                                                                                                      // 2449
		//Number - Radius of each point dot in pixels                                                                       // 2450
		pointDotRadius : 4,                                                                                                 // 2451
                                                                                                                      // 2452
		//Number - Pixel width of point dot stroke                                                                          // 2453
		pointDotStrokeWidth : 1,                                                                                            // 2454
                                                                                                                      // 2455
		//Number - amount extra to add to the radius to cater for hit detection outside the drawn point                     // 2456
		pointHitDetectionRadius : 20,                                                                                       // 2457
                                                                                                                      // 2458
		//Boolean - Whether to show a stroke for datasets                                                                   // 2459
		datasetStroke : true,                                                                                               // 2460
                                                                                                                      // 2461
		//Number - Pixel width of dataset stroke                                                                            // 2462
		datasetStrokeWidth : 2,                                                                                             // 2463
                                                                                                                      // 2464
		//Boolean - Whether to fill the dataset with a colour                                                               // 2465
		datasetFill : true,                                                                                                 // 2466
                                                                                                                      // 2467
		//String - A legend template                                                                                        // 2468
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
                                                                                                                      // 2470
	};                                                                                                                   // 2471
                                                                                                                      // 2472
                                                                                                                      // 2473
	Chart.Type.extend({                                                                                                  // 2474
		name: "Line",                                                                                                       // 2475
		defaults : defaultConfig,                                                                                           // 2476
		initialize:  function(data){                                                                                        // 2477
			//Declare the extension of the default point, to cater for the options passed in to the constructor                // 2478
			this.PointClass = Chart.Point.extend({                                                                             // 2479
				strokeWidth : this.options.pointDotStrokeWidth,                                                                   // 2480
				radius : this.options.pointDotRadius,                                                                             // 2481
				display: this.options.pointDot,                                                                                   // 2482
				hitDetectionRadius : this.options.pointHitDetectionRadius,                                                        // 2483
				ctx : this.chart.ctx,                                                                                             // 2484
				inRange : function(mouseX){                                                                                       // 2485
					return (Math.pow(mouseX-this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius,2));                         // 2486
				}                                                                                                                 // 2487
			});                                                                                                                // 2488
                                                                                                                      // 2489
			this.datasets = [];                                                                                                // 2490
                                                                                                                      // 2491
			//Set up tooltip events on the chart                                                                               // 2492
			if (this.options.showTooltips){                                                                                    // 2493
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){                                               // 2494
					var activePoints = (evt.type !== 'mouseout') ? this.getPointsAtEvent(evt) : [];                                  // 2495
					this.eachPoints(function(point){                                                                                 // 2496
						point.restore(['fillColor', 'strokeColor']);                                                                    // 2497
					});                                                                                                              // 2498
					helpers.each(activePoints, function(activePoint){                                                                // 2499
						activePoint.fillColor = activePoint.highlightFill;                                                              // 2500
						activePoint.strokeColor = activePoint.highlightStroke;                                                          // 2501
					});                                                                                                              // 2502
					this.showTooltip(activePoints);                                                                                  // 2503
				});                                                                                                               // 2504
			}                                                                                                                  // 2505
                                                                                                                      // 2506
			//Iterate through each of the datasets, and build this into a property of the chart                                // 2507
			helpers.each(data.datasets,function(dataset){                                                                      // 2508
                                                                                                                      // 2509
				var datasetObject = {                                                                                             // 2510
					label : dataset.label || null,                                                                                   // 2511
					fillColor : dataset.fillColor,                                                                                   // 2512
					strokeColor : dataset.strokeColor,                                                                               // 2513
					pointColor : dataset.pointColor,                                                                                 // 2514
					pointStrokeColor : dataset.pointStrokeColor,                                                                     // 2515
					points : []                                                                                                      // 2516
				};                                                                                                                // 2517
                                                                                                                      // 2518
				this.datasets.push(datasetObject);                                                                                // 2519
                                                                                                                      // 2520
                                                                                                                      // 2521
				helpers.each(dataset.data,function(dataPoint,index){                                                              // 2522
					//Add a new point for each piece of data, passing any required data to draw.                                     // 2523
					datasetObject.points.push(new this.PointClass({                                                                  // 2524
						value : dataPoint,                                                                                              // 2525
						label : data.labels[index],                                                                                     // 2526
						datasetLabel: dataset.label,                                                                                    // 2527
						strokeColor : dataset.pointStrokeColor,                                                                         // 2528
						fillColor : dataset.pointColor,                                                                                 // 2529
						highlightFill : dataset.pointHighlightFill || dataset.pointColor,                                               // 2530
						highlightStroke : dataset.pointHighlightStroke || dataset.pointStrokeColor                                      // 2531
					}));                                                                                                             // 2532
				},this);                                                                                                          // 2533
                                                                                                                      // 2534
				this.buildScale(data.labels);                                                                                     // 2535
                                                                                                                      // 2536
                                                                                                                      // 2537
				this.eachPoints(function(point, index){                                                                           // 2538
					helpers.extend(point, {                                                                                          // 2539
						x: this.scale.calculateX(index),                                                                                // 2540
						y: this.scale.endPoint                                                                                          // 2541
					});                                                                                                              // 2542
					point.save();                                                                                                    // 2543
				}, this);                                                                                                         // 2544
                                                                                                                      // 2545
			},this);                                                                                                           // 2546
                                                                                                                      // 2547
                                                                                                                      // 2548
			this.render();                                                                                                     // 2549
		},                                                                                                                  // 2550
		update : function(){                                                                                                // 2551
			this.scale.update();                                                                                               // 2552
			// Reset any highlight colours before updating.                                                                    // 2553
			helpers.each(this.activeElements, function(activeElement){                                                         // 2554
				activeElement.restore(['fillColor', 'strokeColor']);                                                              // 2555
			});                                                                                                                // 2556
			this.eachPoints(function(point){                                                                                   // 2557
				point.save();                                                                                                     // 2558
			});                                                                                                                // 2559
			this.render();                                                                                                     // 2560
		},                                                                                                                  // 2561
		eachPoints : function(callback){                                                                                    // 2562
			helpers.each(this.datasets,function(dataset){                                                                      // 2563
				helpers.each(dataset.points,callback,this);                                                                       // 2564
			},this);                                                                                                           // 2565
		},                                                                                                                  // 2566
		getPointsAtEvent : function(e){                                                                                     // 2567
			var pointsArray = [],                                                                                              // 2568
				eventPosition = helpers.getRelativePosition(e);                                                                   // 2569
			helpers.each(this.datasets,function(dataset){                                                                      // 2570
				helpers.each(dataset.points,function(point){                                                                      // 2571
					if (point.inRange(eventPosition.x,eventPosition.y)) pointsArray.push(point);                                     // 2572
				});                                                                                                               // 2573
			},this);                                                                                                           // 2574
			return pointsArray;                                                                                                // 2575
		},                                                                                                                  // 2576
		buildScale : function(labels){                                                                                      // 2577
			var self = this;                                                                                                   // 2578
                                                                                                                      // 2579
			var dataTotal = function(){                                                                                        // 2580
				var values = [];                                                                                                  // 2581
				self.eachPoints(function(point){                                                                                  // 2582
					values.push(point.value);                                                                                        // 2583
				});                                                                                                               // 2584
                                                                                                                      // 2585
				return values;                                                                                                    // 2586
			};                                                                                                                 // 2587
                                                                                                                      // 2588
			var scaleOptions = {                                                                                               // 2589
				templateString : this.options.scaleLabel,                                                                         // 2590
				height : this.chart.height,                                                                                       // 2591
				width : this.chart.width,                                                                                         // 2592
				ctx : this.chart.ctx,                                                                                             // 2593
				textColor : this.options.scaleFontColor,                                                                          // 2594
				fontSize : this.options.scaleFontSize,                                                                            // 2595
				fontStyle : this.options.scaleFontStyle,                                                                          // 2596
				fontFamily : this.options.scaleFontFamily,                                                                        // 2597
				valuesCount : labels.length,                                                                                      // 2598
				beginAtZero : this.options.scaleBeginAtZero,                                                                      // 2599
				integersOnly : this.options.scaleIntegersOnly,                                                                    // 2600
				calculateYRange : function(currentHeight){                                                                        // 2601
					var updatedRanges = helpers.calculateScaleRange(                                                                 // 2602
						dataTotal(),                                                                                                    // 2603
						currentHeight,                                                                                                  // 2604
						this.fontSize,                                                                                                  // 2605
						this.beginAtZero,                                                                                               // 2606
						this.integersOnly                                                                                               // 2607
					);                                                                                                               // 2608
					helpers.extend(this, updatedRanges);                                                                             // 2609
				},                                                                                                                // 2610
				xLabels : labels,                                                                                                 // 2611
				font : helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily), // 2612
				lineWidth : this.options.scaleLineWidth,                                                                          // 2613
				lineColor : this.options.scaleLineColor,                                                                          // 2614
				gridLineWidth : (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,                          // 2615
				gridLineColor : (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",            // 2616
				padding: (this.options.showScale) ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,           // 2617
				showLabels : this.options.scaleShowLabels,                                                                        // 2618
				display : this.options.showScale                                                                                  // 2619
			};                                                                                                                 // 2620
                                                                                                                      // 2621
			if (this.options.scaleOverride){                                                                                   // 2622
				helpers.extend(scaleOptions, {                                                                                    // 2623
					calculateYRange: helpers.noop,                                                                                   // 2624
					steps: this.options.scaleSteps,                                                                                  // 2625
					stepValue: this.options.scaleStepWidth,                                                                          // 2626
					min: this.options.scaleStartValue,                                                                               // 2627
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)                      // 2628
				});                                                                                                               // 2629
			}                                                                                                                  // 2630
                                                                                                                      // 2631
                                                                                                                      // 2632
			this.scale = new Chart.Scale(scaleOptions);                                                                        // 2633
		},                                                                                                                  // 2634
		addData : function(valuesArray,label){                                                                              // 2635
			//Map the values array for each of the datasets                                                                    // 2636
                                                                                                                      // 2637
			helpers.each(valuesArray,function(value,datasetIndex){                                                             // 2638
				//Add a new point for each piece of data, passing any required data to draw.                                      // 2639
				this.datasets[datasetIndex].points.push(new this.PointClass({                                                     // 2640
					value : value,                                                                                                   // 2641
					label : label,                                                                                                   // 2642
					x: this.scale.calculateX(this.scale.valuesCount+1),                                                              // 2643
					y: this.scale.endPoint,                                                                                          // 2644
					strokeColor : this.datasets[datasetIndex].pointStrokeColor,                                                      // 2645
					fillColor : this.datasets[datasetIndex].pointColor                                                               // 2646
				}));                                                                                                              // 2647
			},this);                                                                                                           // 2648
                                                                                                                      // 2649
			this.scale.addXLabel(label);                                                                                       // 2650
			//Then re-render the chart.                                                                                        // 2651
			this.update();                                                                                                     // 2652
		},                                                                                                                  // 2653
		removeData : function(){                                                                                            // 2654
			this.scale.removeXLabel();                                                                                         // 2655
			//Then re-render the chart.                                                                                        // 2656
			helpers.each(this.datasets,function(dataset){                                                                      // 2657
				dataset.points.shift();                                                                                           // 2658
			},this);                                                                                                           // 2659
			this.update();                                                                                                     // 2660
		},                                                                                                                  // 2661
		reflow : function(){                                                                                                // 2662
			var newScaleProps = helpers.extend({                                                                               // 2663
				height : this.chart.height,                                                                                       // 2664
				width : this.chart.width                                                                                          // 2665
			});                                                                                                                // 2666
			this.scale.update(newScaleProps);                                                                                  // 2667
		},                                                                                                                  // 2668
		draw : function(ease){                                                                                              // 2669
			var easingDecimal = ease || 1;                                                                                     // 2670
			this.clear();                                                                                                      // 2671
                                                                                                                      // 2672
			var ctx = this.chart.ctx;                                                                                          // 2673
                                                                                                                      // 2674
			// Some helper methods for getting the next/prev points                                                            // 2675
			var hasValue = function(item){                                                                                     // 2676
				return item.value !== null;                                                                                       // 2677
			},                                                                                                                 // 2678
			nextPoint = function(point, collection, index){                                                                    // 2679
				return helpers.findNextWhere(collection, hasValue, index) || point;                                               // 2680
			},                                                                                                                 // 2681
			previousPoint = function(point, collection, index){                                                                // 2682
				return helpers.findPreviousWhere(collection, hasValue, index) || point;                                           // 2683
			};                                                                                                                 // 2684
                                                                                                                      // 2685
			this.scale.draw(easingDecimal);                                                                                    // 2686
                                                                                                                      // 2687
                                                                                                                      // 2688
			helpers.each(this.datasets,function(dataset){                                                                      // 2689
				var pointsWithValues = helpers.where(dataset.points, hasValue);                                                   // 2690
                                                                                                                      // 2691
				//Transition each point first so that the line and point drawing isn't out of sync                                // 2692
				//We can use this extra loop to calculate the control points of this dataset also in this loop                    // 2693
                                                                                                                      // 2694
				helpers.each(dataset.points, function(point, index){                                                              // 2695
					if (point.hasValue()){                                                                                           // 2696
						point.transition({                                                                                              // 2697
							y : this.scale.calculateY(point.value),                                                                        // 2698
							x : this.scale.calculateX(index)                                                                               // 2699
						}, easingDecimal);                                                                                              // 2700
					}                                                                                                                // 2701
				},this);                                                                                                          // 2702
                                                                                                                      // 2703
                                                                                                                      // 2704
				// Control points need to be calculated in a seperate loop, because we need to know the current x/y of the point  // 2705
				// This would cause issues when there is no animation, because the y of the next point would be 0, so beziers would be skewed
				if (this.options.bezierCurve){                                                                                    // 2707
					helpers.each(pointsWithValues, function(point, index){                                                           // 2708
						var tension = (index > 0 && index < pointsWithValues.length - 1) ? this.options.bezierCurveTension : 0;         // 2709
						point.controlPoints = helpers.splineCurve(                                                                      // 2710
							previousPoint(point, pointsWithValues, index),                                                                 // 2711
							point,                                                                                                         // 2712
							nextPoint(point, pointsWithValues, index),                                                                     // 2713
							tension                                                                                                        // 2714
						);                                                                                                              // 2715
                                                                                                                      // 2716
						// Prevent the bezier going outside of the bounds of the graph                                                  // 2717
                                                                                                                      // 2718
						// Cap puter bezier handles to the upper/lower scale bounds                                                     // 2719
						if (point.controlPoints.outer.y > this.scale.endPoint){                                                         // 2720
							point.controlPoints.outer.y = this.scale.endPoint;                                                             // 2721
						}                                                                                                               // 2722
						else if (point.controlPoints.outer.y < this.scale.startPoint){                                                  // 2723
							point.controlPoints.outer.y = this.scale.startPoint;                                                           // 2724
						}                                                                                                               // 2725
                                                                                                                      // 2726
						// Cap inner bezier handles to the upper/lower scale bounds                                                     // 2727
						if (point.controlPoints.inner.y > this.scale.endPoint){                                                         // 2728
							point.controlPoints.inner.y = this.scale.endPoint;                                                             // 2729
						}                                                                                                               // 2730
						else if (point.controlPoints.inner.y < this.scale.startPoint){                                                  // 2731
							point.controlPoints.inner.y = this.scale.startPoint;                                                           // 2732
						}                                                                                                               // 2733
					},this);                                                                                                         // 2734
				}                                                                                                                 // 2735
                                                                                                                      // 2736
                                                                                                                      // 2737
				//Draw the line between all the points                                                                            // 2738
				ctx.lineWidth = this.options.datasetStrokeWidth;                                                                  // 2739
				ctx.strokeStyle = dataset.strokeColor;                                                                            // 2740
				ctx.beginPath();                                                                                                  // 2741
                                                                                                                      // 2742
				helpers.each(pointsWithValues, function(point, index){                                                            // 2743
					if (index === 0){                                                                                                // 2744
						ctx.moveTo(point.x, point.y);                                                                                   // 2745
					}                                                                                                                // 2746
					else{                                                                                                            // 2747
						if(this.options.bezierCurve){                                                                                   // 2748
							var previous = previousPoint(point, pointsWithValues, index);                                                  // 2749
                                                                                                                      // 2750
							ctx.bezierCurveTo(                                                                                             // 2751
								previous.controlPoints.outer.x,                                                                               // 2752
								previous.controlPoints.outer.y,                                                                               // 2753
								point.controlPoints.inner.x,                                                                                  // 2754
								point.controlPoints.inner.y,                                                                                  // 2755
								point.x,                                                                                                      // 2756
								point.y                                                                                                       // 2757
							);                                                                                                             // 2758
						}                                                                                                               // 2759
						else{                                                                                                           // 2760
							ctx.lineTo(point.x,point.y);                                                                                   // 2761
						}                                                                                                               // 2762
					}                                                                                                                // 2763
				}, this);                                                                                                         // 2764
                                                                                                                      // 2765
				ctx.stroke();                                                                                                     // 2766
                                                                                                                      // 2767
				if (this.options.datasetFill && pointsWithValues.length > 0){                                                     // 2768
					//Round off the line by going to the base of the chart, back to the start, then fill.                            // 2769
					ctx.lineTo(pointsWithValues[pointsWithValues.length - 1].x, this.scale.endPoint);                                // 2770
					ctx.lineTo(pointsWithValues[0].x, this.scale.endPoint);                                                          // 2771
					ctx.fillStyle = dataset.fillColor;                                                                               // 2772
					ctx.closePath();                                                                                                 // 2773
					ctx.fill();                                                                                                      // 2774
				}                                                                                                                 // 2775
                                                                                                                      // 2776
				//Now draw the points over the line                                                                               // 2777
				//A little inefficient double looping, but better than the line                                                   // 2778
				//lagging behind the point positions                                                                              // 2779
				helpers.each(pointsWithValues,function(point){                                                                    // 2780
					point.draw();                                                                                                    // 2781
				});                                                                                                               // 2782
			},this);                                                                                                           // 2783
		}                                                                                                                   // 2784
	});                                                                                                                  // 2785
                                                                                                                      // 2786
                                                                                                                      // 2787
}).call(this);                                                                                                        // 2788
(function(){                                                                                                          // 2789
	"use strict";                                                                                                        // 2790
                                                                                                                      // 2791
	var root = this,                                                                                                     // 2792
		Chart = root.Chart,                                                                                                 // 2793
		//Cache a local reference to Chart.helpers                                                                          // 2794
		helpers = Chart.helpers;                                                                                            // 2795
                                                                                                                      // 2796
	var defaultConfig = {                                                                                                // 2797
		//Boolean - Show a backdrop to the scale label                                                                      // 2798
		scaleShowLabelBackdrop : true,                                                                                      // 2799
                                                                                                                      // 2800
		//String - The colour of the label backdrop                                                                         // 2801
		scaleBackdropColor : "rgba(255,255,255,0.75)",                                                                      // 2802
                                                                                                                      // 2803
		// Boolean - Whether the scale should begin at zero                                                                 // 2804
		scaleBeginAtZero : true,                                                                                            // 2805
                                                                                                                      // 2806
		//Number - The backdrop padding above & below the label in pixels                                                   // 2807
		scaleBackdropPaddingY : 2,                                                                                          // 2808
                                                                                                                      // 2809
		//Number - The backdrop padding to the side of the label in pixels                                                  // 2810
		scaleBackdropPaddingX : 2,                                                                                          // 2811
                                                                                                                      // 2812
		//Boolean - Show line for each value in the scale                                                                   // 2813
		scaleShowLine : true,                                                                                               // 2814
                                                                                                                      // 2815
		//Boolean - Stroke a line around each segment in the chart                                                          // 2816
		segmentShowStroke : true,                                                                                           // 2817
                                                                                                                      // 2818
		//String - The colour of the stroke on each segement.                                                               // 2819
		segmentStrokeColor : "#fff",                                                                                        // 2820
                                                                                                                      // 2821
		//Number - The width of the stroke value in pixels                                                                  // 2822
		segmentStrokeWidth : 2,                                                                                             // 2823
                                                                                                                      // 2824
		//Number - Amount of animation steps                                                                                // 2825
		animationSteps : 100,                                                                                               // 2826
                                                                                                                      // 2827
		//String - Animation easing effect.                                                                                 // 2828
		animationEasing : "easeOutBounce",                                                                                  // 2829
                                                                                                                      // 2830
		//Boolean - Whether to animate the rotation of the chart                                                            // 2831
		animateRotate : true,                                                                                               // 2832
                                                                                                                      // 2833
		//Boolean - Whether to animate scaling the chart from the centre                                                    // 2834
		animateScale : false,                                                                                               // 2835
                                                                                                                      // 2836
		//String - A legend template                                                                                        // 2837
		legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
	};                                                                                                                   // 2839
                                                                                                                      // 2840
                                                                                                                      // 2841
	Chart.Type.extend({                                                                                                  // 2842
		//Passing in a name registers this chart in the Chart namespace                                                     // 2843
		name: "PolarArea",                                                                                                  // 2844
		//Providing a defaults will also register the deafults in the chart namespace                                       // 2845
		defaults : defaultConfig,                                                                                           // 2846
		//Initialize is fired when the chart is initialized - Data is passed in as a parameter                              // 2847
		//Config is automatically merged by the core of Chart.js, and is available at this.options                          // 2848
		initialize:  function(data){                                                                                        // 2849
			this.segments = [];                                                                                                // 2850
			//Declare segment class as a chart instance specific class, so it can share props for this instance                // 2851
			this.SegmentArc = Chart.Arc.extend({                                                                               // 2852
				showStroke : this.options.segmentShowStroke,                                                                      // 2853
				strokeWidth : this.options.segmentStrokeWidth,                                                                    // 2854
				strokeColor : this.options.segmentStrokeColor,                                                                    // 2855
				ctx : this.chart.ctx,                                                                                             // 2856
				innerRadius : 0,                                                                                                  // 2857
				x : this.chart.width/2,                                                                                           // 2858
				y : this.chart.height/2                                                                                           // 2859
			});                                                                                                                // 2860
			this.scale = new Chart.RadialScale({                                                                               // 2861
				display: this.options.showScale,                                                                                  // 2862
				fontStyle: this.options.scaleFontStyle,                                                                           // 2863
				fontSize: this.options.scaleFontSize,                                                                             // 2864
				fontFamily: this.options.scaleFontFamily,                                                                         // 2865
				fontColor: this.options.scaleFontColor,                                                                           // 2866
				showLabels: this.options.scaleShowLabels,                                                                         // 2867
				showLabelBackdrop: this.options.scaleShowLabelBackdrop,                                                           // 2868
				backdropColor: this.options.scaleBackdropColor,                                                                   // 2869
				backdropPaddingY : this.options.scaleBackdropPaddingY,                                                            // 2870
				backdropPaddingX: this.options.scaleBackdropPaddingX,                                                             // 2871
				lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,                                        // 2872
				lineColor: this.options.scaleLineColor,                                                                           // 2873
				lineArc: true,                                                                                                    // 2874
				width: this.chart.width,                                                                                          // 2875
				height: this.chart.height,                                                                                        // 2876
				xCenter: this.chart.width/2,                                                                                      // 2877
				yCenter: this.chart.height/2,                                                                                     // 2878
				ctx : this.chart.ctx,                                                                                             // 2879
				templateString: this.options.scaleLabel,                                                                          // 2880
				valuesCount: data.length                                                                                          // 2881
			});                                                                                                                // 2882
                                                                                                                      // 2883
			this.updateScaleRange(data);                                                                                       // 2884
                                                                                                                      // 2885
			this.scale.update();                                                                                               // 2886
                                                                                                                      // 2887
			helpers.each(data,function(segment,index){                                                                         // 2888
				this.addData(segment,index,true);                                                                                 // 2889
			},this);                                                                                                           // 2890
                                                                                                                      // 2891
			//Set up tooltip events on the chart                                                                               // 2892
			if (this.options.showTooltips){                                                                                    // 2893
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){                                               // 2894
					var activeSegments = (evt.type !== 'mouseout') ? this.getSegmentsAtEvent(evt) : [];                              // 2895
					helpers.each(this.segments,function(segment){                                                                    // 2896
						segment.restore(["fillColor"]);                                                                                 // 2897
					});                                                                                                              // 2898
					helpers.each(activeSegments,function(activeSegment){                                                             // 2899
						activeSegment.fillColor = activeSegment.highlightColor;                                                         // 2900
					});                                                                                                              // 2901
					this.showTooltip(activeSegments);                                                                                // 2902
				});                                                                                                               // 2903
			}                                                                                                                  // 2904
                                                                                                                      // 2905
			this.render();                                                                                                     // 2906
		},                                                                                                                  // 2907
		getSegmentsAtEvent : function(e){                                                                                   // 2908
			var segmentsArray = [];                                                                                            // 2909
                                                                                                                      // 2910
			var location = helpers.getRelativePosition(e);                                                                     // 2911
                                                                                                                      // 2912
			helpers.each(this.segments,function(segment){                                                                      // 2913
				if (segment.inRange(location.x,location.y)) segmentsArray.push(segment);                                          // 2914
			},this);                                                                                                           // 2915
			return segmentsArray;                                                                                              // 2916
		},                                                                                                                  // 2917
		addData : function(segment, atIndex, silent){                                                                       // 2918
			var index = atIndex || this.segments.length;                                                                       // 2919
                                                                                                                      // 2920
			this.segments.splice(index, 0, new this.SegmentArc({                                                               // 2921
				fillColor: segment.color,                                                                                         // 2922
				highlightColor: segment.highlight || segment.color,                                                               // 2923
				label: segment.label,                                                                                             // 2924
				value: segment.value,                                                                                             // 2925
				outerRadius: (this.options.animateScale) ? 0 : this.scale.calculateCenterOffset(segment.value),                   // 2926
				circumference: (this.options.animateRotate) ? 0 : this.scale.getCircumference(),                                  // 2927
				startAngle: Math.PI * 1.5                                                                                         // 2928
			}));                                                                                                               // 2929
			if (!silent){                                                                                                      // 2930
				this.reflow();                                                                                                    // 2931
				this.update();                                                                                                    // 2932
			}                                                                                                                  // 2933
		},                                                                                                                  // 2934
		removeData: function(atIndex){                                                                                      // 2935
			var indexToDelete = (helpers.isNumber(atIndex)) ? atIndex : this.segments.length-1;                                // 2936
			this.segments.splice(indexToDelete, 1);                                                                            // 2937
			this.reflow();                                                                                                     // 2938
			this.update();                                                                                                     // 2939
		},                                                                                                                  // 2940
		calculateTotal: function(data){                                                                                     // 2941
			this.total = 0;                                                                                                    // 2942
			helpers.each(data,function(segment){                                                                               // 2943
				this.total += segment.value;                                                                                      // 2944
			},this);                                                                                                           // 2945
			this.scale.valuesCount = this.segments.length;                                                                     // 2946
		},                                                                                                                  // 2947
		updateScaleRange: function(datapoints){                                                                             // 2948
			var valuesArray = [];                                                                                              // 2949
			helpers.each(datapoints,function(segment){                                                                         // 2950
				valuesArray.push(segment.value);                                                                                  // 2951
			});                                                                                                                // 2952
                                                                                                                      // 2953
			var scaleSizes = (this.options.scaleOverride) ?                                                                    // 2954
				{                                                                                                                 // 2955
					steps: this.options.scaleSteps,                                                                                  // 2956
					stepValue: this.options.scaleStepWidth,                                                                          // 2957
					min: this.options.scaleStartValue,                                                                               // 2958
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)                      // 2959
				} :                                                                                                               // 2960
				helpers.calculateScaleRange(                                                                                      // 2961
					valuesArray,                                                                                                     // 2962
					helpers.min([this.chart.width, this.chart.height])/2,                                                            // 2963
					this.options.scaleFontSize,                                                                                      // 2964
					this.options.scaleBeginAtZero,                                                                                   // 2965
					this.options.scaleIntegersOnly                                                                                   // 2966
				);                                                                                                                // 2967
                                                                                                                      // 2968
			helpers.extend(                                                                                                    // 2969
				this.scale,                                                                                                       // 2970
				scaleSizes,                                                                                                       // 2971
				{                                                                                                                 // 2972
					size: helpers.min([this.chart.width, this.chart.height]),                                                        // 2973
					xCenter: this.chart.width/2,                                                                                     // 2974
					yCenter: this.chart.height/2                                                                                     // 2975
				}                                                                                                                 // 2976
			);                                                                                                                 // 2977
                                                                                                                      // 2978
		},                                                                                                                  // 2979
		update : function(){                                                                                                // 2980
			this.calculateTotal(this.segments);                                                                                // 2981
                                                                                                                      // 2982
			helpers.each(this.segments,function(segment){                                                                      // 2983
				segment.save();                                                                                                   // 2984
			});                                                                                                                // 2985
			this.render();                                                                                                     // 2986
		},                                                                                                                  // 2987
		reflow : function(){                                                                                                // 2988
			helpers.extend(this.SegmentArc.prototype,{                                                                         // 2989
				x : this.chart.width/2,                                                                                           // 2990
				y : this.chart.height/2                                                                                           // 2991
			});                                                                                                                // 2992
			this.updateScaleRange(this.segments);                                                                              // 2993
			this.scale.update();                                                                                               // 2994
                                                                                                                      // 2995
			helpers.extend(this.scale,{                                                                                        // 2996
				xCenter: this.chart.width/2,                                                                                      // 2997
				yCenter: this.chart.height/2                                                                                      // 2998
			});                                                                                                                // 2999
                                                                                                                      // 3000
			helpers.each(this.segments, function(segment){                                                                     // 3001
				segment.update({                                                                                                  // 3002
					outerRadius : this.scale.calculateCenterOffset(segment.value)                                                    // 3003
				});                                                                                                               // 3004
			}, this);                                                                                                          // 3005
                                                                                                                      // 3006
		},                                                                                                                  // 3007
		draw : function(ease){                                                                                              // 3008
			var easingDecimal = ease || 1;                                                                                     // 3009
			//Clear & draw the canvas                                                                                          // 3010
			this.clear();                                                                                                      // 3011
			helpers.each(this.segments,function(segment, index){                                                               // 3012
				segment.transition({                                                                                              // 3013
					circumference : this.scale.getCircumference(),                                                                   // 3014
					outerRadius : this.scale.calculateCenterOffset(segment.value)                                                    // 3015
				},easingDecimal);                                                                                                 // 3016
                                                                                                                      // 3017
				segment.endAngle = segment.startAngle + segment.circumference;                                                    // 3018
                                                                                                                      // 3019
				// If we've removed the first segment we need to set the first one to                                             // 3020
				// start at the top.                                                                                              // 3021
				if (index === 0){                                                                                                 // 3022
					segment.startAngle = Math.PI * 1.5;                                                                              // 3023
				}                                                                                                                 // 3024
                                                                                                                      // 3025
				//Check to see if it's the last segment, if not get the next and update the start angle                           // 3026
				if (index < this.segments.length - 1){                                                                            // 3027
					this.segments[index+1].startAngle = segment.endAngle;                                                            // 3028
				}                                                                                                                 // 3029
				segment.draw();                                                                                                   // 3030
			}, this);                                                                                                          // 3031
			this.scale.draw();                                                                                                 // 3032
		}                                                                                                                   // 3033
	});                                                                                                                  // 3034
                                                                                                                      // 3035
}).call(this);                                                                                                        // 3036
(function(){                                                                                                          // 3037
	"use strict";                                                                                                        // 3038
                                                                                                                      // 3039
	var root = this,                                                                                                     // 3040
		Chart = root.Chart,                                                                                                 // 3041
		helpers = Chart.helpers;                                                                                            // 3042
                                                                                                                      // 3043
                                                                                                                      // 3044
                                                                                                                      // 3045
	Chart.Type.extend({                                                                                                  // 3046
		name: "Radar",                                                                                                      // 3047
		defaults:{                                                                                                          // 3048
			//Boolean - Whether to show lines for each scale point                                                             // 3049
			scaleShowLine : true,                                                                                              // 3050
                                                                                                                      // 3051
			//Boolean - Whether we show the angle lines out of the radar                                                       // 3052
			angleShowLineOut : true,                                                                                           // 3053
                                                                                                                      // 3054
			//Boolean - Whether to show labels on the scale                                                                    // 3055
			scaleShowLabels : false,                                                                                           // 3056
                                                                                                                      // 3057
			// Boolean - Whether the scale should begin at zero                                                                // 3058
			scaleBeginAtZero : true,                                                                                           // 3059
                                                                                                                      // 3060
			//String - Colour of the angle line                                                                                // 3061
			angleLineColor : "rgba(0,0,0,.1)",                                                                                 // 3062
                                                                                                                      // 3063
			//Number - Pixel width of the angle line                                                                           // 3064
			angleLineWidth : 1,                                                                                                // 3065
                                                                                                                      // 3066
			//String - Point label font declaration                                                                            // 3067
			pointLabelFontFamily : "'Arial'",                                                                                  // 3068
                                                                                                                      // 3069
			//String - Point label font weight                                                                                 // 3070
			pointLabelFontStyle : "normal",                                                                                    // 3071
                                                                                                                      // 3072
			//Number - Point label font size in pixels                                                                         // 3073
			pointLabelFontSize : 10,                                                                                           // 3074
                                                                                                                      // 3075
			//String - Point label font colour                                                                                 // 3076
			pointLabelFontColor : "#666",                                                                                      // 3077
                                                                                                                      // 3078
			//Boolean - Whether to show a dot for each point                                                                   // 3079
			pointDot : true,                                                                                                   // 3080
                                                                                                                      // 3081
			//Number - Radius of each point dot in pixels                                                                      // 3082
			pointDotRadius : 3,                                                                                                // 3083
                                                                                                                      // 3084
			//Number - Pixel width of point dot stroke                                                                         // 3085
			pointDotStrokeWidth : 1,                                                                                           // 3086
                                                                                                                      // 3087
			//Number - amount extra to add to the radius to cater for hit detection outside the drawn point                    // 3088
			pointHitDetectionRadius : 20,                                                                                      // 3089
                                                                                                                      // 3090
			//Boolean - Whether to show a stroke for datasets                                                                  // 3091
			datasetStroke : true,                                                                                              // 3092
                                                                                                                      // 3093
			//Number - Pixel width of dataset stroke                                                                           // 3094
			datasetStrokeWidth : 2,                                                                                            // 3095
                                                                                                                      // 3096
			//Boolean - Whether to fill the dataset with a colour                                                              // 3097
			datasetFill : true,                                                                                                // 3098
                                                                                                                      // 3099
			//String - A legend template                                                                                       // 3100
			legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
                                                                                                                      // 3102
		},                                                                                                                  // 3103
                                                                                                                      // 3104
		initialize: function(data){                                                                                         // 3105
			this.PointClass = Chart.Point.extend({                                                                             // 3106
				strokeWidth : this.options.pointDotStrokeWidth,                                                                   // 3107
				radius : this.options.pointDotRadius,                                                                             // 3108
				display: this.options.pointDot,                                                                                   // 3109
				hitDetectionRadius : this.options.pointHitDetectionRadius,                                                        // 3110
				ctx : this.chart.ctx                                                                                              // 3111
			});                                                                                                                // 3112
                                                                                                                      // 3113
			this.datasets = [];                                                                                                // 3114
                                                                                                                      // 3115
			this.buildScale(data);                                                                                             // 3116
                                                                                                                      // 3117
			//Set up tooltip events on the chart                                                                               // 3118
			if (this.options.showTooltips){                                                                                    // 3119
				helpers.bindEvents(this, this.options.tooltipEvents, function(evt){                                               // 3120
					var activePointsCollection = (evt.type !== 'mouseout') ? this.getPointsAtEvent(evt) : [];                        // 3121
                                                                                                                      // 3122
					this.eachPoints(function(point){                                                                                 // 3123
						point.restore(['fillColor', 'strokeColor']);                                                                    // 3124
					});                                                                                                              // 3125
					helpers.each(activePointsCollection, function(activePoint){                                                      // 3126
						activePoint.fillColor = activePoint.highlightFill;                                                              // 3127
						activePoint.strokeColor = activePoint.highlightStroke;                                                          // 3128
					});                                                                                                              // 3129
                                                                                                                      // 3130
					this.showTooltip(activePointsCollection);                                                                        // 3131
				});                                                                                                               // 3132
			}                                                                                                                  // 3133
                                                                                                                      // 3134
			//Iterate through each of the datasets, and build this into a property of the chart                                // 3135
			helpers.each(data.datasets,function(dataset){                                                                      // 3136
                                                                                                                      // 3137
				var datasetObject = {                                                                                             // 3138
					label: dataset.label || null,                                                                                    // 3139
					fillColor : dataset.fillColor,                                                                                   // 3140
					strokeColor : dataset.strokeColor,                                                                               // 3141
					pointColor : dataset.pointColor,                                                                                 // 3142
					pointStrokeColor : dataset.pointStrokeColor,                                                                     // 3143
					points : []                                                                                                      // 3144
				};                                                                                                                // 3145
                                                                                                                      // 3146
				this.datasets.push(datasetObject);                                                                                // 3147
                                                                                                                      // 3148
				helpers.each(dataset.data,function(dataPoint,index){                                                              // 3149
					//Add a new point for each piece of data, passing any required data to draw.                                     // 3150
					var pointPosition;                                                                                               // 3151
					if (!this.scale.animation){                                                                                      // 3152
						pointPosition = this.scale.getPointPosition(index, this.scale.calculateCenterOffset(dataPoint));                // 3153
					}                                                                                                                // 3154
					datasetObject.points.push(new this.PointClass({                                                                  // 3155
						value : dataPoint,                                                                                              // 3156
						label : data.labels[index],                                                                                     // 3157
						datasetLabel: dataset.label,                                                                                    // 3158
						x: (this.options.animation) ? this.scale.xCenter : pointPosition.x,                                             // 3159
						y: (this.options.animation) ? this.scale.yCenter : pointPosition.y,                                             // 3160
						strokeColor : dataset.pointStrokeColor,                                                                         // 3161
						fillColor : dataset.pointColor,                                                                                 // 3162
						highlightFill : dataset.pointHighlightFill || dataset.pointColor,                                               // 3163
						highlightStroke : dataset.pointHighlightStroke || dataset.pointStrokeColor                                      // 3164
					}));                                                                                                             // 3165
				},this);                                                                                                          // 3166
                                                                                                                      // 3167
			},this);                                                                                                           // 3168
                                                                                                                      // 3169
			this.render();                                                                                                     // 3170
		},                                                                                                                  // 3171
		eachPoints : function(callback){                                                                                    // 3172
			helpers.each(this.datasets,function(dataset){                                                                      // 3173
				helpers.each(dataset.points,callback,this);                                                                       // 3174
			},this);                                                                                                           // 3175
		},                                                                                                                  // 3176
                                                                                                                      // 3177
		getPointsAtEvent : function(evt){                                                                                   // 3178
			var mousePosition = helpers.getRelativePosition(evt),                                                              // 3179
				fromCenter = helpers.getAngleFromPoint({                                                                          // 3180
					x: this.scale.xCenter,                                                                                           // 3181
					y: this.scale.yCenter                                                                                            // 3182
				}, mousePosition);                                                                                                // 3183
                                                                                                                      // 3184
			var anglePerIndex = (Math.PI * 2) /this.scale.valuesCount,                                                         // 3185
				pointIndex = Math.round((fromCenter.angle - Math.PI * 1.5) / anglePerIndex),                                      // 3186
				activePointsCollection = [];                                                                                      // 3187
                                                                                                                      // 3188
			// If we're at the top, make the pointIndex 0 to get the first of the array.                                       // 3189
			if (pointIndex >= this.scale.valuesCount || pointIndex < 0){                                                       // 3190
				pointIndex = 0;                                                                                                   // 3191
			}                                                                                                                  // 3192
                                                                                                                      // 3193
			if (fromCenter.distance <= this.scale.drawingArea){                                                                // 3194
				helpers.each(this.datasets, function(dataset){                                                                    // 3195
					activePointsCollection.push(dataset.points[pointIndex]);                                                         // 3196
				});                                                                                                               // 3197
			}                                                                                                                  // 3198
                                                                                                                      // 3199
			return activePointsCollection;                                                                                     // 3200
		},                                                                                                                  // 3201
                                                                                                                      // 3202
		buildScale : function(data){                                                                                        // 3203
			this.scale = new Chart.RadialScale({                                                                               // 3204
				display: this.options.showScale,                                                                                  // 3205
				fontStyle: this.options.scaleFontStyle,                                                                           // 3206
				fontSize: this.options.scaleFontSize,                                                                             // 3207
				fontFamily: this.options.scaleFontFamily,                                                                         // 3208
				fontColor: this.options.scaleFontColor,                                                                           // 3209
				showLabels: this.options.scaleShowLabels,                                                                         // 3210
				showLabelBackdrop: this.options.scaleShowLabelBackdrop,                                                           // 3211
				backdropColor: this.options.scaleBackdropColor,                                                                   // 3212
				backdropPaddingY : this.options.scaleBackdropPaddingY,                                                            // 3213
				backdropPaddingX: this.options.scaleBackdropPaddingX,                                                             // 3214
				lineWidth: (this.options.scaleShowLine) ? this.options.scaleLineWidth : 0,                                        // 3215
				lineColor: this.options.scaleLineColor,                                                                           // 3216
				angleLineColor : this.options.angleLineColor,                                                                     // 3217
				angleLineWidth : (this.options.angleShowLineOut) ? this.options.angleLineWidth : 0,                               // 3218
				// Point labels at the edge of each line                                                                          // 3219
				pointLabelFontColor : this.options.pointLabelFontColor,                                                           // 3220
				pointLabelFontSize : this.options.pointLabelFontSize,                                                             // 3221
				pointLabelFontFamily : this.options.pointLabelFontFamily,                                                         // 3222
				pointLabelFontStyle : this.options.pointLabelFontStyle,                                                           // 3223
				height : this.chart.height,                                                                                       // 3224
				width: this.chart.width,                                                                                          // 3225
				xCenter: this.chart.width/2,                                                                                      // 3226
				yCenter: this.chart.height/2,                                                                                     // 3227
				ctx : this.chart.ctx,                                                                                             // 3228
				templateString: this.options.scaleLabel,                                                                          // 3229
				labels: data.labels,                                                                                              // 3230
				valuesCount: data.datasets[0].data.length                                                                         // 3231
			});                                                                                                                // 3232
                                                                                                                      // 3233
			this.scale.setScaleSize();                                                                                         // 3234
			this.updateScaleRange(data.datasets);                                                                              // 3235
			this.scale.buildYLabels();                                                                                         // 3236
		},                                                                                                                  // 3237
		updateScaleRange: function(datasets){                                                                               // 3238
			var valuesArray = (function(){                                                                                     // 3239
				var totalDataArray = [];                                                                                          // 3240
				helpers.each(datasets,function(dataset){                                                                          // 3241
					if (dataset.data){                                                                                               // 3242
						totalDataArray = totalDataArray.concat(dataset.data);                                                           // 3243
					}                                                                                                                // 3244
					else {                                                                                                           // 3245
						helpers.each(dataset.points, function(point){                                                                   // 3246
							totalDataArray.push(point.value);                                                                              // 3247
						});                                                                                                             // 3248
					}                                                                                                                // 3249
				});                                                                                                               // 3250
				return totalDataArray;                                                                                            // 3251
			})();                                                                                                              // 3252
                                                                                                                      // 3253
                                                                                                                      // 3254
			var scaleSizes = (this.options.scaleOverride) ?                                                                    // 3255
				{                                                                                                                 // 3256
					steps: this.options.scaleSteps,                                                                                  // 3257
					stepValue: this.options.scaleStepWidth,                                                                          // 3258
					min: this.options.scaleStartValue,                                                                               // 3259
					max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)                      // 3260
				} :                                                                                                               // 3261
				helpers.calculateScaleRange(                                                                                      // 3262
					valuesArray,                                                                                                     // 3263
					helpers.min([this.chart.width, this.chart.height])/2,                                                            // 3264
					this.options.scaleFontSize,                                                                                      // 3265
					this.options.scaleBeginAtZero,                                                                                   // 3266
					this.options.scaleIntegersOnly                                                                                   // 3267
				);                                                                                                                // 3268
                                                                                                                      // 3269
			helpers.extend(                                                                                                    // 3270
				this.scale,                                                                                                       // 3271
				scaleSizes                                                                                                        // 3272
			);                                                                                                                 // 3273
                                                                                                                      // 3274
		},                                                                                                                  // 3275
		addData : function(valuesArray,label){                                                                              // 3276
			//Map the values array for each of the datasets                                                                    // 3277
			this.scale.valuesCount++;                                                                                          // 3278
			helpers.each(valuesArray,function(value,datasetIndex){                                                             // 3279
				var pointPosition = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(value)); // 3280
				this.datasets[datasetIndex].points.push(new this.PointClass({                                                     // 3281
					value : value,                                                                                                   // 3282
					label : label,                                                                                                   // 3283
					x: pointPosition.x,                                                                                              // 3284
					y: pointPosition.y,                                                                                              // 3285
					strokeColor : this.datasets[datasetIndex].pointStrokeColor,                                                      // 3286
					fillColor : this.datasets[datasetIndex].pointColor                                                               // 3287
				}));                                                                                                              // 3288
			},this);                                                                                                           // 3289
                                                                                                                      // 3290
			this.scale.labels.push(label);                                                                                     // 3291
                                                                                                                      // 3292
			this.reflow();                                                                                                     // 3293
                                                                                                                      // 3294
			this.update();                                                                                                     // 3295
		},                                                                                                                  // 3296
		removeData : function(){                                                                                            // 3297
			this.scale.valuesCount--;                                                                                          // 3298
			this.scale.labels.shift();                                                                                         // 3299
			helpers.each(this.datasets,function(dataset){                                                                      // 3300
				dataset.points.shift();                                                                                           // 3301
			},this);                                                                                                           // 3302
			this.reflow();                                                                                                     // 3303
			this.update();                                                                                                     // 3304
		},                                                                                                                  // 3305
		update : function(){                                                                                                // 3306
			this.eachPoints(function(point){                                                                                   // 3307
				point.save();                                                                                                     // 3308
			});                                                                                                                // 3309
			this.reflow();                                                                                                     // 3310
			this.render();                                                                                                     // 3311
		},                                                                                                                  // 3312
		reflow: function(){                                                                                                 // 3313
			helpers.extend(this.scale, {                                                                                       // 3314
				width : this.chart.width,                                                                                         // 3315
				height: this.chart.height,                                                                                        // 3316
				size : helpers.min([this.chart.width, this.chart.height]),                                                        // 3317
				xCenter: this.chart.width/2,                                                                                      // 3318
				yCenter: this.chart.height/2                                                                                      // 3319
			});                                                                                                                // 3320
			this.updateScaleRange(this.datasets);                                                                              // 3321
			this.scale.setScaleSize();                                                                                         // 3322
			this.scale.buildYLabels();                                                                                         // 3323
		},                                                                                                                  // 3324
		draw : function(ease){                                                                                              // 3325
			var easeDecimal = ease || 1,                                                                                       // 3326
				ctx = this.chart.ctx;                                                                                             // 3327
			this.clear();                                                                                                      // 3328
			this.scale.draw();                                                                                                 // 3329
                                                                                                                      // 3330
			helpers.each(this.datasets,function(dataset){                                                                      // 3331
                                                                                                                      // 3332
				//Transition each point first so that the line and point drawing isn't out of sync                                // 3333
				helpers.each(dataset.points,function(point,index){                                                                // 3334
					if (point.hasValue()){                                                                                           // 3335
						point.transition(this.scale.getPointPosition(index, this.scale.calculateCenterOffset(point.value)), easeDecimal);
					}                                                                                                                // 3337
				},this);                                                                                                          // 3338
                                                                                                                      // 3339
                                                                                                                      // 3340
                                                                                                                      // 3341
				//Draw the line between all the points                                                                            // 3342
				ctx.lineWidth = this.options.datasetStrokeWidth;                                                                  // 3343
				ctx.strokeStyle = dataset.strokeColor;                                                                            // 3344
				ctx.beginPath();                                                                                                  // 3345
				helpers.each(dataset.points,function(point,index){                                                                // 3346
					if (index === 0){                                                                                                // 3347
						ctx.moveTo(point.x,point.y);                                                                                    // 3348
					}                                                                                                                // 3349
					else{                                                                                                            // 3350
						ctx.lineTo(point.x,point.y);                                                                                    // 3351
					}                                                                                                                // 3352
				},this);                                                                                                          // 3353
				ctx.closePath();                                                                                                  // 3354
				ctx.stroke();                                                                                                     // 3355
                                                                                                                      // 3356
				ctx.fillStyle = dataset.fillColor;                                                                                // 3357
				ctx.fill();                                                                                                       // 3358
                                                                                                                      // 3359
				//Now draw the points over the line                                                                               // 3360
				//A little inefficient double looping, but better than the line                                                   // 3361
				//lagging behind the point positions                                                                              // 3362
				helpers.each(dataset.points,function(point){                                                                      // 3363
					if (point.hasValue()){                                                                                           // 3364
						point.draw();                                                                                                   // 3365
					}                                                                                                                // 3366
				});                                                                                                               // 3367
                                                                                                                      // 3368
			},this);                                                                                                           // 3369
                                                                                                                      // 3370
		}                                                                                                                   // 3371
                                                                                                                      // 3372
	});                                                                                                                  // 3373
                                                                                                                      // 3374
                                                                                                                      // 3375
                                                                                                                      // 3376
                                                                                                                      // 3377
                                                                                                                      // 3378
}).call(this);                                                                                                        // 3379
                                                                                                                      // 3380
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 3390
}).call(this);                                                       // 3391
                                                                     // 3392
                                                                     // 3393
                                                                     // 3394
                                                                     // 3395
                                                                     // 3396
                                                                     // 3397
(function () {                                                       // 3398
                                                                     // 3399
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/chart:chart/meteor/export.js                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/*global Chart:true*/  // Meteor creates a file-scope global for exporting. This comment prevents a potential JSHint warning.
Chart = window.Chart;                                                                                                 // 2
delete window.Chart;                                                                                                  // 3
                                                                                                                      // 4
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 3411
}).call(this);                                                       // 3412
                                                                     // 3413
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['chart:chart'] = {}, {
  Chart: Chart
});

})();
