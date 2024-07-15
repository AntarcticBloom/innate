"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var BookAuthorScalarFieldEnum;
(function (BookAuthorScalarFieldEnum) {
    BookAuthorScalarFieldEnum["bookId"] = "bookId";
    BookAuthorScalarFieldEnum["authorId"] = "authorId";
})(BookAuthorScalarFieldEnum || (exports.BookAuthorScalarFieldEnum = BookAuthorScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(BookAuthorScalarFieldEnum, {
    name: "BookAuthorScalarFieldEnum",
    description: undefined,
});
