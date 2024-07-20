"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministratorWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdministratorWhereInput_1 = require("../inputs/AdministratorWhereInput");
const BoolNullableFilter_1 = require("../inputs/BoolNullableFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
let AdministratorWhereUniqueInput = class AdministratorWhereUniqueInput {
    id;
    email;
    username;
    AND;
    OR;
    NOT;
    banned;
    verified;
    createdAt;
    updatedAt;
};
exports.AdministratorWhereUniqueInput = AdministratorWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorWhereUniqueInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorWhereUniqueInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdministratorWhereInput_1.AdministratorWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AdministratorWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdministratorWhereInput_1.AdministratorWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AdministratorWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdministratorWhereInput_1.AdministratorWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AdministratorWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], AdministratorWhereUniqueInput.prototype, "banned", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], AdministratorWhereUniqueInput.prototype, "verified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AdministratorWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AdministratorWhereUniqueInput.prototype, "updatedAt", void 0);
exports.AdministratorWhereUniqueInput = AdministratorWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AdministratorWhereUniqueInput", {})
], AdministratorWhereUniqueInput);
