"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorUpdateManyWithWhereWithoutBookInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorScalarWhereInput_1 = require("../inputs/BookAuthorScalarWhereInput");
const BookAuthorUpdateManyMutationInput_1 = require("../inputs/BookAuthorUpdateManyMutationInput");
let BookAuthorUpdateManyWithWhereWithoutBookInput = class BookAuthorUpdateManyWithWhereWithoutBookInput {
    where;
    data;
};
exports.BookAuthorUpdateManyWithWhereWithoutBookInput = BookAuthorUpdateManyWithWhereWithoutBookInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorScalarWhereInput_1.BookAuthorScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookAuthorScalarWhereInput_1.BookAuthorScalarWhereInput)
], BookAuthorUpdateManyWithWhereWithoutBookInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorUpdateManyMutationInput_1.BookAuthorUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookAuthorUpdateManyMutationInput_1.BookAuthorUpdateManyMutationInput)
], BookAuthorUpdateManyWithWhereWithoutBookInput.prototype, "data", void 0);
exports.BookAuthorUpdateManyWithWhereWithoutBookInput = BookAuthorUpdateManyWithWhereWithoutBookInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorUpdateManyWithWhereWithoutBookInput", {})
], BookAuthorUpdateManyWithWhereWithoutBookInput);
