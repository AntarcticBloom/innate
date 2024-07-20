"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministratorWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolNullableFilter_1 = require("../inputs/BoolNullableFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UuidFilter_1 = require("../inputs/UuidFilter");
let AdministratorWhereInput = class AdministratorWhereInput {
    AND;
    OR;
    NOT;
    id;
    email;
    banned;
    username;
    verified;
    createdAt;
    updatedAt;
};
exports.AdministratorWhereInput = AdministratorWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdministratorWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AdministratorWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdministratorWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AdministratorWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdministratorWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AdministratorWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidFilter_1.UuidFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidFilter_1.UuidFilter)
], AdministratorWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AdministratorWhereInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], AdministratorWhereInput.prototype, "banned", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AdministratorWhereInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], AdministratorWhereInput.prototype, "verified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AdministratorWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AdministratorWhereInput.prototype, "updatedAt", void 0);
exports.AdministratorWhereInput = AdministratorWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AdministratorWhereInput", {})
], AdministratorWhereInput);
