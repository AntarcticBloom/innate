"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevokedRefreshTokenMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let RevokedRefreshTokenMaxOrderByAggregateInput = class RevokedRefreshTokenMaxOrderByAggregateInput {
    id;
    value;
    actualExpiration;
};
exports.RevokedRefreshTokenMaxOrderByAggregateInput = RevokedRefreshTokenMaxOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RevokedRefreshTokenMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RevokedRefreshTokenMaxOrderByAggregateInput.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RevokedRefreshTokenMaxOrderByAggregateInput.prototype, "actualExpiration", void 0);
exports.RevokedRefreshTokenMaxOrderByAggregateInput = RevokedRefreshTokenMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RevokedRefreshTokenMaxOrderByAggregateInput", {})
], RevokedRefreshTokenMaxOrderByAggregateInput);
