"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AuthorMinOrderByAggregateInput = class AuthorMinOrderByAggregateInput {
    id;
    name;
    createdAt;
    updatedAt;
};
exports.AuthorMinOrderByAggregateInput = AuthorMinOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AuthorMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AuthorMinOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AuthorMinOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AuthorMinOrderByAggregateInput.prototype, "updatedAt", void 0);
exports.AuthorMinOrderByAggregateInput = AuthorMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AuthorMinOrderByAggregateInput", {})
], AuthorMinOrderByAggregateInput);
