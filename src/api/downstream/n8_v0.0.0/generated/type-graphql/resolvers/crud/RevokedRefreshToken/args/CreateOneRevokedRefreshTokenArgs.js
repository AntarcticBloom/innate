"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneRevokedRefreshTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RevokedRefreshTokenCreateInput_1 = require("../../../inputs/RevokedRefreshTokenCreateInput");
let CreateOneRevokedRefreshTokenArgs = class CreateOneRevokedRefreshTokenArgs {
    data;
};
exports.CreateOneRevokedRefreshTokenArgs = CreateOneRevokedRefreshTokenArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RevokedRefreshTokenCreateInput_1.RevokedRefreshTokenCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RevokedRefreshTokenCreateInput_1.RevokedRefreshTokenCreateInput)
], CreateOneRevokedRefreshTokenArgs.prototype, "data", void 0);
exports.CreateOneRevokedRefreshTokenArgs = CreateOneRevokedRefreshTokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneRevokedRefreshTokenArgs);
