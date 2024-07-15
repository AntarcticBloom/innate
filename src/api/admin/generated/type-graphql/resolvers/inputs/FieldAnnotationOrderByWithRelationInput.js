"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldOrderByWithRelationInput_1 = require("../inputs/FieldOrderByWithRelationInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const TableOrderByWithRelationInput_1 = require("../inputs/TableOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let FieldAnnotationOrderByWithRelationInput = class FieldAnnotationOrderByWithRelationInput {
    id;
    tableId;
    modelName;
    fieldId;
    fieldName;
    annotation;
    createdAt;
    updatedAt;
    field;
    table;
};
exports.FieldAnnotationOrderByWithRelationInput = FieldAnnotationOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], FieldAnnotationOrderByWithRelationInput.prototype, "tableId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationOrderByWithRelationInput.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], FieldAnnotationOrderByWithRelationInput.prototype, "fieldId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationOrderByWithRelationInput.prototype, "fieldName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationOrderByWithRelationInput.prototype, "annotation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldAnnotationOrderByWithRelationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldOrderByWithRelationInput_1.FieldOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldOrderByWithRelationInput_1.FieldOrderByWithRelationInput)
], FieldAnnotationOrderByWithRelationInput.prototype, "field", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableOrderByWithRelationInput_1.TableOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableOrderByWithRelationInput_1.TableOrderByWithRelationInput)
], FieldAnnotationOrderByWithRelationInput.prototype, "table", void 0);
exports.FieldAnnotationOrderByWithRelationInput = FieldAnnotationOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationOrderByWithRelationInput", {})
], FieldAnnotationOrderByWithRelationInput);
