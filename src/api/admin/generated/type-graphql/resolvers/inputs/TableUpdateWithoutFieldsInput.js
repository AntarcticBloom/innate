"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableUpdateWithoutFieldsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const prismaClient_1 = require("../../../../prismaClient");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FieldAnnotationUpdateManyWithoutTableNestedInput_1 = require("../inputs/FieldAnnotationUpdateManyWithoutTableNestedInput");
const SchemaUpdateOneWithoutTablesNestedInput_1 = require("../inputs/SchemaUpdateOneWithoutTablesNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let TableUpdateWithoutFieldsInput = class TableUpdateWithoutFieldsInput {
    id;
    name;
    modelName;
    relations;
    createdAt;
    updatedAt;
    fieldAnnotations;
    schema;
};
exports.TableUpdateWithoutFieldsInput = TableUpdateWithoutFieldsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TableUpdateWithoutFieldsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TableUpdateWithoutFieldsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TableUpdateWithoutFieldsInput.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], TableUpdateWithoutFieldsInput.prototype, "relations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TableUpdateWithoutFieldsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TableUpdateWithoutFieldsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationUpdateManyWithoutTableNestedInput_1.FieldAnnotationUpdateManyWithoutTableNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationUpdateManyWithoutTableNestedInput_1.FieldAnnotationUpdateManyWithoutTableNestedInput)
], TableUpdateWithoutFieldsInput.prototype, "fieldAnnotations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaUpdateOneWithoutTablesNestedInput_1.SchemaUpdateOneWithoutTablesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaUpdateOneWithoutTablesNestedInput_1.SchemaUpdateOneWithoutTablesNestedInput)
], TableUpdateWithoutFieldsInput.prototype, "schema", void 0);
exports.TableUpdateWithoutFieldsInput = TableUpdateWithoutFieldsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableUpdateWithoutFieldsInput", {})
], TableUpdateWithoutFieldsInput);
