"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstFieldArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldOrderByWithRelationInput_1 = require("../../../inputs/FieldOrderByWithRelationInput");
const FieldWhereInput_1 = require("../../../inputs/FieldWhereInput");
const FieldWhereUniqueInput_1 = require("../../../inputs/FieldWhereUniqueInput");
const FieldScalarFieldEnum_1 = require("../../../../enums/FieldScalarFieldEnum");
let FindFirstFieldArgs = class FindFirstFieldArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
    distinct;
};
exports.FindFirstFieldArgs = FindFirstFieldArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldWhereInput_1.FieldWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldWhereInput_1.FieldWhereInput)
], FindFirstFieldArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldOrderByWithRelationInput_1.FieldOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstFieldArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldWhereUniqueInput_1.FieldWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldWhereUniqueInput_1.FieldWhereUniqueInput)
], FindFirstFieldArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstFieldArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstFieldArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldScalarFieldEnum_1.FieldScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstFieldArgs.prototype, "distinct", void 0);
exports.FindFirstFieldArgs = FindFirstFieldArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstFieldArgs);
