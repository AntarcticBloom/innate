"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorOrderByRelationAggregateInput_1 = require("../inputs/BookAuthorOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let BookOrderByWithRelationInput = class BookOrderByWithRelationInput {
    id;
    name;
    createdAt;
    updatedAt;
    bookAuthors;
};
exports.BookOrderByWithRelationInput = BookOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorOrderByRelationAggregateInput_1.BookAuthorOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorOrderByRelationAggregateInput_1.BookAuthorOrderByRelationAggregateInput)
], BookOrderByWithRelationInput.prototype, "bookAuthors", void 0);
exports.BookOrderByWithRelationInput = BookOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookOrderByWithRelationInput", {})
], BookOrderByWithRelationInput);
