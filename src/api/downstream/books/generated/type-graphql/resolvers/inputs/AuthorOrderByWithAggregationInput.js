"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorCountOrderByAggregateInput_1 = require("../inputs/AuthorCountOrderByAggregateInput");
const AuthorMaxOrderByAggregateInput_1 = require("../inputs/AuthorMaxOrderByAggregateInput");
const AuthorMinOrderByAggregateInput_1 = require("../inputs/AuthorMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AuthorOrderByWithAggregationInput = class AuthorOrderByWithAggregationInput {
    id;
    name;
    createdAt;
    updatedAt;
    _count;
    _max;
    _min;
};
exports.AuthorOrderByWithAggregationInput = AuthorOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AuthorOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AuthorOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AuthorOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AuthorOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorCountOrderByAggregateInput_1.AuthorCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorCountOrderByAggregateInput_1.AuthorCountOrderByAggregateInput)
], AuthorOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorMaxOrderByAggregateInput_1.AuthorMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorMaxOrderByAggregateInput_1.AuthorMaxOrderByAggregateInput)
], AuthorOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorMinOrderByAggregateInput_1.AuthorMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorMinOrderByAggregateInput_1.AuthorMinOrderByAggregateInput)
], AuthorOrderByWithAggregationInput.prototype, "_min", void 0);
exports.AuthorOrderByWithAggregationInput = AuthorOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AuthorOrderByWithAggregationInput", {})
], AuthorOrderByWithAggregationInput);
