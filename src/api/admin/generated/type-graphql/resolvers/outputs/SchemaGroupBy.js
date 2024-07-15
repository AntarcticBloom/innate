"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchemaCountAggregate_1 = require("../outputs/SchemaCountAggregate");
const SchemaMaxAggregate_1 = require("../outputs/SchemaMaxAggregate");
const SchemaMinAggregate_1 = require("../outputs/SchemaMinAggregate");
let SchemaGroupBy = class SchemaGroupBy {
    id;
    name;
    tracked;
    isNewestProductionVersion;
    createdAt;
    updatedAt;
    _count;
    _min;
    _max;
};
exports.SchemaGroupBy = SchemaGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SchemaGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SchemaGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SchemaGroupBy.prototype, "tracked", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SchemaGroupBy.prototype, "isNewestProductionVersion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SchemaGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SchemaGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaCountAggregate_1.SchemaCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaCountAggregate_1.SchemaCountAggregate)
], SchemaGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaMinAggregate_1.SchemaMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaMinAggregate_1.SchemaMinAggregate)
], SchemaGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaMaxAggregate_1.SchemaMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaMaxAggregate_1.SchemaMaxAggregate)
], SchemaGroupBy.prototype, "_max", void 0);
exports.SchemaGroupBy = SchemaGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SchemaGroupBy", {})
], SchemaGroupBy);
