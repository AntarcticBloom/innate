"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateField = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldCountAggregate_1 = require("../outputs/FieldCountAggregate");
const FieldMaxAggregate_1 = require("../outputs/FieldMaxAggregate");
const FieldMinAggregate_1 = require("../outputs/FieldMinAggregate");
let AggregateField = class AggregateField {
    _count;
    _min;
    _max;
};
exports.AggregateField = AggregateField;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldCountAggregate_1.FieldCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldCountAggregate_1.FieldCountAggregate)
], AggregateField.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldMinAggregate_1.FieldMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldMinAggregate_1.FieldMinAggregate)
], AggregateField.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldMaxAggregate_1.FieldMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldMaxAggregate_1.FieldMaxAggregate)
], AggregateField.prototype, "_max", void 0);
exports.AggregateField = AggregateField = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateField", {})
], AggregateField);
