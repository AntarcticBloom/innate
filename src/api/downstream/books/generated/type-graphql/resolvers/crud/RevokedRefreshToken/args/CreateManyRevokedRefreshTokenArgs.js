"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyRevokedRefreshTokenArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RevokedRefreshTokenCreateManyInput_1 = require("../../../inputs/RevokedRefreshTokenCreateManyInput");
let CreateManyRevokedRefreshTokenArgs = class CreateManyRevokedRefreshTokenArgs {
    data;
    skipDuplicates;
};
exports.CreateManyRevokedRefreshTokenArgs = CreateManyRevokedRefreshTokenArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RevokedRefreshTokenCreateManyInput_1.RevokedRefreshTokenCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyRevokedRefreshTokenArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyRevokedRefreshTokenArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyRevokedRefreshTokenArgs = CreateManyRevokedRefreshTokenArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyRevokedRefreshTokenArgs);
