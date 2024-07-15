"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByFieldAnnotationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationOrderByWithAggregationInput_1 = require("../../../inputs/FieldAnnotationOrderByWithAggregationInput");
const FieldAnnotationScalarWhereWithAggregatesInput_1 = require("../../../inputs/FieldAnnotationScalarWhereWithAggregatesInput");
const FieldAnnotationWhereInput_1 = require("../../../inputs/FieldAnnotationWhereInput");
const FieldAnnotationScalarFieldEnum_1 = require("../../../../enums/FieldAnnotationScalarFieldEnum");
let GroupByFieldAnnotationArgs = class GroupByFieldAnnotationArgs {
    where;
    orderBy;
    by;
    having;
    take;
    skip;
};
exports.GroupByFieldAnnotationArgs = GroupByFieldAnnotationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationWhereInput_1.FieldAnnotationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationWhereInput_1.FieldAnnotationWhereInput)
], GroupByFieldAnnotationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationOrderByWithAggregationInput_1.FieldAnnotationOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByFieldAnnotationArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationScalarFieldEnum_1.FieldAnnotationScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByFieldAnnotationArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationScalarWhereWithAggregatesInput_1.FieldAnnotationScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationScalarWhereWithAggregatesInput_1.FieldAnnotationScalarWhereWithAggregatesInput)
], GroupByFieldAnnotationArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByFieldAnnotationArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByFieldAnnotationArgs.prototype, "skip", void 0);
exports.GroupByFieldAnnotationArgs = GroupByFieldAnnotationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByFieldAnnotationArgs);
