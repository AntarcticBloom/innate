"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevokedRefreshTokenOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RevokedRefreshTokenCountOrderByAggregateInput_1 = require("../inputs/RevokedRefreshTokenCountOrderByAggregateInput");
const RevokedRefreshTokenMaxOrderByAggregateInput_1 = require("../inputs/RevokedRefreshTokenMaxOrderByAggregateInput");
const RevokedRefreshTokenMinOrderByAggregateInput_1 = require("../inputs/RevokedRefreshTokenMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let RevokedRefreshTokenOrderByWithAggregationInput = class RevokedRefreshTokenOrderByWithAggregationInput {
    id;
    value;
    actualExpiration;
    _count;
    _max;
    _min;
};
exports.RevokedRefreshTokenOrderByWithAggregationInput = RevokedRefreshTokenOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RevokedRefreshTokenOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RevokedRefreshTokenOrderByWithAggregationInput.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RevokedRefreshTokenOrderByWithAggregationInput.prototype, "actualExpiration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RevokedRefreshTokenCountOrderByAggregateInput_1.RevokedRefreshTokenCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RevokedRefreshTokenCountOrderByAggregateInput_1.RevokedRefreshTokenCountOrderByAggregateInput)
], RevokedRefreshTokenOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RevokedRefreshTokenMaxOrderByAggregateInput_1.RevokedRefreshTokenMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RevokedRefreshTokenMaxOrderByAggregateInput_1.RevokedRefreshTokenMaxOrderByAggregateInput)
], RevokedRefreshTokenOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RevokedRefreshTokenMinOrderByAggregateInput_1.RevokedRefreshTokenMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RevokedRefreshTokenMinOrderByAggregateInput_1.RevokedRefreshTokenMinOrderByAggregateInput)
], RevokedRefreshTokenOrderByWithAggregationInput.prototype, "_min", void 0);
exports.RevokedRefreshTokenOrderByWithAggregationInput = RevokedRefreshTokenOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RevokedRefreshTokenOrderByWithAggregationInput", {})
], RevokedRefreshTokenOrderByWithAggregationInput);
