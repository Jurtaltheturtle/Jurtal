"use strict";
(() => {
var exports = {};
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handle)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./pages/api/register.js

const prisma = new client_namespaceObject.PrismaClient();
async function handle(req, res) {
    // console.log(req.body);
    await prisma.$connect();
    if (await prisma.user.findFirst({
        where: {
            email: req.body.email
        }
    })) {
        res.status(404).json({
            error: "User With Email Found"
        });
    } else {
        await prisma.user.create({
            data: {
                name: req.body.name,
                email: req.body.email
            }
        }).then((resp)=>{
            // console.log(resp);
            res.status(200).json(JSON.stringify({
                name: resp.name,
                email: resp.email
            }));
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(188));
module.exports = __webpack_exports__;

})();