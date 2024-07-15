"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCreateNestedOneWithoutBookAuthorsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCreateOrConnectWithoutBookAuthorsInput_1 = require("../inputs/BookCreateOrConnectWithoutBookAuthorsInput");
const BookCreateWithoutBookAuthorsInput_1 = require("../inputs/BookCreateWithoutBookAuthorsInput");
const BookWhereUniqueInput_1 = require("../inputs/BookWhereUniqueInput");
let BookCreateNestedOneWithoutBookAuthorsInput = class BookCreateNestedOneWithoutBookAuthorsInput {
    create;
    connectOrCreate;
    connect;
};
exports.BookCreateNestedOneWithoutBookAuthorsInput = BookCreateNestedOneWithoutBookAuthorsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateWithoutBookAuthorsInput_1.BookCreateWithoutBookAuthorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookCreateWithoutBookAuthorsInput_1.BookCreateWithoutBookAuthorsInput)
], BookCreateNestedOneWithoutBookAuthorsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateOrConnectWithoutBookAuthorsInput_1.BookCreateOrConnectWithoutBookAuthorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookCreateOrConnectWithoutBookAuthorsInput_1.BookCreateOrConnectWithoutBookAuthorsInput)
], BookCreateNestedOneWithoutBookAuthorsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereUniqueInput_1.BookWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookWhereUniqueInput_1.BookWhereUniqueInput)
], BookCreateNestedOneWithoutBookAuthorsInput.prototype, "connect", void 0);
exports.BookCreateNestedOneWithoutBookAuthorsInput = BookCreateNestedOneWithoutBookAuthorsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookCreateNestedOneWithoutBookAuthorsInput", {})
], BookCreateNestedOneWithoutBookAuthorsInput);
