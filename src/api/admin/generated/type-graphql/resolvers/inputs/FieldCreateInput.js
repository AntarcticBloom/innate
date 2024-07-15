"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationCreateNestedManyWithoutFieldInput_1 = require("../inputs/FieldAnnotationCreateNestedManyWithoutFieldInput");
const TableCreateNestedOneWithoutFieldsInput_1 = require("../inputs/TableCreateNestedOneWithoutFieldsInput");
let FieldCreateInput = class FieldCreateInput {
    id;
    name;
    type;
    createdAt;
    updatedAt;
    table;
    fieldAnnotations;
};
exports.FieldCreateInput = FieldCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldCreateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FieldCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FieldCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableCreateNestedOneWithoutFieldsInput_1.TableCreateNestedOneWithoutFieldsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableCreateNestedOneWithoutFieldsInput_1.TableCreateNestedOneWithoutFieldsInput)
], FieldCreateInput.prototype, "table", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationCreateNestedManyWithoutFieldInput_1.FieldAnnotationCreateNestedManyWithoutFieldInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationCreateNestedManyWithoutFieldInput_1.FieldAnnotationCreateNestedManyWithoutFieldInput)
], FieldCreateInput.prototype, "fieldAnnotations", void 0);
exports.FieldCreateInput = FieldCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldCreateInput", {})
], FieldCreateInput);
