"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueRevokedRefreshTokenOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RevokedRefreshTokenWhereUniqueInput_1 = require("../../../inputs/RevokedRefreshTokenWhereUniqueInput");
let FindUniqueRevokedRefreshTokenOrThrowArgs = class FindUniqueRevokedRefreshTokenOrThrowArgs {
    where;
};
exports.FindUniqueRevokedRefreshTokenOrThrowArgs = FindUniqueRevokedRefreshTokenOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RevokedRefreshTokenWhereUniqueInput_1.RevokedRefreshTokenWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RevokedRefreshTokenWhereUniqueInput_1.RevokedRefreshTokenWhereUniqueInput)
], FindUniqueRevokedRefreshTokenOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueRevokedRefreshTokenOrThrowArgs = FindUniqueRevokedRefreshTokenOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueRevokedRefreshTokenOrThrowArgs);
