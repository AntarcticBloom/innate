"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var UserScalarFieldEnum;
(function (UserScalarFieldEnum) {
    UserScalarFieldEnum["id"] = "id";
    UserScalarFieldEnum["hash"] = "hash";
    UserScalarFieldEnum["salt"] = "salt";
    UserScalarFieldEnum["magicLinkToken"] = "magicLinkToken";
    UserScalarFieldEnum["email"] = "email";
    UserScalarFieldEnum["banned"] = "banned";
    UserScalarFieldEnum["username"] = "username";
    UserScalarFieldEnum["verified"] = "verified";
    UserScalarFieldEnum["createdAt"] = "createdAt";
    UserScalarFieldEnum["updatedAt"] = "updatedAt";
})(UserScalarFieldEnum || (exports.UserScalarFieldEnum = UserScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
    name: "UserScalarFieldEnum",
    description: undefined,
});
