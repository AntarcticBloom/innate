"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCreateWithoutSchemaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const client_1 = require("@prisma/client");
const FieldAnnotationCreateNestedManyWithoutTableInput_1 = require("../inputs/FieldAnnotationCreateNestedManyWithoutTableInput");
const FieldCreateNestedManyWithoutTableInput_1 = require("../inputs/FieldCreateNestedManyWithoutTableInput");
let TableCreateWithoutSchemaInput = class TableCreateWithoutSchemaInput {
    id;
    name;
    modelName;
    relations;
    createdAt;
    updatedAt;
    fields;
    fieldAnnotations;
};
exports.TableCreateWithoutSchemaInput = TableCreateWithoutSchemaInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TableCreateWithoutSchemaInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TableCreateWithoutSchemaInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TableCreateWithoutSchemaInput.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], TableCreateWithoutSchemaInput.prototype, "relations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TableCreateWithoutSchemaInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TableCreateWithoutSchemaInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldCreateNestedManyWithoutTableInput_1.FieldCreateNestedManyWithoutTableInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldCreateNestedManyWithoutTableInput_1.FieldCreateNestedManyWithoutTableInput)
], TableCreateWithoutSchemaInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationCreateNestedManyWithoutTableInput_1.FieldAnnotationCreateNestedManyWithoutTableInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationCreateNestedManyWithoutTableInput_1.FieldAnnotationCreateNestedManyWithoutTableInput)
], TableCreateWithoutSchemaInput.prototype, "fieldAnnotations", void 0);
exports.TableCreateWithoutSchemaInput = TableCreateWithoutSchemaInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableCreateWithoutSchemaInput", {})
], TableCreateWithoutSchemaInput);
