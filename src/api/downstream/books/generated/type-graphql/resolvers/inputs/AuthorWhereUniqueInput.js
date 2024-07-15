"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorWhereInput_1 = require("../inputs/AuthorWhereInput");
const BookAuthorListRelationFilter_1 = require("../inputs/BookAuthorListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
let AuthorWhereUniqueInput = class AuthorWhereUniqueInput {
    id;
    name;
    AND;
    OR;
    NOT;
    createdAt;
    updatedAt;
    bookAuthors;
};
exports.AuthorWhereUniqueInput = AuthorWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AuthorWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AuthorWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AuthorWhereInput_1.AuthorWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AuthorWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AuthorWhereInput_1.AuthorWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AuthorWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AuthorWhereInput_1.AuthorWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AuthorWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AuthorWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AuthorWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorListRelationFilter_1.BookAuthorListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorListRelationFilter_1.BookAuthorListRelationFilter)
], AuthorWhereUniqueInput.prototype, "bookAuthors", void 0);
exports.AuthorWhereUniqueInput = AuthorWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AuthorWhereUniqueInput", {})
], AuthorWhereUniqueInput);
