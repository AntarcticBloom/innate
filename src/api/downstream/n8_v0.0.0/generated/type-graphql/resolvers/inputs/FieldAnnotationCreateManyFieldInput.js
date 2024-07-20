"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationCreateManyFieldInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FieldAnnotationCreateManyFieldInput = class FieldAnnotationCreateManyFieldInput {
    id;
    tableId;
    modelName;
    fieldName;
    annotation;
    createdAt;
    updatedAt;
};
exports.FieldAnnotationCreateManyFieldInput = FieldAnnotationCreateManyFieldInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationCreateManyFieldInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationCreateManyFieldInput.prototype, "tableId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationCreateManyFieldInput.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationCreateManyFieldInput.prototype, "fieldName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationCreateManyFieldInput.prototype, "annotation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FieldAnnotationCreateManyFieldInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FieldAnnotationCreateManyFieldInput.prototype, "updatedAt", void 0);
exports.FieldAnnotationCreateManyFieldInput = FieldAnnotationCreateManyFieldInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationCreateManyFieldInput", {})
], FieldAnnotationCreateManyFieldInput);
