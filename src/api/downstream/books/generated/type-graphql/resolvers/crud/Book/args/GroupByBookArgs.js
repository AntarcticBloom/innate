"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByBookArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookOrderByWithAggregationInput_1 = require("../../../inputs/BookOrderByWithAggregationInput");
const BookScalarWhereWithAggregatesInput_1 = require("../../../inputs/BookScalarWhereWithAggregatesInput");
const BookWhereInput_1 = require("../../../inputs/BookWhereInput");
const BookScalarFieldEnum_1 = require("../../../../enums/BookScalarFieldEnum");
let GroupByBookArgs = class GroupByBookArgs {
    where;
    orderBy;
    by;
    having;
    take;
    skip;
};
exports.GroupByBookArgs = GroupByBookArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereInput_1.BookWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookWhereInput_1.BookWhereInput)
], GroupByBookArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookOrderByWithAggregationInput_1.BookOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByBookArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookScalarFieldEnum_1.BookScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByBookArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookScalarWhereWithAggregatesInput_1.BookScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookScalarWhereWithAggregatesInput_1.BookScalarWhereWithAggregatesInput)
], GroupByBookArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByBookArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByBookArgs.prototype, "skip", void 0);
exports.GroupByBookArgs = GroupByBookArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByBookArgs);
