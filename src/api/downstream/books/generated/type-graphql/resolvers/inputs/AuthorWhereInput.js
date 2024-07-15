"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorListRelationFilter_1 = require("../inputs/BookAuthorListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UuidFilter_1 = require("../inputs/UuidFilter");
let AuthorWhereInput = class AuthorWhereInput {
    AND;
    OR;
    NOT;
    id;
    name;
    createdAt;
    updatedAt;
    bookAuthors;
};
exports.AuthorWhereInput = AuthorWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AuthorWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AuthorWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AuthorWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AuthorWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AuthorWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AuthorWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidFilter_1.UuidFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidFilter_1.UuidFilter)
], AuthorWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AuthorWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AuthorWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AuthorWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorListRelationFilter_1.BookAuthorListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorListRelationFilter_1.BookAuthorListRelationFilter)
], AuthorWhereInput.prototype, "bookAuthors", void 0);
exports.AuthorWhereInput = AuthorWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AuthorWhereInput", {})
], AuthorWhereInput);
