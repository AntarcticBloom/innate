"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FieldAnnotationCountAggregate = class FieldAnnotationCountAggregate {
    id;
    tableId;
    modelName;
    fieldId;
    fieldName;
    annotation;
    createdAt;
    updatedAt;
    _all;
};
exports.FieldAnnotationCountAggregate = FieldAnnotationCountAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], FieldAnnotationCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], FieldAnnotationCountAggregate.prototype, "tableId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], FieldAnnotationCountAggregate.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], FieldAnnotationCountAggregate.prototype, "fieldId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], FieldAnnotationCountAggregate.prototype, "fieldName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], FieldAnnotationCountAggregate.prototype, "annotation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], FieldAnnotationCountAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], FieldAnnotationCountAggregate.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], FieldAnnotationCountAggregate.prototype, "_all", void 0);
exports.FieldAnnotationCountAggregate = FieldAnnotationCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("FieldAnnotationCountAggregate", {})
], FieldAnnotationCountAggregate);
