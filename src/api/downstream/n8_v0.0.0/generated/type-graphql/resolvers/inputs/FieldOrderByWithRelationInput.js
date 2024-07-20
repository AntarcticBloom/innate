"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationOrderByRelationAggregateInput_1 = require("../inputs/FieldAnnotationOrderByRelationAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const TableOrderByWithRelationInput_1 = require("../inputs/TableOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let FieldOrderByWithRelationInput = class FieldOrderByWithRelationInput {
    id;
    tableId;
    name;
    type;
    createdAt;
    updatedAt;
    table;
    fieldAnnotations;
};
exports.FieldOrderByWithRelationInput = FieldOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], FieldOrderByWithRelationInput.prototype, "tableId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldOrderByWithRelationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableOrderByWithRelationInput_1.TableOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableOrderByWithRelationInput_1.TableOrderByWithRelationInput)
], FieldOrderByWithRelationInput.prototype, "table", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationOrderByRelationAggregateInput_1.FieldAnnotationOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationOrderByRelationAggregateInput_1.FieldAnnotationOrderByRelationAggregateInput)
], FieldOrderByWithRelationInput.prototype, "fieldAnnotations", void 0);
exports.FieldOrderByWithRelationInput = FieldOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldOrderByWithRelationInput", {})
], FieldOrderByWithRelationInput);
