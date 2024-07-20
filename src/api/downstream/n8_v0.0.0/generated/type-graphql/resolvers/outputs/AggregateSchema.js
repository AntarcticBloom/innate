"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSchema = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchemaCountAggregate_1 = require("../outputs/SchemaCountAggregate");
const SchemaMaxAggregate_1 = require("../outputs/SchemaMaxAggregate");
const SchemaMinAggregate_1 = require("../outputs/SchemaMinAggregate");
let AggregateSchema = class AggregateSchema {
    _count;
    _min;
    _max;
};
exports.AggregateSchema = AggregateSchema;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaCountAggregate_1.SchemaCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaCountAggregate_1.SchemaCountAggregate)
], AggregateSchema.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaMinAggregate_1.SchemaMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaMinAggregate_1.SchemaMinAggregate)
], AggregateSchema.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaMaxAggregate_1.SchemaMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaMaxAggregate_1.SchemaMaxAggregate)
], AggregateSchema.prototype, "_max", void 0);
exports.AggregateSchema = AggregateSchema = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateSchema", {})
], AggregateSchema);
