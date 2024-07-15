"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldCreateNestedOneWithoutFieldAnnotationsInput_1 = require("../inputs/FieldCreateNestedOneWithoutFieldAnnotationsInput");
const TableCreateNestedOneWithoutFieldAnnotationsInput_1 = require("../inputs/TableCreateNestedOneWithoutFieldAnnotationsInput");
let FieldAnnotationCreateInput = class FieldAnnotationCreateInput {
    id;
    modelName;
    fieldName;
    annotation;
    createdAt;
    updatedAt;
    field;
    table;
};
exports.FieldAnnotationCreateInput = FieldAnnotationCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationCreateInput.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationCreateInput.prototype, "fieldName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationCreateInput.prototype, "annotation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FieldAnnotationCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FieldAnnotationCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldCreateNestedOneWithoutFieldAnnotationsInput_1.FieldCreateNestedOneWithoutFieldAnnotationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldCreateNestedOneWithoutFieldAnnotationsInput_1.FieldCreateNestedOneWithoutFieldAnnotationsInput)
], FieldAnnotationCreateInput.prototype, "field", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableCreateNestedOneWithoutFieldAnnotationsInput_1.TableCreateNestedOneWithoutFieldAnnotationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableCreateNestedOneWithoutFieldAnnotationsInput_1.TableCreateNestedOneWithoutFieldAnnotationsInput)
], FieldAnnotationCreateInput.prototype, "table", void 0);
exports.FieldAnnotationCreateInput = FieldAnnotationCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationCreateInput", {})
], FieldAnnotationCreateInput);
