"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevokedRefreshTokenWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const RevokedRefreshTokenWhereInput_1 = require("../inputs/RevokedRefreshTokenWhereInput");
let RevokedRefreshTokenWhereUniqueInput = class RevokedRefreshTokenWhereUniqueInput {
    id;
    value;
    AND;
    OR;
    NOT;
    actualExpiration;
};
exports.RevokedRefreshTokenWhereUniqueInput = RevokedRefreshTokenWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RevokedRefreshTokenWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RevokedRefreshTokenWhereUniqueInput.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RevokedRefreshTokenWhereInput_1.RevokedRefreshTokenWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RevokedRefreshTokenWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RevokedRefreshTokenWhereInput_1.RevokedRefreshTokenWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RevokedRefreshTokenWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RevokedRefreshTokenWhereInput_1.RevokedRefreshTokenWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RevokedRefreshTokenWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], RevokedRefreshTokenWhereUniqueInput.prototype, "actualExpiration", void 0);
exports.RevokedRefreshTokenWhereUniqueInput = RevokedRefreshTokenWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RevokedRefreshTokenWhereUniqueInput", {})
], RevokedRefreshTokenWhereUniqueInput);
