"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AuthorCountOrderByAggregateInput = class AuthorCountOrderByAggregateInput {
    id;
    name;
    createdAt;
    updatedAt;
};
exports.AuthorCountOrderByAggregateInput = AuthorCountOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AuthorCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AuthorCountOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AuthorCountOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AuthorCountOrderByAggregateInput.prototype, "updatedAt", void 0);
exports.AuthorCountOrderByAggregateInput = AuthorCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AuthorCountOrderByAggregateInput", {})
], AuthorCountOrderByAggregateInput);
