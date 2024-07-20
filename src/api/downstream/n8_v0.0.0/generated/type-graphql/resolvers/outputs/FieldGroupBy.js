"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldCountAggregate_1 = require("../outputs/FieldCountAggregate");
const FieldMaxAggregate_1 = require("../outputs/FieldMaxAggregate");
const FieldMinAggregate_1 = require("../outputs/FieldMinAggregate");
let FieldGroupBy = class FieldGroupBy {
    id;
    tableId;
    name;
    type;
    createdAt;
    updatedAt;
    _count;
    _min;
    _max;
};
exports.FieldGroupBy = FieldGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldGroupBy.prototype, "tableId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], FieldGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], FieldGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldCountAggregate_1.FieldCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldCountAggregate_1.FieldCountAggregate)
], FieldGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldMinAggregate_1.FieldMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldMinAggregate_1.FieldMinAggregate)
], FieldGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldMaxAggregate_1.FieldMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldMaxAggregate_1.FieldMaxAggregate)
], FieldGroupBy.prototype, "_max", void 0);
exports.FieldGroupBy = FieldGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("FieldGroupBy", {})
], FieldGroupBy);
