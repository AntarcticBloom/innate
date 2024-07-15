"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorUpdateWithoutBookAuthorsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let AuthorUpdateWithoutBookAuthorsInput = class AuthorUpdateWithoutBookAuthorsInput {
    id;
    name;
    createdAt;
    updatedAt;
};
exports.AuthorUpdateWithoutBookAuthorsInput = AuthorUpdateWithoutBookAuthorsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AuthorUpdateWithoutBookAuthorsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AuthorUpdateWithoutBookAuthorsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AuthorUpdateWithoutBookAuthorsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AuthorUpdateWithoutBookAuthorsInput.prototype, "updatedAt", void 0);
exports.AuthorUpdateWithoutBookAuthorsInput = AuthorUpdateWithoutBookAuthorsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AuthorUpdateWithoutBookAuthorsInput", {})
], AuthorUpdateWithoutBookAuthorsInput);
