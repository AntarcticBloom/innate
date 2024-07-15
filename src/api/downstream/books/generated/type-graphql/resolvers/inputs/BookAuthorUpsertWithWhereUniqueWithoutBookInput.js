"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorUpsertWithWhereUniqueWithoutBookInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorCreateWithoutBookInput_1 = require("../inputs/BookAuthorCreateWithoutBookInput");
const BookAuthorUpdateWithoutBookInput_1 = require("../inputs/BookAuthorUpdateWithoutBookInput");
const BookAuthorWhereUniqueInput_1 = require("../inputs/BookAuthorWhereUniqueInput");
let BookAuthorUpsertWithWhereUniqueWithoutBookInput = class BookAuthorUpsertWithWhereUniqueWithoutBookInput {
    where;
    update;
    create;
};
exports.BookAuthorUpsertWithWhereUniqueWithoutBookInput = BookAuthorUpsertWithWhereUniqueWithoutBookInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput)
], BookAuthorUpsertWithWhereUniqueWithoutBookInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorUpdateWithoutBookInput_1.BookAuthorUpdateWithoutBookInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookAuthorUpdateWithoutBookInput_1.BookAuthorUpdateWithoutBookInput)
], BookAuthorUpsertWithWhereUniqueWithoutBookInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorCreateWithoutBookInput_1.BookAuthorCreateWithoutBookInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookAuthorCreateWithoutBookInput_1.BookAuthorCreateWithoutBookInput)
], BookAuthorUpsertWithWhereUniqueWithoutBookInput.prototype, "create", void 0);
exports.BookAuthorUpsertWithWhereUniqueWithoutBookInput = BookAuthorUpsertWithWhereUniqueWithoutBookInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorUpsertWithWhereUniqueWithoutBookInput", {})
], BookAuthorUpsertWithWhereUniqueWithoutBookInput);
