"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableUpdateWithoutSchemaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const prismaClient_1 = require("../../../../prismaClient");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FieldAnnotationUpdateManyWithoutTableNestedInput_1 = require("../inputs/FieldAnnotationUpdateManyWithoutTableNestedInput");
const FieldUpdateManyWithoutTableNestedInput_1 = require("../inputs/FieldUpdateManyWithoutTableNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let TableUpdateWithoutSchemaInput = class TableUpdateWithoutSchemaInput {
    id;
    name;
    modelName;
    relations;
    createdAt;
    updatedAt;
    fields;
    fieldAnnotations;
};
exports.TableUpdateWithoutSchemaInput = TableUpdateWithoutSchemaInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TableUpdateWithoutSchemaInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TableUpdateWithoutSchemaInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TableUpdateWithoutSchemaInput.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], TableUpdateWithoutSchemaInput.prototype, "relations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TableUpdateWithoutSchemaInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TableUpdateWithoutSchemaInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldUpdateManyWithoutTableNestedInput_1.FieldUpdateManyWithoutTableNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldUpdateManyWithoutTableNestedInput_1.FieldUpdateManyWithoutTableNestedInput)
], TableUpdateWithoutSchemaInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationUpdateManyWithoutTableNestedInput_1.FieldAnnotationUpdateManyWithoutTableNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationUpdateManyWithoutTableNestedInput_1.FieldAnnotationUpdateManyWithoutTableNestedInput)
], TableUpdateWithoutSchemaInput.prototype, "fieldAnnotations", void 0);
exports.TableUpdateWithoutSchemaInput = TableUpdateWithoutSchemaInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableUpdateWithoutSchemaInput", {})
], TableUpdateWithoutSchemaInput);
