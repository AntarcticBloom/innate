"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AuthorScalarFieldEnum;
(function (AuthorScalarFieldEnum) {
    AuthorScalarFieldEnum["id"] = "id";
    AuthorScalarFieldEnum["name"] = "name";
    AuthorScalarFieldEnum["createdAt"] = "createdAt";
    AuthorScalarFieldEnum["updatedAt"] = "updatedAt";
})(AuthorScalarFieldEnum || (exports.AuthorScalarFieldEnum = AuthorScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(AuthorScalarFieldEnum, {
    name: "AuthorScalarFieldEnum",
    description: undefined,
});
