"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevokedRefreshTokenScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var RevokedRefreshTokenScalarFieldEnum;
(function (RevokedRefreshTokenScalarFieldEnum) {
    RevokedRefreshTokenScalarFieldEnum["id"] = "id";
    RevokedRefreshTokenScalarFieldEnum["value"] = "value";
    RevokedRefreshTokenScalarFieldEnum["actualExpiration"] = "actualExpiration";
})(RevokedRefreshTokenScalarFieldEnum || (exports.RevokedRefreshTokenScalarFieldEnum = RevokedRefreshTokenScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(RevokedRefreshTokenScalarFieldEnum, {
    name: "RevokedRefreshTokenScalarFieldEnum",
    description: undefined,
});
