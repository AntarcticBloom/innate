"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRevokedRefreshTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RevokedRefreshTokenOrderByWithRelationInput_1 = require("../../../inputs/RevokedRefreshTokenOrderByWithRelationInput");
const RevokedRefreshTokenWhereInput_1 = require("../../../inputs/RevokedRefreshTokenWhereInput");
const RevokedRefreshTokenWhereUniqueInput_1 = require("../../../inputs/RevokedRefreshTokenWhereUniqueInput");
let AggregateRevokedRefreshTokenArgs = class AggregateRevokedRefreshTokenArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
};
exports.AggregateRevokedRefreshTokenArgs = AggregateRevokedRefreshTokenArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RevokedRefreshTokenWhereInput_1.RevokedRefreshTokenWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RevokedRefreshTokenWhereInput_1.RevokedRefreshTokenWhereInput)
], AggregateRevokedRefreshTokenArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RevokedRefreshTokenOrderByWithRelationInput_1.RevokedRefreshTokenOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateRevokedRefreshTokenArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RevokedRefreshTokenWhereUniqueInput_1.RevokedRefreshTokenWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RevokedRefreshTokenWhereUniqueInput_1.RevokedRefreshTokenWhereUniqueInput)
], AggregateRevokedRefreshTokenArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRevokedRefreshTokenArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRevokedRefreshTokenArgs.prototype, "skip", void 0);
exports.AggregateRevokedRefreshTokenArgs = AggregateRevokedRefreshTokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateRevokedRefreshTokenArgs);
