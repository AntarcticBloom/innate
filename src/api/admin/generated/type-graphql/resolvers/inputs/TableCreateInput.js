"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const prismaClient_1 = require("../../../../prismaClient");
const FieldAnnotationCreateNestedManyWithoutTableInput_1 = require("../inputs/FieldAnnotationCreateNestedManyWithoutTableInput");
const FieldCreateNestedManyWithoutTableInput_1 = require("../inputs/FieldCreateNestedManyWithoutTableInput");
const SchemaCreateNestedOneWithoutTablesInput_1 = require("../inputs/SchemaCreateNestedOneWithoutTablesInput");
let TableCreateInput = class TableCreateInput {
    id;
    name;
    modelName;
    relations;
    createdAt;
    updatedAt;
    fields;
    fieldAnnotations;
    schema;
};
exports.TableCreateInput = TableCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TableCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TableCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TableCreateInput.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], TableCreateInput.prototype, "relations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TableCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TableCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldCreateNestedManyWithoutTableInput_1.FieldCreateNestedManyWithoutTableInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldCreateNestedManyWithoutTableInput_1.FieldCreateNestedManyWithoutTableInput)
], TableCreateInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationCreateNestedManyWithoutTableInput_1.FieldAnnotationCreateNestedManyWithoutTableInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationCreateNestedManyWithoutTableInput_1.FieldAnnotationCreateNestedManyWithoutTableInput)
], TableCreateInput.prototype, "fieldAnnotations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaCreateNestedOneWithoutTablesInput_1.SchemaCreateNestedOneWithoutTablesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaCreateNestedOneWithoutTablesInput_1.SchemaCreateNestedOneWithoutTablesInput)
], TableCreateInput.prototype, "schema", void 0);
exports.TableCreateInput = TableCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableCreateInput", {})
], TableCreateInput);
