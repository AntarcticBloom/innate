"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const TableOrderByRelationAggregateInput_1 = require("../inputs/TableOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SchemaOrderByWithRelationInput = class SchemaOrderByWithRelationInput {
    id;
    name;
    tracked;
    isNewestProductionVersion;
    createdAt;
    updatedAt;
    tables;
};
exports.SchemaOrderByWithRelationInput = SchemaOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], SchemaOrderByWithRelationInput.prototype, "tracked", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], SchemaOrderByWithRelationInput.prototype, "isNewestProductionVersion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableOrderByRelationAggregateInput_1.TableOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableOrderByRelationAggregateInput_1.TableOrderByRelationAggregateInput)
], SchemaOrderByWithRelationInput.prototype, "tables", void 0);
exports.SchemaOrderByWithRelationInput = SchemaOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SchemaOrderByWithRelationInput", {})
], SchemaOrderByWithRelationInput);
