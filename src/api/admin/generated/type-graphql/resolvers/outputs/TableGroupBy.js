"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const prismaClient_1 = require("../../../../prismaClient");
const TableCountAggregate_1 = require("../outputs/TableCountAggregate");
const TableMaxAggregate_1 = require("../outputs/TableMaxAggregate");
const TableMinAggregate_1 = require("../outputs/TableMinAggregate");
let TableGroupBy = class TableGroupBy {
    id;
    schemaId;
    name;
    modelName;
    relations;
    createdAt;
    updatedAt;
    _count;
    _min;
    _max;
};
exports.TableGroupBy = TableGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TableGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TableGroupBy.prototype, "schemaId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TableGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TableGroupBy.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], TableGroupBy.prototype, "relations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TableGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TableGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableCountAggregate_1.TableCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableCountAggregate_1.TableCountAggregate)
], TableGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableMinAggregate_1.TableMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableMinAggregate_1.TableMinAggregate)
], TableGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableMaxAggregate_1.TableMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableMaxAggregate_1.TableMaxAggregate)
], TableGroupBy.prototype, "_max", void 0);
exports.TableGroupBy = TableGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TableGroupBy", {})
], TableGroupBy);
