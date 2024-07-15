"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AuthorMaxOrderByAggregateInput = class AuthorMaxOrderByAggregateInput {
    id;
    name;
    createdAt;
    updatedAt;
};
exports.AuthorMaxOrderByAggregateInput = AuthorMaxOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AuthorMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AuthorMaxOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AuthorMaxOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AuthorMaxOrderByAggregateInput.prototype, "updatedAt", void 0);
exports.AuthorMaxOrderByAggregateInput = AuthorMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AuthorMaxOrderByAggregateInput", {})
], AuthorMaxOrderByAggregateInput);
