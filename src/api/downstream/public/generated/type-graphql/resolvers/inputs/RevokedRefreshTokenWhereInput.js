"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevokedRefreshTokenWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UuidFilter_1 = require("../inputs/UuidFilter");
let RevokedRefreshTokenWhereInput = class RevokedRefreshTokenWhereInput {
    AND;
    OR;
    NOT;
    id;
    value;
    actualExpiration;
};
exports.RevokedRefreshTokenWhereInput = RevokedRefreshTokenWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RevokedRefreshTokenWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RevokedRefreshTokenWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RevokedRefreshTokenWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RevokedRefreshTokenWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RevokedRefreshTokenWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RevokedRefreshTokenWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidFilter_1.UuidFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidFilter_1.UuidFilter)
], RevokedRefreshTokenWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], RevokedRefreshTokenWhereInput.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], RevokedRefreshTokenWhereInput.prototype, "actualExpiration", void 0);
exports.RevokedRefreshTokenWhereInput = RevokedRefreshTokenWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RevokedRefreshTokenWhereInput", {})
], RevokedRefreshTokenWhereInput);
