"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationCreateManyTableInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FieldAnnotationCreateManyTableInput = class FieldAnnotationCreateManyTableInput {
    id;
    modelName;
    fieldId;
    fieldName;
    annotation;
    createdAt;
    updatedAt;
};
exports.FieldAnnotationCreateManyTableInput = FieldAnnotationCreateManyTableInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationCreateManyTableInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationCreateManyTableInput.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationCreateManyTableInput.prototype, "fieldId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationCreateManyTableInput.prototype, "fieldName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationCreateManyTableInput.prototype, "annotation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FieldAnnotationCreateManyTableInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FieldAnnotationCreateManyTableInput.prototype, "updatedAt", void 0);
exports.FieldAnnotationCreateManyTableInput = FieldAnnotationCreateManyTableInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationCreateManyTableInput", {})
], FieldAnnotationCreateManyTableInput);
