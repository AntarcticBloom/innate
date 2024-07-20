"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTableArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableOrderByWithAggregationInput_1 = require("../../../inputs/TableOrderByWithAggregationInput");
const TableScalarWhereWithAggregatesInput_1 = require("../../../inputs/TableScalarWhereWithAggregatesInput");
const TableWhereInput_1 = require("../../../inputs/TableWhereInput");
const TableScalarFieldEnum_1 = require("../../../../enums/TableScalarFieldEnum");
let GroupByTableArgs = class GroupByTableArgs {
    where;
    orderBy;
    by;
    having;
    take;
    skip;
};
exports.GroupByTableArgs = GroupByTableArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereInput_1.TableWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableWhereInput_1.TableWhereInput)
], GroupByTableArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableOrderByWithAggregationInput_1.TableOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTableArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableScalarFieldEnum_1.TableScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTableArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableScalarWhereWithAggregatesInput_1.TableScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableScalarWhereWithAggregatesInput_1.TableScalarWhereWithAggregatesInput)
], GroupByTableArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTableArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTableArgs.prototype, "skip", void 0);
exports.GroupByTableArgs = GroupByTableArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTableArgs);
