"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorCount_1 = require("../resolvers/outputs/AuthorCount");
let Author = class Author {
    id;
    name;
    createdAt;
    updatedAt;
    bookAuthors;
    _count;
};
exports.Author = Author;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Author.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Author.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Author.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Author.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorCount_1.AuthorCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorCount_1.AuthorCount)
], Author.prototype, "_count", void 0);
exports.Author = Author = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Author", {})
], Author);
