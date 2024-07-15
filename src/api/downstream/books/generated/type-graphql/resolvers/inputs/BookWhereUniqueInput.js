"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorListRelationFilter_1 = require("../inputs/BookAuthorListRelationFilter");
const BookWhereInput_1 = require("../inputs/BookWhereInput");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
let BookWhereUniqueInput = class BookWhereUniqueInput {
    id;
    name;
    AND;
    OR;
    NOT;
    createdAt;
    updatedAt;
    bookAuthors;
};
exports.BookWhereUniqueInput = BookWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookWhereUniqueInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookWhereInput_1.BookWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookWhereInput_1.BookWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookWhereInput_1.BookWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], BookWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], BookWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorListRelationFilter_1.BookAuthorListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorListRelationFilter_1.BookAuthorListRelationFilter)
], BookWhereUniqueInput.prototype, "bookAuthors", void 0);
exports.BookWhereUniqueInput = BookWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookWhereUniqueInput", {})
], BookWhereUniqueInput);
