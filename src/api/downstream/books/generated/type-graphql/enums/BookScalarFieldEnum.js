"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var BookScalarFieldEnum;
(function (BookScalarFieldEnum) {
    BookScalarFieldEnum["id"] = "id";
    BookScalarFieldEnum["name"] = "name";
    BookScalarFieldEnum["createdAt"] = "createdAt";
    BookScalarFieldEnum["updatedAt"] = "updatedAt";
})(BookScalarFieldEnum || (exports.BookScalarFieldEnum = BookScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(BookScalarFieldEnum, {
    name: "BookScalarFieldEnum",
    description: undefined,
});
