"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCreateWithoutFieldsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const prismaClient_1 = require("../../../../prismaClient");
const FieldAnnotationCreateNestedManyWithoutTableInput_1 = require("../inputs/FieldAnnotationCreateNestedManyWithoutTableInput");
const SchemaCreateNestedOneWithoutTablesInput_1 = require("../inputs/SchemaCreateNestedOneWithoutTablesInput");
let TableCreateWithoutFieldsInput = class TableCreateWithoutFieldsInput {
    id;
    name;
    modelName;
    relations;
    createdAt;
    updatedAt;
    fieldAnnotations;
    schema;
};
exports.TableCreateWithoutFieldsInput = TableCreateWithoutFieldsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TableCreateWithoutFieldsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TableCreateWithoutFieldsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TableCreateWithoutFieldsInput.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], TableCreateWithoutFieldsInput.prototype, "relations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TableCreateWithoutFieldsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TableCreateWithoutFieldsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationCreateNestedManyWithoutTableInput_1.FieldAnnotationCreateNestedManyWithoutTableInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationCreateNestedManyWithoutTableInput_1.FieldAnnotationCreateNestedManyWithoutTableInput)
], TableCreateWithoutFieldsInput.prototype, "fieldAnnotations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaCreateNestedOneWithoutTablesInput_1.SchemaCreateNestedOneWithoutTablesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaCreateNestedOneWithoutTablesInput_1.SchemaCreateNestedOneWithoutTablesInput)
], TableCreateWithoutFieldsInput.prototype, "schema", void 0);
exports.TableCreateWithoutFieldsInput = TableCreateWithoutFieldsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableCreateWithoutFieldsInput", {})
], TableCreateWithoutFieldsInput);
