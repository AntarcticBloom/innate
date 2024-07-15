"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBookAuthorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorOrderByWithRelationInput_1 = require("../../../inputs/BookAuthorOrderByWithRelationInput");
const BookAuthorWhereInput_1 = require("../../../inputs/BookAuthorWhereInput");
const BookAuthorWhereUniqueInput_1 = require("../../../inputs/BookAuthorWhereUniqueInput");
let AggregateBookAuthorArgs = class AggregateBookAuthorArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
};
exports.AggregateBookAuthorArgs = AggregateBookAuthorArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorWhereInput_1.BookAuthorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorWhereInput_1.BookAuthorWhereInput)
], AggregateBookAuthorArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorOrderByWithRelationInput_1.BookAuthorOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateBookAuthorArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput)
], AggregateBookAuthorArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateBookAuthorArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateBookAuthorArgs.prototype, "skip", void 0);
exports.AggregateBookAuthorArgs = AggregateBookAuthorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateBookAuthorArgs);
