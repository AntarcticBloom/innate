"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTable = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableCountAggregate_1 = require("../outputs/TableCountAggregate");
const TableMaxAggregate_1 = require("../outputs/TableMaxAggregate");
const TableMinAggregate_1 = require("../outputs/TableMinAggregate");
let AggregateTable = class AggregateTable {
    _count;
    _min;
    _max;
};
exports.AggregateTable = AggregateTable;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableCountAggregate_1.TableCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableCountAggregate_1.TableCountAggregate)
], AggregateTable.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableMinAggregate_1.TableMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableMinAggregate_1.TableMinAggregate)
], AggregateTable.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableMaxAggregate_1.TableMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableMaxAggregate_1.TableMaxAggregate)
], AggregateTable.prototype, "_max", void 0);
exports.AggregateTable = AggregateTable = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTable", {})
], AggregateTable);
