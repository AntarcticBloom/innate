"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCreateWithoutFieldAnnotationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const prismaClient_1 = require("../../../../prismaClient");
const FieldCreateNestedManyWithoutTableInput_1 = require("../inputs/FieldCreateNestedManyWithoutTableInput");
const SchemaCreateNestedOneWithoutTablesInput_1 = require("../inputs/SchemaCreateNestedOneWithoutTablesInput");
let TableCreateWithoutFieldAnnotationsInput = class TableCreateWithoutFieldAnnotationsInput {
    id;
    name;
    modelName;
    relations;
    createdAt;
    updatedAt;
    fields;
    schema;
};
exports.TableCreateWithoutFieldAnnotationsInput = TableCreateWithoutFieldAnnotationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TableCreateWithoutFieldAnnotationsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TableCreateWithoutFieldAnnotationsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TableCreateWithoutFieldAnnotationsInput.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], TableCreateWithoutFieldAnnotationsInput.prototype, "relations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TableCreateWithoutFieldAnnotationsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TableCreateWithoutFieldAnnotationsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldCreateNestedManyWithoutTableInput_1.FieldCreateNestedManyWithoutTableInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldCreateNestedManyWithoutTableInput_1.FieldCreateNestedManyWithoutTableInput)
], TableCreateWithoutFieldAnnotationsInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaCreateNestedOneWithoutTablesInput_1.SchemaCreateNestedOneWithoutTablesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaCreateNestedOneWithoutTablesInput_1.SchemaCreateNestedOneWithoutTablesInput)
], TableCreateWithoutFieldAnnotationsInput.prototype, "schema", void 0);
exports.TableCreateWithoutFieldAnnotationsInput = TableCreateWithoutFieldAnnotationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableCreateWithoutFieldAnnotationsInput", {})
], TableCreateWithoutFieldAnnotationsInput);
