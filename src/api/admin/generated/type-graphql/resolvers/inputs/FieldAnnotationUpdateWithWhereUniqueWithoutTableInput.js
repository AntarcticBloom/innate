"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationUpdateWithWhereUniqueWithoutTableInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationUpdateWithoutTableInput_1 = require("../inputs/FieldAnnotationUpdateWithoutTableInput");
const FieldAnnotationWhereUniqueInput_1 = require("../inputs/FieldAnnotationWhereUniqueInput");
let FieldAnnotationUpdateWithWhereUniqueWithoutTableInput = class FieldAnnotationUpdateWithWhereUniqueWithoutTableInput {
    where;
    data;
};
exports.FieldAnnotationUpdateWithWhereUniqueWithoutTableInput = FieldAnnotationUpdateWithWhereUniqueWithoutTableInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput)
], FieldAnnotationUpdateWithWhereUniqueWithoutTableInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationUpdateWithoutTableInput_1.FieldAnnotationUpdateWithoutTableInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldAnnotationUpdateWithoutTableInput_1.FieldAnnotationUpdateWithoutTableInput)
], FieldAnnotationUpdateWithWhereUniqueWithoutTableInput.prototype, "data", void 0);
exports.FieldAnnotationUpdateWithWhereUniqueWithoutTableInput = FieldAnnotationUpdateWithWhereUniqueWithoutTableInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationUpdateWithWhereUniqueWithoutTableInput", {})
], FieldAnnotationUpdateWithWhereUniqueWithoutTableInput);
