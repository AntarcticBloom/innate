"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorCreateNestedManyWithoutBookInput_1 = require("../inputs/BookAuthorCreateNestedManyWithoutBookInput");
let BookCreateInput = class BookCreateInput {
    id;
    name;
    createdAt;
    updatedAt;
    bookAuthors;
};
exports.BookCreateInput = BookCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorCreateNestedManyWithoutBookInput_1.BookAuthorCreateNestedManyWithoutBookInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorCreateNestedManyWithoutBookInput_1.BookAuthorCreateNestedManyWithoutBookInput)
], BookCreateInput.prototype, "bookAuthors", void 0);
exports.BookCreateInput = BookCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookCreateInput", {})
], BookCreateInput);
