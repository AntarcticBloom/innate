"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationCreateWithoutFieldInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableCreateNestedOneWithoutFieldAnnotationsInput_1 = require("../inputs/TableCreateNestedOneWithoutFieldAnnotationsInput");
let FieldAnnotationCreateWithoutFieldInput = class FieldAnnotationCreateWithoutFieldInput {
    id;
    modelName;
    fieldName;
    annotation;
    createdAt;
    updatedAt;
    table;
};
exports.FieldAnnotationCreateWithoutFieldInput = FieldAnnotationCreateWithoutFieldInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationCreateWithoutFieldInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationCreateWithoutFieldInput.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationCreateWithoutFieldInput.prototype, "fieldName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationCreateWithoutFieldInput.prototype, "annotation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FieldAnnotationCreateWithoutFieldInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FieldAnnotationCreateWithoutFieldInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableCreateNestedOneWithoutFieldAnnotationsInput_1.TableCreateNestedOneWithoutFieldAnnotationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableCreateNestedOneWithoutFieldAnnotationsInput_1.TableCreateNestedOneWithoutFieldAnnotationsInput)
], FieldAnnotationCreateWithoutFieldInput.prototype, "table", void 0);
exports.FieldAnnotationCreateWithoutFieldInput = FieldAnnotationCreateWithoutFieldInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationCreateWithoutFieldInput", {})
], FieldAnnotationCreateWithoutFieldInput);
