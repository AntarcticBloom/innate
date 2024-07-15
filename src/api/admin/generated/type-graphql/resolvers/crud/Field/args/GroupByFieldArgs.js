"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByFieldArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldOrderByWithAggregationInput_1 = require("../../../inputs/FieldOrderByWithAggregationInput");
const FieldScalarWhereWithAggregatesInput_1 = require("../../../inputs/FieldScalarWhereWithAggregatesInput");
const FieldWhereInput_1 = require("../../../inputs/FieldWhereInput");
const FieldScalarFieldEnum_1 = require("../../../../enums/FieldScalarFieldEnum");
let GroupByFieldArgs = class GroupByFieldArgs {
    where;
    orderBy;
    by;
    having;
    take;
    skip;
};
exports.GroupByFieldArgs = GroupByFieldArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldWhereInput_1.FieldWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldWhereInput_1.FieldWhereInput)
], GroupByFieldArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldOrderByWithAggregationInput_1.FieldOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByFieldArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldScalarFieldEnum_1.FieldScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByFieldArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldScalarWhereWithAggregatesInput_1.FieldScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldScalarWhereWithAggregatesInput_1.FieldScalarWhereWithAggregatesInput)
], GroupByFieldArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByFieldArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByFieldArgs.prototype, "skip", void 0);
exports.GroupByFieldArgs = GroupByFieldArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByFieldArgs);
