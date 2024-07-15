"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookUpdateToOneWithWhereWithoutBookAuthorsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookUpdateWithoutBookAuthorsInput_1 = require("../inputs/BookUpdateWithoutBookAuthorsInput");
const BookWhereInput_1 = require("../inputs/BookWhereInput");
let BookUpdateToOneWithWhereWithoutBookAuthorsInput = class BookUpdateToOneWithWhereWithoutBookAuthorsInput {
    where;
    data;
};
exports.BookUpdateToOneWithWhereWithoutBookAuthorsInput = BookUpdateToOneWithWhereWithoutBookAuthorsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereInput_1.BookWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookWhereInput_1.BookWhereInput)
], BookUpdateToOneWithWhereWithoutBookAuthorsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookUpdateWithoutBookAuthorsInput_1.BookUpdateWithoutBookAuthorsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookUpdateWithoutBookAuthorsInput_1.BookUpdateWithoutBookAuthorsInput)
], BookUpdateToOneWithWhereWithoutBookAuthorsInput.prototype, "data", void 0);
exports.BookUpdateToOneWithWhereWithoutBookAuthorsInput = BookUpdateToOneWithWhereWithoutBookAuthorsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookUpdateToOneWithWhereWithoutBookAuthorsInput", {})
], BookUpdateToOneWithWhereWithoutBookAuthorsInput);
