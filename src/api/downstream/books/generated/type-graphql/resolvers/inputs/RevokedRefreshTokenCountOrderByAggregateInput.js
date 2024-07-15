"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevokedRefreshTokenCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let RevokedRefreshTokenCountOrderByAggregateInput = class RevokedRefreshTokenCountOrderByAggregateInput {
    id;
    value;
    actualExpiration;
};
exports.RevokedRefreshTokenCountOrderByAggregateInput = RevokedRefreshTokenCountOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RevokedRefreshTokenCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RevokedRefreshTokenCountOrderByAggregateInput.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RevokedRefreshTokenCountOrderByAggregateInput.prototype, "actualExpiration", void 0);
exports.RevokedRefreshTokenCountOrderByAggregateInput = RevokedRefreshTokenCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RevokedRefreshTokenCountOrderByAggregateInput", {})
], RevokedRefreshTokenCountOrderByAggregateInput);
