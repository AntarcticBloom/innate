"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByRevokedRefreshTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RevokedRefreshTokenOrderByWithAggregationInput_1 = require("../../../inputs/RevokedRefreshTokenOrderByWithAggregationInput");
const RevokedRefreshTokenScalarWhereWithAggregatesInput_1 = require("../../../inputs/RevokedRefreshTokenScalarWhereWithAggregatesInput");
const RevokedRefreshTokenWhereInput_1 = require("../../../inputs/RevokedRefreshTokenWhereInput");
const RevokedRefreshTokenScalarFieldEnum_1 = require("../../../../enums/RevokedRefreshTokenScalarFieldEnum");
let GroupByRevokedRefreshTokenArgs = class GroupByRevokedRefreshTokenArgs {
    where;
    orderBy;
    by;
    having;
    take;
    skip;
};
exports.GroupByRevokedRefreshTokenArgs = GroupByRevokedRefreshTokenArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RevokedRefreshTokenWhereInput_1.RevokedRefreshTokenWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RevokedRefreshTokenWhereInput_1.RevokedRefreshTokenWhereInput)
], GroupByRevokedRefreshTokenArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RevokedRefreshTokenOrderByWithAggregationInput_1.RevokedRefreshTokenOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByRevokedRefreshTokenArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RevokedRefreshTokenScalarFieldEnum_1.RevokedRefreshTokenScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByRevokedRefreshTokenArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RevokedRefreshTokenScalarWhereWithAggregatesInput_1.RevokedRefreshTokenScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RevokedRefreshTokenScalarWhereWithAggregatesInput_1.RevokedRefreshTokenScalarWhereWithAggregatesInput)
], GroupByRevokedRefreshTokenArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByRevokedRefreshTokenArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByRevokedRefreshTokenArgs.prototype, "skip", void 0);
exports.GroupByRevokedRefreshTokenArgs = GroupByRevokedRefreshTokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByRevokedRefreshTokenArgs);
