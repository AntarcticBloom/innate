"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldCreateWithoutFieldAnnotationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableCreateNestedOneWithoutFieldsInput_1 = require("../inputs/TableCreateNestedOneWithoutFieldsInput");
let FieldCreateWithoutFieldAnnotationsInput = class FieldCreateWithoutFieldAnnotationsInput {
    id;
    name;
    type;
    createdAt;
    updatedAt;
    table;
};
exports.FieldCreateWithoutFieldAnnotationsInput = FieldCreateWithoutFieldAnnotationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldCreateWithoutFieldAnnotationsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldCreateWithoutFieldAnnotationsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldCreateWithoutFieldAnnotationsInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FieldCreateWithoutFieldAnnotationsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FieldCreateWithoutFieldAnnotationsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableCreateNestedOneWithoutFieldsInput_1.TableCreateNestedOneWithoutFieldsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableCreateNestedOneWithoutFieldsInput_1.TableCreateNestedOneWithoutFieldsInput)
], FieldCreateWithoutFieldAnnotationsInput.prototype, "table", void 0);
exports.FieldCreateWithoutFieldAnnotationsInput = FieldCreateWithoutFieldAnnotationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldCreateWithoutFieldAnnotationsInput", {})
], FieldCreateWithoutFieldAnnotationsInput);
