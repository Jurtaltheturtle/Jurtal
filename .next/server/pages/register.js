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
exports.id = "pages/register";
exports.ids = ["pages/register"];
exports.modules = {

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Register)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n//import { PrismaClientValidationError } from '@prisma/client/runtime';\nfunction Register() {\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"register\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: (e)=>{\n                        setName(e.target.value);\n                    },\n                    placeholder: \"name\",\n                    id: \"name\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\taco\\\\Downloads\\\\Jurtal\\\\nextjs\\\\Jurtal\\\\pages\\\\register.js\",\n                    lineNumber: 12,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: (e)=>{\n                        setEmail(e.target.value);\n                    },\n                    id: \"email \",\n                    placeholder: \"email\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\taco\\\\Downloads\\\\Jurtal\\\\nextjs\\\\Jurtal\\\\pages\\\\register.js\",\n                    lineNumber: 15,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    id: \"info\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\taco\\\\Downloads\\\\Jurtal\\\\nextjs\\\\Jurtal\\\\pages\\\\register.js\",\n                    lineNumber: 18,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>{\n                        if (email.length == 0 || name.length == 0) {} else {\n                            fetch(\"api/register\", {\n                                method: \"POST\",\n                                headers: {\n                                    \"Content-Type\": \"application/json\"\n                                },\n                                body: JSON.stringify({\n                                    \"name\": name,\n                                    \"email\": email\n                                })\n                            }).then((res)=>res.json()\n                            ).then((JSON)=>{\n                                document.getElementById(\"info\").innerHTML = \"succesfully made register\";\n                            });\n                        }\n                    },\n                    children: \"Register\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\taco\\\\Downloads\\\\Jurtal\\\\nextjs\\\\Jurtal\\\\pages\\\\register.js\",\n                    lineNumber: 19,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\taco\\\\Downloads\\\\Jurtal\\\\nextjs\\\\Jurtal\\\\pages\\\\register.js\",\n            lineNumber: 11,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\taco\\\\Downloads\\\\Jurtal\\\\nextjs\\\\Jurtal\\\\pages\\\\register.js\",\n        lineNumber: 10,\n        columnNumber: 10\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBMkM7QUFFTjtBQUNyQyx1RUFBdUU7QUFDdkQsU0FBU0csUUFBUSxHQUFHO0lBRWxDLE1BQUssRUFOUCxHQU1RQyxLQUFLLEdBTmIsR0FNZUMsUUFBUSxNQUFJSCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUNyQyxNQUFLLEVBUFAsR0FPUUksSUFBSSxHQVBaLEdBT2NDLE9BQU8sTUFBSUwsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFFbkMscUJBQU8sOERBQUNNLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFVBQVU7a0JBQy9CLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQyxXQUFXOzs4QkFDekIsOERBQUNDLE9BQUs7b0JBQUNDLFFBQVEsRUFBRUMsQ0FBQUEsQ0FBQyxHQUFJO3dCQUNuQkwsT0FBTyxDQUFDSyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO3FCQUN6QjtvQkFBRUMsV0FBVyxFQUFDLE1BQU07b0JBQUNDLEVBQUUsRUFBQyxNQUFNOzs7Ozt3QkFBUzs4QkFDeEMsOERBQUNOLE9BQUs7b0JBQUVDLFFBQVEsRUFBRUMsQ0FBQUEsQ0FBQyxHQUFJO3dCQUNsQlAsUUFBUSxDQUFDTyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO3FCQUM1QjtvQkFBRUUsRUFBRSxFQUFDLFFBQVFEO29CQUFBQSxXQUFXLEVBQUMsT0FBTzs7Ozs7d0JBQVM7OEJBQzFDLDhEQUFDRSxJQUFFO29CQUFDRCxFQUFFLEVBQUMsTUFBTTs7Ozs7d0JBQU07OEJBQ25CLDhEQUFDRSxRQUFNO29CQUFDQyxPQUFPLEVBQUksSUFBTTt3QkFDcEIsSUFBR2YsS0FBSyxDQUFDZ0IsTUFBTSxJQUFJLENBQUMsSUFBSWQsSUFBSSxDQUFDYyxNQUFNLElBQUksQ0FBQyxFQUFFLEVBRXpDLE1BQU87NEJBQ1JDLEtBQUssQ0FBQyxjQUFjLEVBQUU7Z0NBQ2hCQyxNQUFNLEVBQUUsTUFBTTtnQ0FDZEMsT0FBTyxFQUFFO29DQUNOLGNBQWMsRUFBRSxrQkFBa0I7aUNBQ3BDO2dDQUNEQyxJQUFJLEVBQ0RDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO29DQUNaLE1BQU0sRUFBR3BCLElBQUk7b0NBQ2IsT0FBTyxFQUFFRixLQUFLO2lDQUVoQixDQUFDOzZCQUNWLENBQUMsQ0FBQ3VCLElBQUksQ0FBQ0MsQ0FBQUEsR0FBRyxHQUFJQSxHQUFHLENBQUNDLElBQUksRUFBRTs0QkFBQSxDQUFDLENBQUNGLElBQUksQ0FBQ0YsQ0FBQUEsSUFBSSxHQUFJO2dDQUNyQ0ssUUFBUSxDQUFDQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUNDLFNBQVMsR0FBRywyQkFBMkI7NkJBQ3pFLENBQUM7eUJBQ0o7cUJBQ0Y7OEJBQUUsVUFBUTs7Ozs7d0JBQVM7Ozs7OztnQkFDZDs7Ozs7WUFDRjtDQUNQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVnaXN0ZXIuanM/YTA5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ByaXNtYUNsaWVudH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXHJcblxyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbi8vaW1wb3J0IHsgUHJpc21hQ2xpZW50VmFsaWRhdGlvbkVycm9yIH0gZnJvbSAnQHByaXNtYS9jbGllbnQvcnVudGltZSc7XHJcbmV4cG9ydCBkZWZhdWx0ICBmdW5jdGlvbiBSZWdpc3RlcigpIHtcclxuXHJcbiAgY29uc3RbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0W25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicmVnaXN0ZXJcIj4gXHJcbiAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICA8aW5wdXQgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgc2V0TmFtZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH19IHBsYWNlaG9sZGVyPVwibmFtZVwiIGlkPVwibmFtZVwiPjwvaW5wdXQ+XHJcbiAgICA8aW5wdXQgIG9uQ2hhbmdlPXtlID0+IHtcclxuICAgICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9fSBpZD1cImVtYWlsIFwicGxhY2Vob2xkZXI9XCJlbWFpbFwiPjwvaW5wdXQ+XHJcbiAgICA8aDEgaWQ9XCJpbmZvXCI+PC9oMT5cclxuICAgIDxidXR0b24gb25DbGljayA9IHsoKSA9PiB7XHJcbiAgICAgICAgIGlmKGVtYWlsLmxlbmd0aCA9PSAwIHx8IG5hbWUubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgIH0gIGVsc2Uge1xyXG4gICAgICAgICBmZXRjaCgnYXBpL3JlZ2lzdGVyJywge1xyXG4gICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICBib2R5OiBcclxuICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAnbmFtZSc6ICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAnZW1haWwnOiBlbWFpbCxcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oSlNPTiA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb1wiKS5pbm5lckhUTUwgPSBcInN1Y2Nlc2Z1bGx5IG1hZGUgcmVnaXN0ZXJcIlxyXG4gICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9fT5SZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbn1cclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsIlJlYWN0IiwidXNlU3RhdGUiLCJSZWdpc3RlciIsImVtYWlsIiwic2V0RW1haWwiLCJuYW1lIiwic2V0TmFtZSIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwbGFjZWhvbGRlciIsImlkIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwibGVuZ3RoIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/register.js"));
module.exports = __webpack_exports__;

})();