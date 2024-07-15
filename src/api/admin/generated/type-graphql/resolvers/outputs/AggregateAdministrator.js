"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAdministrator = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdministratorCountAggregate_1 = require("../outputs/AdministratorCountAggregate");
const AdministratorMaxAggregate_1 = require("../outputs/AdministratorMaxAggregate");
const AdministratorMinAggregate_1 = require("../outputs/AdministratorMinAggregate");
let AggregateAdministrator = class AggregateAdministrator {
    _count;
    _min;
    _max;
};
exports.AggregateAdministrator = AggregateAdministrator;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdministratorCountAggregate_1.AdministratorCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdministratorCountAggregate_1.AdministratorCountAggregate)
], AggregateAdministrator.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdministratorMinAggregate_1.AdministratorMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdministratorMinAggregate_1.AdministratorMinAggregate)
], AggregateAdministrator.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdministratorMaxAggregate_1.AdministratorMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdministratorMaxAggregate_1.AdministratorMaxAggregate)
], AggregateAdministrator.prototype, "_max", void 0);
exports.AggregateAdministrator = AggregateAdministrator = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateAdministrator", {})
], AggregateAdministrator);
