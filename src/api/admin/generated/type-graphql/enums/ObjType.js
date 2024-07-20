"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ObjType;
(function (ObjType) {
    ObjType["TABLE"] = "TABLE";
    ObjType["VIEW"] = "VIEW";
    ObjType["COLUMN"] = "COLUMN";
    ObjType["SEQUENCE"] = "SEQUENCE";
    ObjType["FUNCTION"] = "FUNCTION";
    ObjType["SCHEMA"] = "SCHEMA";
    ObjType["DATABASE"] = "DATABASE";
})(ObjType || (exports.ObjType = ObjType = {}));
TypeGraphQL.registerEnumType(ObjType, {
    name: "ObjType",
    description: undefined,
});
