"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstRevokedRefreshTokenOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RevokedRefreshTokenOrderByWithRelationInput_1 = require("../../../inputs/RevokedRefreshTokenOrderByWithRelationInput");
const RevokedRefreshTokenWhereInput_1 = require("../../../inputs/RevokedRefreshTokenWhereInput");
const RevokedRefreshTokenWhereUniqueInput_1 = require("../../../inputs/RevokedRefreshTokenWhereUniqueInput");
const RevokedRefreshTokenScalarFieldEnum_1 = require("../../../../enums/RevokedRefreshTokenScalarFieldEnum");
let FindFirstRevokedRefreshTokenOrThrowArgs = class FindFirstRevokedRefreshTokenOrThrowArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
    distinct;
};
exports.FindFirstRevokedRefreshTokenOrThrowArgs = FindFirstRevokedRefreshTokenOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RevokedRefreshTokenWhereInput_1.RevokedRefreshTokenWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RevokedRefreshTokenWhereInput_1.RevokedRefreshTokenWhereInput)
], FindFirstRevokedRefreshTokenOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RevokedRefreshTokenOrderByWithRelationInput_1.RevokedRefreshTokenOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstRevokedRefreshTokenOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RevokedRefreshTokenWhereUniqueInput_1.RevokedRefreshTokenWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RevokedRefreshTokenWhereUniqueInput_1.RevokedRefreshTokenWhereUniqueInput)
], FindFirstRevokedRefreshTokenOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstRevokedRefreshTokenOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstRevokedRefreshTokenOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RevokedRefreshTokenScalarFieldEnum_1.RevokedRefreshTokenScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstRevokedRefreshTokenOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstRevokedRefreshTokenOrThrowArgs = FindFirstRevokedRefreshTokenOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstRevokedRefreshTokenOrThrowArgs);
