"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldUpsertWithoutFieldAnnotationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldCreateWithoutFieldAnnotationsInput_1 = require("../inputs/FieldCreateWithoutFieldAnnotationsInput");
const FieldUpdateWithoutFieldAnnotationsInput_1 = require("../inputs/FieldUpdateWithoutFieldAnnotationsInput");
const FieldWhereInput_1 = require("../inputs/FieldWhereInput");
let FieldUpsertWithoutFieldAnnotationsInput = class FieldUpsertWithoutFieldAnnotationsInput {
    update;
    create;
    where;
};
exports.FieldUpsertWithoutFieldAnnotationsInput = FieldUpsertWithoutFieldAnnotationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldUpdateWithoutFieldAnnotationsInput_1.FieldUpdateWithoutFieldAnnotationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldUpdateWithoutFieldAnnotationsInput_1.FieldUpdateWithoutFieldAnnotationsInput)
], FieldUpsertWithoutFieldAnnotationsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldCreateWithoutFieldAnnotationsInput_1.FieldCreateWithoutFieldAnnotationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldCreateWithoutFieldAnnotationsInput_1.FieldCreateWithoutFieldAnnotationsInput)
], FieldUpsertWithoutFieldAnnotationsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldWhereInput_1.FieldWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldWhereInput_1.FieldWhereInput)
], FieldUpsertWithoutFieldAnnotationsInput.prototype, "where", void 0);
exports.FieldUpsertWithoutFieldAnnotationsInput = FieldUpsertWithoutFieldAnnotationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldUpsertWithoutFieldAnnotationsInput", {})
], FieldUpsertWithoutFieldAnnotationsInput);
