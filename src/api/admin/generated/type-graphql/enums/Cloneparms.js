"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cloneparms = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Cloneparms;
(function (Cloneparms) {
    Cloneparms["DATA"] = "DATA";
    Cloneparms["NODATA"] = "NODATA";
    Cloneparms["DDLONLY"] = "DDLONLY";
    Cloneparms["NOOWNER"] = "NOOWNER";
    Cloneparms["NOACL"] = "NOACL";
    Cloneparms["VERBOSE"] = "VERBOSE";
    Cloneparms["DEBUG"] = "DEBUG";
    Cloneparms["FILECOPY"] = "FILECOPY";
})(Cloneparms || (exports.Cloneparms = Cloneparms = {}));
TypeGraphQL.registerEnumType(Cloneparms, {
    name: "Cloneparms",
    description: undefined,
});
