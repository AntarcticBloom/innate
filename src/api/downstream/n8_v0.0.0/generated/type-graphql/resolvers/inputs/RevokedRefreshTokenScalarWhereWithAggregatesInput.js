"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevokedRefreshTokenScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
const UuidWithAggregatesFilter_1 = require("../inputs/UuidWithAggregatesFilter");
let RevokedRefreshTokenScalarWhereWithAggregatesInput = class RevokedRefreshTokenScalarWhereWithAggregatesInput {
    AND;
    OR;
    NOT;
    id;
    value;
    actualExpiration;
};
exports.RevokedRefreshTokenScalarWhereWithAggregatesInput = RevokedRefreshTokenScalarWhereWithAggregatesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RevokedRefreshTokenScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RevokedRefreshTokenScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RevokedRefreshTokenScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RevokedRefreshTokenScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RevokedRefreshTokenScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RevokedRefreshTokenScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidWithAggregatesFilter_1.UuidWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidWithAggregatesFilter_1.UuidWithAggregatesFilter)
], RevokedRefreshTokenScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], RevokedRefreshTokenScalarWhereWithAggregatesInput.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], RevokedRefreshTokenScalarWhereWithAggregatesInput.prototype, "actualExpiration", void 0);
exports.RevokedRefreshTokenScalarWhereWithAggregatesInput = RevokedRefreshTokenScalarWhereWithAggregatesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RevokedRefreshTokenScalarWhereWithAggregatesInput", {})
], RevokedRefreshTokenScalarWhereWithAggregatesInput);
