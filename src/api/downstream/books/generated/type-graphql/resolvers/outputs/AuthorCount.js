"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorCountBookAuthorsArgs_1 = require("./args/AuthorCountBookAuthorsArgs");
let AuthorCount = class AuthorCount {
    bookAuthors;
    getBookAuthors(root, args) {
        return root.bookAuthors;
    }
};
exports.AuthorCount = AuthorCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "bookAuthors",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [AuthorCount, AuthorCountBookAuthorsArgs_1.AuthorCountBookAuthorsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], AuthorCount.prototype, "getBookAuthors", null);
exports.AuthorCount = AuthorCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AuthorCount", {})
], AuthorCount);
