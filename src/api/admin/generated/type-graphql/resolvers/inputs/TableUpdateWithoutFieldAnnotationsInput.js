"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableUpdateWithoutFieldAnnotationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const prismaClient_1 = require("../../../../prismaClient");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FieldUpdateManyWithoutTableNestedInput_1 = require("../inputs/FieldUpdateManyWithoutTableNestedInput");
const SchemaUpdateOneWithoutTablesNestedInput_1 = require("../inputs/SchemaUpdateOneWithoutTablesNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let TableUpdateWithoutFieldAnnotationsInput = class TableUpdateWithoutFieldAnnotationsInput {
    id;
    name;
    modelName;
    relations;
    createdAt;
    updatedAt;
    fields;
    schema;
};
exports.TableUpdateWithoutFieldAnnotationsInput = TableUpdateWithoutFieldAnnotationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TableUpdateWithoutFieldAnnotationsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TableUpdateWithoutFieldAnnotationsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TableUpdateWithoutFieldAnnotationsInput.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], TableUpdateWithoutFieldAnnotationsInput.prototype, "relations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TableUpdateWithoutFieldAnnotationsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TableUpdateWithoutFieldAnnotationsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldUpdateManyWithoutTableNestedInput_1.FieldUpdateManyWithoutTableNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldUpdateManyWithoutTableNestedInput_1.FieldUpdateManyWithoutTableNestedInput)
], TableUpdateWithoutFieldAnnotationsInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaUpdateOneWithoutTablesNestedInput_1.SchemaUpdateOneWithoutTablesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaUpdateOneWithoutTablesNestedInput_1.SchemaUpdateOneWithoutTablesNestedInput)
], TableUpdateWithoutFieldAnnotationsInput.prototype, "schema", void 0);
exports.TableUpdateWithoutFieldAnnotationsInput = TableUpdateWithoutFieldAnnotationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableUpdateWithoutFieldAnnotationsInput", {})
], TableUpdateWithoutFieldAnnotationsInput);
