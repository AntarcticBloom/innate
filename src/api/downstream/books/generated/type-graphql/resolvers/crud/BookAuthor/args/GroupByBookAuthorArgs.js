"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByBookAuthorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorOrderByWithAggregationInput_1 = require("../../../inputs/BookAuthorOrderByWithAggregationInput");
const BookAuthorScalarWhereWithAggregatesInput_1 = require("../../../inputs/BookAuthorScalarWhereWithAggregatesInput");
const BookAuthorWhereInput_1 = require("../../../inputs/BookAuthorWhereInput");
const BookAuthorScalarFieldEnum_1 = require("../../../../enums/BookAuthorScalarFieldEnum");
let GroupByBookAuthorArgs = class GroupByBookAuthorArgs {
    where;
    orderBy;
    by;
    having;
    take;
    skip;
};
exports.GroupByBookAuthorArgs = GroupByBookAuthorArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorWhereInput_1.BookAuthorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorWhereInput_1.BookAuthorWhereInput)
], GroupByBookAuthorArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorOrderByWithAggregationInput_1.BookAuthorOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByBookAuthorArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorScalarFieldEnum_1.BookAuthorScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByBookAuthorArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorScalarWhereWithAggregatesInput_1.BookAuthorScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorScalarWhereWithAggregatesInput_1.BookAuthorScalarWhereWithAggregatesInput)
], GroupByBookAuthorArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByBookAuthorArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByBookAuthorArgs.prototype, "skip", void 0);
exports.GroupByBookAuthorArgs = GroupByBookAuthorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByBookAuthorArgs);
