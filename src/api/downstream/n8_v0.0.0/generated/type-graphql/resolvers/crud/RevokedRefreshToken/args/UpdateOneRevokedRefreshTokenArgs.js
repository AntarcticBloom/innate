"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneRevokedRefreshTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RevokedRefreshTokenUpdateInput_1 = require("../../../inputs/RevokedRefreshTokenUpdateInput");
const RevokedRefreshTokenWhereUniqueInput_1 = require("../../../inputs/RevokedRefreshTokenWhereUniqueInput");
let UpdateOneRevokedRefreshTokenArgs = class UpdateOneRevokedRefreshTokenArgs {
    data;
    where;
};
exports.UpdateOneRevokedRefreshTokenArgs = UpdateOneRevokedRefreshTokenArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RevokedRefreshTokenUpdateInput_1.RevokedRefreshTokenUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RevokedRefreshTokenUpdateInput_1.RevokedRefreshTokenUpdateInput)
], UpdateOneRevokedRefreshTokenArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RevokedRefreshTokenWhereUniqueInput_1.RevokedRefreshTokenWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RevokedRefreshTokenWhereUniqueInput_1.RevokedRefreshTokenWhereUniqueInput)
], UpdateOneRevokedRefreshTokenArgs.prototype, "where", void 0);
exports.UpdateOneRevokedRefreshTokenArgs = UpdateOneRevokedRefreshTokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneRevokedRefreshTokenArgs);
