"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorCreateOrConnectWithoutBookInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorCreateWithoutBookInput_1 = require("../inputs/BookAuthorCreateWithoutBookInput");
const BookAuthorWhereUniqueInput_1 = require("../inputs/BookAuthorWhereUniqueInput");
let BookAuthorCreateOrConnectWithoutBookInput = class BookAuthorCreateOrConnectWithoutBookInput {
    where;
    create;
};
exports.BookAuthorCreateOrConnectWithoutBookInput = BookAuthorCreateOrConnectWithoutBookInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput)
], BookAuthorCreateOrConnectWithoutBookInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorCreateWithoutBookInput_1.BookAuthorCreateWithoutBookInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookAuthorCreateWithoutBookInput_1.BookAuthorCreateWithoutBookInput)
], BookAuthorCreateOrConnectWithoutBookInput.prototype, "create", void 0);
exports.BookAuthorCreateOrConnectWithoutBookInput = BookAuthorCreateOrConnectWithoutBookInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorCreateOrConnectWithoutBookInput", {})
], BookAuthorCreateOrConnectWithoutBookInput);
