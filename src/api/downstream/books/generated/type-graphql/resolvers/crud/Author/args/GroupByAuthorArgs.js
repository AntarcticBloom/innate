"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAuthorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorOrderByWithAggregationInput_1 = require("../../../inputs/AuthorOrderByWithAggregationInput");
const AuthorScalarWhereWithAggregatesInput_1 = require("../../../inputs/AuthorScalarWhereWithAggregatesInput");
const AuthorWhereInput_1 = require("../../../inputs/AuthorWhereInput");
const AuthorScalarFieldEnum_1 = require("../../../../enums/AuthorScalarFieldEnum");
let GroupByAuthorArgs = class GroupByAuthorArgs {
    where;
    orderBy;
    by;
    having;
    take;
    skip;
};
exports.GroupByAuthorArgs = GroupByAuthorArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorWhereInput_1.AuthorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorWhereInput_1.AuthorWhereInput)
], GroupByAuthorArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AuthorOrderByWithAggregationInput_1.AuthorOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAuthorArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AuthorScalarFieldEnum_1.AuthorScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAuthorArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorScalarWhereWithAggregatesInput_1.AuthorScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorScalarWhereWithAggregatesInput_1.AuthorScalarWhereWithAggregatesInput)
], GroupByAuthorArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAuthorArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAuthorArgs.prototype, "skip", void 0);
exports.GroupByAuthorArgs = GroupByAuthorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByAuthorArgs);
