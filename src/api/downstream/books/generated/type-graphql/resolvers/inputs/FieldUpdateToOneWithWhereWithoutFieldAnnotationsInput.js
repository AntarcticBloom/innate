"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldUpdateToOneWithWhereWithoutFieldAnnotationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldUpdateWithoutFieldAnnotationsInput_1 = require("../inputs/FieldUpdateWithoutFieldAnnotationsInput");
const FieldWhereInput_1 = require("../inputs/FieldWhereInput");
let FieldUpdateToOneWithWhereWithoutFieldAnnotationsInput = class FieldUpdateToOneWithWhereWithoutFieldAnnotationsInput {
    where;
    data;
};
exports.FieldUpdateToOneWithWhereWithoutFieldAnnotationsInput = FieldUpdateToOneWithWhereWithoutFieldAnnotationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldWhereInput_1.FieldWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldWhereInput_1.FieldWhereInput)
], FieldUpdateToOneWithWhereWithoutFieldAnnotationsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldUpdateWithoutFieldAnnotationsInput_1.FieldUpdateWithoutFieldAnnotationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldUpdateWithoutFieldAnnotationsInput_1.FieldUpdateWithoutFieldAnnotationsInput)
], FieldUpdateToOneWithWhereWithoutFieldAnnotationsInput.prototype, "data", void 0);
exports.FieldUpdateToOneWithWhereWithoutFieldAnnotationsInput = FieldUpdateToOneWithWhereWithoutFieldAnnotationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldUpdateToOneWithWhereWithoutFieldAnnotationsInput", {})
], FieldUpdateToOneWithWhereWithoutFieldAnnotationsInput);
