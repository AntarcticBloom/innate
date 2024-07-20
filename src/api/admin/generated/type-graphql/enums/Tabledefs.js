"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabledefs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Tabledefs;
(function (Tabledefs) {
    Tabledefs["PKEY_INTERNAL"] = "PKEY_INTERNAL";
    Tabledefs["PKEY_EXTERNAL"] = "PKEY_EXTERNAL";
    Tabledefs["FKEYS_INTERNAL"] = "FKEYS_INTERNAL";
    Tabledefs["FKEYS_EXTERNAL"] = "FKEYS_EXTERNAL";
    Tabledefs["COMMENTS"] = "COMMENTS";
    Tabledefs["FKEYS_NONE"] = "FKEYS_NONE";
    Tabledefs["INCLUDE_TRIGGERS"] = "INCLUDE_TRIGGERS";
    Tabledefs["NO_TRIGGERS"] = "NO_TRIGGERS";
})(Tabledefs || (exports.Tabledefs = Tabledefs = {}));
TypeGraphQL.registerEnumType(Tabledefs, {
    name: "Tabledefs",
    description: undefined,
});
