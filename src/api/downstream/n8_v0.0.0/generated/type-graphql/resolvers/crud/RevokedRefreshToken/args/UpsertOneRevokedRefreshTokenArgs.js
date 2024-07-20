"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneRevokedRefreshTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RevokedRefreshTokenCreateInput_1 = require("../../../inputs/RevokedRefreshTokenCreateInput");
const RevokedRefreshTokenUpdateInput_1 = require("../../../inputs/RevokedRefreshTokenUpdateInput");
const RevokedRefreshTokenWhereUniqueInput_1 = require("../../../inputs/RevokedRefreshTokenWhereUniqueInput");
let UpsertOneRevokedRefreshTokenArgs = class UpsertOneRevokedRefreshTokenArgs {
    where;
    create;
    update;
};
exports.UpsertOneRevokedRefreshTokenArgs = UpsertOneRevokedRefreshTokenArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RevokedRefreshTokenWhereUniqueInput_1.RevokedRefreshTokenWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RevokedRefreshTokenWhereUniqueInput_1.RevokedRefreshTokenWhereUniqueInput)
], UpsertOneRevokedRefreshTokenArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RevokedRefreshTokenCreateInput_1.RevokedRefreshTokenCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RevokedRefreshTokenCreateInput_1.RevokedRefreshTokenCreateInput)
], UpsertOneRevokedRefreshTokenArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RevokedRefreshTokenUpdateInput_1.RevokedRefreshTokenUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RevokedRefreshTokenUpdateInput_1.RevokedRefreshTokenUpdateInput)
], UpsertOneRevokedRefreshTokenArgs.prototype, "update", void 0);
exports.UpsertOneRevokedRefreshTokenArgs = UpsertOneRevokedRefreshTokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneRevokedRefreshTokenArgs);
