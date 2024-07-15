"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyBookArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookOrderByWithRelationInput_1 = require("../../../inputs/BookOrderByWithRelationInput");
const BookWhereInput_1 = require("../../../inputs/BookWhereInput");
const BookWhereUniqueInput_1 = require("../../../inputs/BookWhereUniqueInput");
const BookScalarFieldEnum_1 = require("../../../../enums/BookScalarFieldEnum");
let FindManyBookArgs = class FindManyBookArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
    distinct;
};
exports.FindManyBookArgs = FindManyBookArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereInput_1.BookWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookWhereInput_1.BookWhereInput)
], FindManyBookArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookOrderByWithRelationInput_1.BookOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyBookArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereUniqueInput_1.BookWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookWhereUniqueInput_1.BookWhereUniqueInput)
], FindManyBookArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyBookArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyBookArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookScalarFieldEnum_1.BookScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyBookArgs.prototype, "distinct", void 0);
exports.FindManyBookArgs = FindManyBookArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyBookArgs);
