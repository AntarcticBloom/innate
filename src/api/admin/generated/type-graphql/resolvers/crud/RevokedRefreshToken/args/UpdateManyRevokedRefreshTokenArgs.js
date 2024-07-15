"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyRevokedRefreshTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RevokedRefreshTokenUpdateManyMutationInput_1 = require("../../../inputs/RevokedRefreshTokenUpdateManyMutationInput");
const RevokedRefreshTokenWhereInput_1 = require("../../../inputs/RevokedRefreshTokenWhereInput");
let UpdateManyRevokedRefreshTokenArgs = class UpdateManyRevokedRefreshTokenArgs {
    data;
    where;
};
exports.UpdateManyRevokedRefreshTokenArgs = UpdateManyRevokedRefreshTokenArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RevokedRefreshTokenUpdateManyMutationInput_1.RevokedRefreshTokenUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RevokedRefreshTokenUpdateManyMutationInput_1.RevokedRefreshTokenUpdateManyMutationInput)
], UpdateManyRevokedRefreshTokenArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RevokedRefreshTokenWhereInput_1.RevokedRefreshTokenWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RevokedRefreshTokenWhereInput_1.RevokedRefreshTokenWhereInput)
], UpdateManyRevokedRefreshTokenArgs.prototype, "where", void 0);
exports.UpdateManyRevokedRefreshTokenArgs = UpdateManyRevokedRefreshTokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyRevokedRefreshTokenArgs);
