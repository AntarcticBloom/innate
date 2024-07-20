"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldCreateWithoutTableInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationCreateNestedManyWithoutFieldInput_1 = require("../inputs/FieldAnnotationCreateNestedManyWithoutFieldInput");
let FieldCreateWithoutTableInput = class FieldCreateWithoutTableInput {
    id;
    name;
    type;
    createdAt;
    updatedAt;
    fieldAnnotations;
};
exports.FieldCreateWithoutTableInput = FieldCreateWithoutTableInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldCreateWithoutTableInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldCreateWithoutTableInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldCreateWithoutTableInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FieldCreateWithoutTableInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FieldCreateWithoutTableInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationCreateNestedManyWithoutFieldInput_1.FieldAnnotationCreateNestedManyWithoutFieldInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationCreateNestedManyWithoutFieldInput_1.FieldAnnotationCreateNestedManyWithoutFieldInput)
], FieldCreateWithoutTableInput.prototype, "fieldAnnotations", void 0);
exports.FieldCreateWithoutTableInput = FieldCreateWithoutTableInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldCreateWithoutTableInput", {})
], FieldCreateWithoutTableInput);
