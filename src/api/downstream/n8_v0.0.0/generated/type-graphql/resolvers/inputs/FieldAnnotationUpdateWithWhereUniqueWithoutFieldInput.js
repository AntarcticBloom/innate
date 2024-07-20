"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationUpdateWithWhereUniqueWithoutFieldInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationUpdateWithoutFieldInput_1 = require("../inputs/FieldAnnotationUpdateWithoutFieldInput");
const FieldAnnotationWhereUniqueInput_1 = require("../inputs/FieldAnnotationWhereUniqueInput");
let FieldAnnotationUpdateWithWhereUniqueWithoutFieldInput = class FieldAnnotationUpdateWithWhereUniqueWithoutFieldInput {
    where;
    data;
};
exports.FieldAnnotationUpdateWithWhereUniqueWithoutFieldInput = FieldAnnotationUpdateWithWhereUniqueWithoutFieldInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput)
], FieldAnnotationUpdateWithWhereUniqueWithoutFieldInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationUpdateWithoutFieldInput_1.FieldAnnotationUpdateWithoutFieldInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldAnnotationUpdateWithoutFieldInput_1.FieldAnnotationUpdateWithoutFieldInput)
], FieldAnnotationUpdateWithWhereUniqueWithoutFieldInput.prototype, "data", void 0);
exports.FieldAnnotationUpdateWithWhereUniqueWithoutFieldInput = FieldAnnotationUpdateWithWhereUniqueWithoutFieldInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationUpdateWithWhereUniqueWithoutFieldInput", {})
], FieldAnnotationUpdateWithWhereUniqueWithoutFieldInput);
