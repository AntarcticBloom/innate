"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministratorScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AdministratorScalarFieldEnum;
(function (AdministratorScalarFieldEnum) {
    AdministratorScalarFieldEnum["id"] = "id";
    AdministratorScalarFieldEnum["hash"] = "hash";
    AdministratorScalarFieldEnum["salt"] = "salt";
    AdministratorScalarFieldEnum["magicLinkToken"] = "magicLinkToken";
    AdministratorScalarFieldEnum["email"] = "email";
    AdministratorScalarFieldEnum["banned"] = "banned";
    AdministratorScalarFieldEnum["username"] = "username";
    AdministratorScalarFieldEnum["verified"] = "verified";
    AdministratorScalarFieldEnum["createdAt"] = "createdAt";
    AdministratorScalarFieldEnum["updatedAt"] = "updatedAt";
})(AdministratorScalarFieldEnum || (exports.AdministratorScalarFieldEnum = AdministratorScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(AdministratorScalarFieldEnum, {
    name: "AdministratorScalarFieldEnum",
    description: undefined,
});
