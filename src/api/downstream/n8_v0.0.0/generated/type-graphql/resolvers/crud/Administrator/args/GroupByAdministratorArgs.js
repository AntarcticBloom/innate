"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAdministratorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdministratorOrderByWithAggregationInput_1 = require("../../../inputs/AdministratorOrderByWithAggregationInput");
const AdministratorScalarWhereWithAggregatesInput_1 = require("../../../inputs/AdministratorScalarWhereWithAggregatesInput");
const AdministratorWhereInput_1 = require("../../../inputs/AdministratorWhereInput");
const AdministratorScalarFieldEnum_1 = require("../../../../enums/AdministratorScalarFieldEnum");
let GroupByAdministratorArgs = class GroupByAdministratorArgs {
    where;
    orderBy;
    by;
    having;
    take;
    skip;
};
exports.GroupByAdministratorArgs = GroupByAdministratorArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdministratorWhereInput_1.AdministratorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdministratorWhereInput_1.AdministratorWhereInput)
], GroupByAdministratorArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdministratorOrderByWithAggregationInput_1.AdministratorOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAdministratorArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdministratorScalarFieldEnum_1.AdministratorScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAdministratorArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdministratorScalarWhereWithAggregatesInput_1.AdministratorScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdministratorScalarWhereWithAggregatesInput_1.AdministratorScalarWhereWithAggregatesInput)
], GroupByAdministratorArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAdministratorArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAdministratorArgs.prototype, "skip", void 0);
exports.GroupByAdministratorArgs = GroupByAdministratorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByAdministratorArgs);
