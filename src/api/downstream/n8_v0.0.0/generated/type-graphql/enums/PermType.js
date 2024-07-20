"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PermType;
(function (PermType) {
    PermType["SELECT"] = "SELECT";
    PermType["INSERT"] = "INSERT";
    PermType["UPDATE"] = "UPDATE";
    PermType["DELETE"] = "DELETE";
    PermType["TRUNCATE"] = "TRUNCATE";
    PermType["REFERENCES"] = "REFERENCES";
    PermType["TRIGGER"] = "TRIGGER";
    PermType["USAGE"] = "USAGE";
    PermType["CREATE"] = "CREATE";
    PermType["EXECUTE"] = "EXECUTE";
    PermType["CONNECT"] = "CONNECT";
    PermType["TEMPORARY"] = "TEMPORARY";
})(PermType || (exports.PermType = PermType = {}));
TypeGraphQL.registerEnumType(PermType, {
    name: "PermType",
    description: undefined,
});
