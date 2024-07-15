"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateFieldAnnotation = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationCountAggregate_1 = require("../outputs/FieldAnnotationCountAggregate");
const FieldAnnotationMaxAggregate_1 = require("../outputs/FieldAnnotationMaxAggregate");
const FieldAnnotationMinAggregate_1 = require("../outputs/FieldAnnotationMinAggregate");
let AggregateFieldAnnotation = class AggregateFieldAnnotation {
    _count;
    _min;
    _max;
};
exports.AggregateFieldAnnotation = AggregateFieldAnnotation;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationCountAggregate_1.FieldAnnotationCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationCountAggregate_1.FieldAnnotationCountAggregate)
], AggregateFieldAnnotation.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationMinAggregate_1.FieldAnnotationMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationMinAggregate_1.FieldAnnotationMinAggregate)
], AggregateFieldAnnotation.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationMaxAggregate_1.FieldAnnotationMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationMaxAggregate_1.FieldAnnotationMaxAggregate)
], AggregateFieldAnnotation.prototype, "_max", void 0);
exports.AggregateFieldAnnotation = AggregateFieldAnnotation = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateFieldAnnotation", {})
], AggregateFieldAnnotation);
