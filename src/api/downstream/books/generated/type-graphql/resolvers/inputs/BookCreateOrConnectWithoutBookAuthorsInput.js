"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCreateOrConnectWithoutBookAuthorsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCreateWithoutBookAuthorsInput_1 = require("../inputs/BookCreateWithoutBookAuthorsInput");
const BookWhereUniqueInput_1 = require("../inputs/BookWhereUniqueInput");
let BookCreateOrConnectWithoutBookAuthorsInput = class BookCreateOrConnectWithoutBookAuthorsInput {
    where;
    create;
};
exports.BookCreateOrConnectWithoutBookAuthorsInput = BookCreateOrConnectWithoutBookAuthorsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereUniqueInput_1.BookWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookWhereUniqueInput_1.BookWhereUniqueInput)
], BookCreateOrConnectWithoutBookAuthorsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateWithoutBookAuthorsInput_1.BookCreateWithoutBookAuthorsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookCreateWithoutBookAuthorsInput_1.BookCreateWithoutBookAuthorsInput)
], BookCreateOrConnectWithoutBookAuthorsInput.prototype, "create", void 0);
exports.BookCreateOrConnectWithoutBookAuthorsInput = BookCreateOrConnectWithoutBookAuthorsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookCreateOrConnectWithoutBookAuthorsInput", {})
], BookCreateOrConnectWithoutBookAuthorsInput);
