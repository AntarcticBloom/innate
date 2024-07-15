"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyBookAuthorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorOrderByWithRelationInput_1 = require("../../../inputs/BookAuthorOrderByWithRelationInput");
const BookAuthorWhereInput_1 = require("../../../inputs/BookAuthorWhereInput");
const BookAuthorWhereUniqueInput_1 = require("../../../inputs/BookAuthorWhereUniqueInput");
const BookAuthorScalarFieldEnum_1 = require("../../../../enums/BookAuthorScalarFieldEnum");
let FindManyBookAuthorArgs = class FindManyBookAuthorArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
    distinct;
};
exports.FindManyBookAuthorArgs = FindManyBookAuthorArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorWhereInput_1.BookAuthorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorWhereInput_1.BookAuthorWhereInput)
], FindManyBookAuthorArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorOrderByWithRelationInput_1.BookAuthorOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyBookAuthorArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput)
], FindManyBookAuthorArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyBookAuthorArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyBookAuthorArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorScalarFieldEnum_1.BookAuthorScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyBookAuthorArgs.prototype, "distinct", void 0);
exports.FindManyBookAuthorArgs = FindManyBookAuthorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyBookAuthorArgs);
