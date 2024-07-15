"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorListRelationFilter_1 = require("../inputs/BookAuthorListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UuidFilter_1 = require("../inputs/UuidFilter");
let BookWhereInput = class BookWhereInput {
    AND;
    OR;
    NOT;
    id;
    name;
    createdAt;
    updatedAt;
    bookAuthors;
};
exports.BookWhereInput = BookWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidFilter_1.UuidFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidFilter_1.UuidFilter)
], BookWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BookWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], BookWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], BookWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorListRelationFilter_1.BookAuthorListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorListRelationFilter_1.BookAuthorListRelationFilter)
], BookWhereInput.prototype, "bookAuthors", void 0);
exports.BookWhereInput = BookWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookWhereInput", {})
], BookWhereInput);
