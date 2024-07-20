"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationUpdateManyWithWhereWithoutFieldInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationScalarWhereInput_1 = require("../inputs/FieldAnnotationScalarWhereInput");
const FieldAnnotationUpdateManyMutationInput_1 = require("../inputs/FieldAnnotationUpdateManyMutationInput");
let FieldAnnotationUpdateManyWithWhereWithoutFieldInput = class FieldAnnotationUpdateManyWithWhereWithoutFieldInput {
    where;
    data;
};
exports.FieldAnnotationUpdateManyWithWhereWithoutFieldInput = FieldAnnotationUpdateManyWithWhereWithoutFieldInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationScalarWhereInput_1.FieldAnnotationScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldAnnotationScalarWhereInput_1.FieldAnnotationScalarWhereInput)
], FieldAnnotationUpdateManyWithWhereWithoutFieldInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationUpdateManyMutationInput_1.FieldAnnotationUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldAnnotationUpdateManyMutationInput_1.FieldAnnotationUpdateManyMutationInput)
], FieldAnnotationUpdateManyWithWhereWithoutFieldInput.prototype, "data", void 0);
exports.FieldAnnotationUpdateManyWithWhereWithoutFieldInput = FieldAnnotationUpdateManyWithWhereWithoutFieldInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationUpdateManyWithWhereWithoutFieldInput", {})
], FieldAnnotationUpdateManyWithWhereWithoutFieldInput);
