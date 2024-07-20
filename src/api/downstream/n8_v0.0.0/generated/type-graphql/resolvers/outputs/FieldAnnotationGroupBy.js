"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationCountAggregate_1 = require("../outputs/FieldAnnotationCountAggregate");
const FieldAnnotationMaxAggregate_1 = require("../outputs/FieldAnnotationMaxAggregate");
const FieldAnnotationMinAggregate_1 = require("../outputs/FieldAnnotationMinAggregate");
let FieldAnnotationGroupBy = class FieldAnnotationGroupBy {
    id;
    tableId;
    modelName;
    fieldId;
    fieldName;
    annotation;
    createdAt;
    updatedAt;
    _count;
    _min;
    _max;
};
exports.FieldAnnotationGroupBy = FieldAnnotationGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationGroupBy.prototype, "tableId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationGroupBy.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationGroupBy.prototype, "fieldId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationGroupBy.prototype, "fieldName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationGroupBy.prototype, "annotation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], FieldAnnotationGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], FieldAnnotationGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationCountAggregate_1.FieldAnnotationCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationCountAggregate_1.FieldAnnotationCountAggregate)
], FieldAnnotationGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationMinAggregate_1.FieldAnnotationMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationMinAggregate_1.FieldAnnotationMinAggregate)
], FieldAnnotationGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationMaxAggregate_1.FieldAnnotationMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationMaxAggregate_1.FieldAnnotationMaxAggregate)
], FieldAnnotationGroupBy.prototype, "_max", void 0);
exports.FieldAnnotationGroupBy = FieldAnnotationGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("FieldAnnotationGroupBy", {})
], FieldAnnotationGroupBy);
