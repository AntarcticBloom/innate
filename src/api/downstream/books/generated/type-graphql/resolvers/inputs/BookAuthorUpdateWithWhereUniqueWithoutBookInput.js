"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorUpdateWithWhereUniqueWithoutBookInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorUpdateWithoutBookInput_1 = require("../inputs/BookAuthorUpdateWithoutBookInput");
const BookAuthorWhereUniqueInput_1 = require("../inputs/BookAuthorWhereUniqueInput");
let BookAuthorUpdateWithWhereUniqueWithoutBookInput = class BookAuthorUpdateWithWhereUniqueWithoutBookInput {
    where;
    data;
};
exports.BookAuthorUpdateWithWhereUniqueWithoutBookInput = BookAuthorUpdateWithWhereUniqueWithoutBookInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput)
], BookAuthorUpdateWithWhereUniqueWithoutBookInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorUpdateWithoutBookInput_1.BookAuthorUpdateWithoutBookInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookAuthorUpdateWithoutBookInput_1.BookAuthorUpdateWithoutBookInput)
], BookAuthorUpdateWithWhereUniqueWithoutBookInput.prototype, "data", void 0);
exports.BookAuthorUpdateWithWhereUniqueWithoutBookInput = BookAuthorUpdateWithWhereUniqueWithoutBookInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorUpdateWithWhereUniqueWithoutBookInput", {})
], BookAuthorUpdateWithWhereUniqueWithoutBookInput);
