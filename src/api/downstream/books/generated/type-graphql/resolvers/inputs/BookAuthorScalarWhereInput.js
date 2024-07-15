"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UuidFilter_1 = require("../inputs/UuidFilter");
let BookAuthorScalarWhereInput = class BookAuthorScalarWhereInput {
    AND;
    OR;
    NOT;
    bookId;
    authorId;
};
exports.BookAuthorScalarWhereInput = BookAuthorScalarWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidFilter_1.UuidFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidFilter_1.UuidFilter)
], BookAuthorScalarWhereInput.prototype, "bookId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UuidFilter_1.UuidFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UuidFilter_1.UuidFilter)
], BookAuthorScalarWhereInput.prototype, "authorId", void 0);
exports.BookAuthorScalarWhereInput = BookAuthorScalarWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorScalarWhereInput", {})
], BookAuthorScalarWhereInput);
