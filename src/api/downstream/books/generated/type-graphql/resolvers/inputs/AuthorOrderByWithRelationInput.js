"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorOrderByRelationAggregateInput_1 = require("../inputs/BookAuthorOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AuthorOrderByWithRelationInput = class AuthorOrderByWithRelationInput {
    id;
    name;
    createdAt;
    updatedAt;
    bookAuthors;
};
exports.AuthorOrderByWithRelationInput = AuthorOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AuthorOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AuthorOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AuthorOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AuthorOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorOrderByRelationAggregateInput_1.BookAuthorOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorOrderByRelationAggregateInput_1.BookAuthorOrderByRelationAggregateInput)
], AuthorOrderByWithRelationInput.prototype, "bookAuthors", void 0);
exports.AuthorOrderByWithRelationInput = AuthorOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AuthorOrderByWithRelationInput", {})
], AuthorOrderByWithRelationInput);
