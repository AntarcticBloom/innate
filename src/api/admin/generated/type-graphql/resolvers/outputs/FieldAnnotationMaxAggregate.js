"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FieldAnnotationMaxAggregate = class FieldAnnotationMaxAggregate {
    id;
    tableId;
    modelName;
    fieldId;
    fieldName;
    annotation;
    createdAt;
    updatedAt;
};
exports.FieldAnnotationMaxAggregate = FieldAnnotationMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationMaxAggregate.prototype, "tableId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationMaxAggregate.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationMaxAggregate.prototype, "fieldId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationMaxAggregate.prototype, "fieldName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationMaxAggregate.prototype, "annotation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FieldAnnotationMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FieldAnnotationMaxAggregate.prototype, "updatedAt", void 0);
exports.FieldAnnotationMaxAggregate = FieldAnnotationMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("FieldAnnotationMaxAggregate", {})
], FieldAnnotationMaxAggregate);
