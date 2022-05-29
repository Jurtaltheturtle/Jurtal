"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/register";
exports.ids = ["pages/api/register"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/register.js":
/*!*******************************!*\
  !*** ./pages/api/register.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function handle(req, res) {\n    // console.log(req.body);\n    await prisma.$connect();\n    if (await prisma.user.findFirst({\n        where: {\n            email: req.body.email\n        }\n    })) {\n        res.status(404).json({\n            error: \"User With Email Found\"\n        });\n    } else {\n        await prisma.user.create({\n            data: {\n                name: req.body.name,\n                email: req.body.email\n            }\n        }).then((resp)=>{\n            // console.log(resp);\n            res.status(200).json(JSON.stringify({\n                name: resp.name,\n                email: resp.email\n            }));\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVnaXN0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBRTdDLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCx3REFBWSxFQUFFO0FBQ2xCLGVBQWVFLE1BQU0sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDN0MseUJBQXlCO0lBQ3pCLE1BQU1ILE1BQU0sQ0FBQ0ksUUFBUSxFQUFFLENBQUM7SUFDeEIsSUFBRyxNQUFNSixNQUFNLENBQUNLLElBQUksQ0FBQ0MsU0FBUyxDQUFDO1FBQUNDLEtBQUssRUFBRTtZQUFFQyxLQUFLLEVBQUVOLEdBQUcsQ0FBQ08sSUFBSSxDQUFDRCxLQUFLO1NBQUM7S0FBQyxDQUFDLEVBQUU7UUFDakVMLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBQ0MsS0FBSyxFQUFFLHVCQUF1QjtTQUFDLENBQUM7S0FDdkQsTUFBSztRQUNOLE1BQU1aLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDUSxNQUFNLENBQUM7WUFDeEJDLElBQUksRUFBRTtnQkFDSkMsSUFBSSxFQUFFYixHQUFHLENBQUNPLElBQUksQ0FBQ00sSUFBSTtnQkFDbEJQLEtBQUssRUFBRU4sR0FBRyxDQUFDTyxJQUFJLENBQUNELEtBQUs7YUFDdEI7U0FDRixDQUFDLENBQUNRLElBQUksQ0FBQyxDQUFDQyxJQUFJLEdBQUs7WUFDaEIscUJBQXFCO1lBQ3BCZCxHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDTyxJQUFJLENBQUNDLFNBQVMsQ0FBQztnQkFBQ0osSUFBSSxFQUFFRSxJQUFJLENBQUNGLElBQUk7Z0JBQUVQLEtBQUssRUFBRVMsSUFBSSxDQUFDVCxLQUFLO2FBQUMsQ0FBQyxDQUFDO1NBQzVFLENBQUM7S0FDSDtDQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3JlZ2lzdGVyLmpzPzE3NDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGUocmVxLCByZXMpIHtcbiAgLy8gY29uc29sZS5sb2cocmVxLmJvZHkpO1xuICBhd2FpdCBwcmlzbWEuJGNvbm5lY3QoKTtcbiAgaWYoYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHt3aGVyZTogeyBlbWFpbDogcmVxLmJvZHkuZW1haWx9fSkpIHtcbiAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7ZXJyb3I6ICdVc2VyIFdpdGggRW1haWwgRm91bmQnfSlcbiAgfWVsc2Uge1xuICBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xuICAgZGF0YToge1xuICAgICBuYW1lOiByZXEuYm9keS5uYW1lLFxuICAgICAgZW1haWw6IHJlcS5ib2R5LmVtYWlsLFxuICAgIH1cbiAgfSkudGhlbigocmVzcCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHJlc3ApO1xuICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihKU09OLnN0cmluZ2lmeSh7bmFtZTogcmVzcC5uYW1lLCBlbWFpbDogcmVzcC5lbWFpbH0pKVxuICB9KVxufVxufSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJoYW5kbGUiLCJyZXEiLCJyZXMiLCIkY29ubmVjdCIsInVzZXIiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsImVtYWlsIiwiYm9keSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNyZWF0ZSIsImRhdGEiLCJuYW1lIiwidGhlbiIsInJlc3AiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/register.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/register.js"));
module.exports = __webpack_exports__;

})();