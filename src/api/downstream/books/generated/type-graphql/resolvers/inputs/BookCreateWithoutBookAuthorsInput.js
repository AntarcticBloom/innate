"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCreateWithoutBookAuthorsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookCreateWithoutBookAuthorsInput = class BookCreateWithoutBookAuthorsInput {
    id;
    name;
    createdAt;
    updatedAt;
};
exports.BookCreateWithoutBookAuthorsInput = BookCreateWithoutBookAuthorsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateWithoutBookAuthorsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateWithoutBookAuthorsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookCreateWithoutBookAuthorsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookCreateWithoutBookAuthorsInput.prototype, "updatedAt", void 0);
exports.BookCreateWithoutBookAuthorsInput = BookCreateWithoutBookAuthorsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookCreateWithoutBookAuthorsInput", {})
], BookCreateWithoutBookAuthorsInput);
