"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationOrderByRelationAggregateInput_1 = require("../inputs/FieldAnnotationOrderByRelationAggregateInput");
const FieldOrderByRelationAggregateInput_1 = require("../inputs/FieldOrderByRelationAggregateInput");
const SchemaOrderByWithRelationInput_1 = require("../inputs/SchemaOrderByWithRelationInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TableOrderByWithRelationInput = class TableOrderByWithRelationInput {
    id;
    schemaId;
    name;
    modelName;
    relations;
    createdAt;
    updatedAt;
    fields;
    fieldAnnotations;
    schema;
};
exports.TableOrderByWithRelationInput = TableOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TableOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], TableOrderByWithRelationInput.prototype, "schemaId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TableOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TableOrderByWithRelationInput.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], TableOrderByWithRelationInput.prototype, "relations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TableOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TableOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldOrderByRelationAggregateInput_1.FieldOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldOrderByRelationAggregateInput_1.FieldOrderByRelationAggregateInput)
], TableOrderByWithRelationInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationOrderByRelationAggregateInput_1.FieldAnnotationOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationOrderByRelationAggregateInput_1.FieldAnnotationOrderByRelationAggregateInput)
], TableOrderByWithRelationInput.prototype, "fieldAnnotations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaOrderByWithRelationInput_1.SchemaOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaOrderByWithRelationInput_1.SchemaOrderByWithRelationInput)
], TableOrderByWithRelationInput.prototype, "schema", void 0);
exports.TableOrderByWithRelationInput = TableOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableOrderByWithRelationInput", {})
], TableOrderByWithRelationInput);
