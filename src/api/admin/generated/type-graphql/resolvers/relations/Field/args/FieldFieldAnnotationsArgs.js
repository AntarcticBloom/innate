"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldFieldAnnotationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationOrderByWithRelationInput_1 = require("../../../inputs/FieldAnnotationOrderByWithRelationInput");
const FieldAnnotationWhereInput_1 = require("../../../inputs/FieldAnnotationWhereInput");
const FieldAnnotationWhereUniqueInput_1 = require("../../../inputs/FieldAnnotationWhereUniqueInput");
const FieldAnnotationScalarFieldEnum_1 = require("../../../../enums/FieldAnnotationScalarFieldEnum");
let FieldFieldAnnotationsArgs = class FieldFieldAnnotationsArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
    distinct;
};
exports.FieldFieldAnnotationsArgs = FieldFieldAnnotationsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationWhereInput_1.FieldAnnotationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationWhereInput_1.FieldAnnotationWhereInput)
], FieldFieldAnnotationsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationOrderByWithRelationInput_1.FieldAnnotationOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldFieldAnnotationsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput)
], FieldFieldAnnotationsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FieldFieldAnnotationsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FieldFieldAnnotationsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationScalarFieldEnum_1.FieldAnnotationScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldFieldAnnotationsArgs.prototype, "distinct", void 0);
exports.FieldFieldAnnotationsArgs = FieldFieldAnnotationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FieldFieldAnnotationsArgs);
