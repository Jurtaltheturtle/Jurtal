"use strict";
(() => {
var exports = {};
exports.id = 495;
exports.ids = [495];
exports.modules = {

/***/ 397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Register)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./pages/register.js



//import { PrismaClientValidationError } from '@prisma/client/runtime';
function Register() {
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)("");
    const { 0: name , 1: setName  } = (0,external_react_.useState)("");
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "register",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    onChange: (e)=>{
                        setName(e.target.value);
                    },
                    placeholder: "name",
                    id: "name"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    onChange: (e)=>{
                        setEmail(e.target.value);
                    },
                    id: "email ",
                    placeholder: "email"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    id: "info"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: ()=>{
                        if (email.length == 0 || name.length == 0) {} else {
                            fetch("api/register", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    "name": name,
                                    "email": email
                                })
                            }).then((res)=>res.json()
                            ).then((JSON)=>{
                                document.getElementById("info").innerHTML = "succesfully made register";
                            });
                        }
                    },
                    children: "Register"
                })
            ]
        })
    });
};


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(397));
module.exports = __webpack_exports__;

})();