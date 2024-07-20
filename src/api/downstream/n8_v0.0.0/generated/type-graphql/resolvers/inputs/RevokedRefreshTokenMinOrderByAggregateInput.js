"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevokedRefreshTokenMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let RevokedRefreshTokenMinOrderByAggregateInput = class RevokedRefreshTokenMinOrderByAggregateInput {
    id;
    value;
    actualExpiration;
};
exports.RevokedRefreshTokenMinOrderByAggregateInput = RevokedRefreshTokenMinOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RevokedRefreshTokenMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RevokedRefreshTokenMinOrderByAggregateInput.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RevokedRefreshTokenMinOrderByAggregateInput.prototype, "actualExpiration", void 0);
exports.RevokedRefreshTokenMinOrderByAggregateInput = RevokedRefreshTokenMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RevokedRefreshTokenMinOrderByAggregateInput", {})
], RevokedRefreshTokenMinOrderByAggregateInput);
