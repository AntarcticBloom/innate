"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorUpdateManyWithoutBookNestedInput_1 = require("../inputs/BookAuthorUpdateManyWithoutBookNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let BookUpdateInput = class BookUpdateInput {
    id;
    name;
    createdAt;
    updatedAt;
    bookAuthors;
};
exports.BookUpdateInput = BookUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], BookUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], BookUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BookUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BookUpdateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorUpdateManyWithoutBookNestedInput_1.BookAuthorUpdateManyWithoutBookNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorUpdateManyWithoutBookNestedInput_1.BookAuthorUpdateManyWithoutBookNestedInput)
], BookUpdateInput.prototype, "bookAuthors", void 0);
exports.BookUpdateInput = BookUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookUpdateInput", {})
], BookUpdateInput);
