"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookUpsertWithoutBookAuthorsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCreateWithoutBookAuthorsInput_1 = require("../inputs/BookCreateWithoutBookAuthorsInput");
const BookUpdateWithoutBookAuthorsInput_1 = require("../inputs/BookUpdateWithoutBookAuthorsInput");
const BookWhereInput_1 = require("../inputs/BookWhereInput");
let BookUpsertWithoutBookAuthorsInput = class BookUpsertWithoutBookAuthorsInput {
    update;
    create;
    where;
};
exports.BookUpsertWithoutBookAuthorsInput = BookUpsertWithoutBookAuthorsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookUpdateWithoutBookAuthorsInput_1.BookUpdateWithoutBookAuthorsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookUpdateWithoutBookAuthorsInput_1.BookUpdateWithoutBookAuthorsInput)
], BookUpsertWithoutBookAuthorsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateWithoutBookAuthorsInput_1.BookCreateWithoutBookAuthorsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookCreateWithoutBookAuthorsInput_1.BookCreateWithoutBookAuthorsInput)
], BookUpsertWithoutBookAuthorsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereInput_1.BookWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookWhereInput_1.BookWhereInput)
], BookUpsertWithoutBookAuthorsInput.prototype, "where", void 0);
exports.BookUpsertWithoutBookAuthorsInput = BookUpsertWithoutBookAuthorsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookUpsertWithoutBookAuthorsInput", {})
], BookUpsertWithoutBookAuthorsInput);
