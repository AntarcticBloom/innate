"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyRevokedRefreshTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RevokedRefreshTokenWhereInput_1 = require("../../../inputs/RevokedRefreshTokenWhereInput");
let DeleteManyRevokedRefreshTokenArgs = class DeleteManyRevokedRefreshTokenArgs {
    where;
};
exports.DeleteManyRevokedRefreshTokenArgs = DeleteManyRevokedRefreshTokenArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RevokedRefreshTokenWhereInput_1.RevokedRefreshTokenWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RevokedRefreshTokenWhereInput_1.RevokedRefreshTokenWhereInput)
], DeleteManyRevokedRefreshTokenArgs.prototype, "where", void 0);
exports.DeleteManyRevokedRefreshTokenArgs = DeleteManyRevokedRefreshTokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyRevokedRefreshTokenArgs);
