"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationUpdateManyWithWhereWithoutTableInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationScalarWhereInput_1 = require("../inputs/FieldAnnotationScalarWhereInput");
const FieldAnnotationUpdateManyMutationInput_1 = require("../inputs/FieldAnnotationUpdateManyMutationInput");
let FieldAnnotationUpdateManyWithWhereWithoutTableInput = class FieldAnnotationUpdateManyWithWhereWithoutTableInput {
    where;
    data;
};
exports.FieldAnnotationUpdateManyWithWhereWithoutTableInput = FieldAnnotationUpdateManyWithWhereWithoutTableInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationScalarWhereInput_1.FieldAnnotationScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldAnnotationScalarWhereInput_1.FieldAnnotationScalarWhereInput)
], FieldAnnotationUpdateManyWithWhereWithoutTableInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationUpdateManyMutationInput_1.FieldAnnotationUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldAnnotationUpdateManyMutationInput_1.FieldAnnotationUpdateManyMutationInput)
], FieldAnnotationUpdateManyWithWhereWithoutTableInput.prototype, "data", void 0);
exports.FieldAnnotationUpdateManyWithWhereWithoutTableInput = FieldAnnotationUpdateManyWithWhereWithoutTableInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationUpdateManyWithWhereWithoutTableInput", {})
], FieldAnnotationUpdateManyWithWhereWithoutTableInput);
