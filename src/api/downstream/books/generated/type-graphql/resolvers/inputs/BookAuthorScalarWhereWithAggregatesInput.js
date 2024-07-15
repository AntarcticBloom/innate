"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UuidWithAggregatesFilter_1 = require("../inputs/UuidWithAggregatesFilter");
let BookAuthorScalarWhereWithAggregatesInput = class BookAuthorScalarWhereWithAggregatesInput {
    AND;
    OR;
    NOT;
    bookId;
    authorId;
};
exports.BookAuthorScalarWhereWithAggregatesInput = BookAuthorScalarWhereWithAggregatesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidWithAggregatesFilter_1.UuidWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidWithAggregatesFilter_1.UuidWithAggregatesFilter)
], BookAuthorScalarWhereWithAggregatesInput.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidWithAggregatesFilter_1.UuidWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidWithAggregatesFilter_1.UuidWithAggregatesFilter)
], BookAuthorScalarWhereWithAggregatesInput.prototype, "authorId", void 0);
exports.BookAuthorScalarWhereWithAggregatesInput = BookAuthorScalarWhereWithAggregatesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorScalarWhereWithAggregatesInput", {})
], BookAuthorScalarWhereWithAggregatesInput);
