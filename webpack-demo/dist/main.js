/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\r\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\r\n// const Game = require('./game');\r\n\r\nconst COLOR = \"red\";\r\nconst RADIUS = 10;\r\n\r\nfunction Asteroid(obj) {\r\n    // super(obj)\r\n    this.pos = obj.pos;\r\n    this.radius = RADIUS;\r\n    this.color = COLOR;\r\n    this.vel = Util.randomVec(5);\r\n}\r\n// Asteroid.inherits(Util);\r\nUtil.inherits(Asteroid, MovingObject);\r\n\r\n\r\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack://webpack-demo/./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\r\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\r\n\r\n// const canvas = document.getElementById(\"game-canvas\");\r\nconst DIM_X = 500;\r\nconst DIM_Y = 500;\r\n\r\nconst NUM_ASTEROIDS = 10; \r\nconst asteroids = [];\r\n\r\nfunction Game() {\r\n\r\n}\r\n\r\nGame.prototype.addAsteroids = function(){\r\n    for(let i = 0; i < NUM_ASTEROIDS; i++){\r\n        const obj = new MovingObject({pos: this.randomPosition(), vel: [10, 10], radius: 1, color: \"red\" }); \r\n        const ast = new Asteroid(obj);\r\n        asteroids.push(ast);\r\n        // debugger\r\n        // ast.draw(); \r\n    }\r\n};\r\n\r\nGame.prototype.randomPosition = function(){\r\n\r\n    const x = Math.random() * DIM_X;\r\n    const y = Math.random() * DIM_Y;\r\n\r\n    return [x, y];\r\n};\r\n\r\nGame.prototype.draw = function(ctx){\r\n    var c = document.getElementById(\"game-canvas\");\r\n    var ctx = c.getContext(\"2d\");\r\n    ctx.clearRect(0, 0, DIM_X, DIM_Y); \r\n    this.addAsteroids();\r\n    asteroids.forEach(ele => ele.draw());\r\n}\r\n\r\nGame.prototype.moveObjects = function(){\r\n    asteroids.forEach(ele => ele.move());\r\n}\r\n\r\nmodule.exports = Game;\n\n//# sourceURL=webpack://webpack-demo/./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\r\n\r\nfunction GameView(game, ctx) {\r\n    this.game = game;\r\n    this.ctx = ctx;\r\n}\r\n\r\nGameView.prototype.start = function() {\r\n    // setInterval(function() {\r\n        this.game.moveObjects();\r\n        this.game.draw();\r\n    // }, 200);\r\n}\r\n\r\nmodule.exports = GameView;\n\n//# sourceURL=webpack://webpack-demo/./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log(\"Webpack is working!\");\r\n\r\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\r\nwindow.MovingObject = MovingObject;\r\n\r\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\r\nwindow.Util = Util;\r\n\r\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\r\nwindow.Asteroid = Asteroid;\r\n\r\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\r\nwindow.Game = Game;\r\n\r\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\r\nwindow.GameView = GameView;\r\n\r\nwindow.addEventListener('DOMContentLoad', () => {\r\n    const canv = document.getElementById(\"game-canvas\")\r\n    canv.width = 500\r\n    canv.height = 500\r\n    const ctx = canv.getContext(\"2d\");\r\n    const mo = new MovingObject({\r\n        pos: [200, 200],\r\n        vel: [1000, 1000],\r\n        radius: 5,\r\n        color: \"#00FF00\"\r\n    });\r\n    mo.draw();\r\n\r\n    const game = new Game();\r\n    debugger;\r\n    const gameView = new GameView(game, ctx);\r\n    debugger;\r\n    gameView.start();\r\n});\r\n\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(obj){\r\n    this.pos = obj[\"pos\"];\r\n    this.vel = obj[\"vel\"];\r\n    this.radius = obj[\"radius\"];\r\n    this.color = obj[\"color\"];\r\n};\r\n\r\nmodule.exports = MovingObject;\r\n\r\nMovingObject.prototype.draw = function(ctx){\r\n    var c = document.getElementById(\"game-canvas\");\r\n    var ctx = c.getContext(\"2d\");\r\n    ctx.beginPath();\r\n    ctx.arc(this.pos[0], this.pos[1], 50, 0, 2 * Math.PI, true);\r\n    ctx.fillStyle = \"green\"; \r\n    ctx.fill();\r\n    ctx.stroke();\r\n}\r\n\r\nMovingObject.prototype.move = function(){\r\n    // console.log(\"In MOVE\");\r\n    const newPos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];\r\n    this.pos = newPos; \r\n}\n\n//# sourceURL=webpack://webpack-demo/./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\r\n    inherits(childClass, parentClass) {\r\n        \r\n        function Surrogate() { }\r\n        Surrogate.prototype = parentClass.prototype;\r\n        childClass.prototype = new Surrogate();\r\n        childClass.prototype.constructor = childClass;\r\n        \r\n    },\r\n\r\n    randomVec(length) {\r\n        const deg = 2 * Math.PI * Math.random();\r\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\r\n    },\r\n\r\n    // Scale the length of a vector by the given amount.\r\n    scale(vec, m) {\r\n        return [vec[0] * m, vec[1] * m];\r\n    }\r\n};\r\n\r\nmodule.exports = Util;\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;