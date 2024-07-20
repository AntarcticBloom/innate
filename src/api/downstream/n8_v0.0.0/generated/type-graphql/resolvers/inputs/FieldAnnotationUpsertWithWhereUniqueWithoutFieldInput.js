"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationUpsertWithWhereUniqueWithoutFieldInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationCreateWithoutFieldInput_1 = require("../inputs/FieldAnnotationCreateWithoutFieldInput");
const FieldAnnotationUpdateWithoutFieldInput_1 = require("../inputs/FieldAnnotationUpdateWithoutFieldInput");
const FieldAnnotationWhereUniqueInput_1 = require("../inputs/FieldAnnotationWhereUniqueInput");
let FieldAnnotationUpsertWithWhereUniqueWithoutFieldInput = class FieldAnnotationUpsertWithWhereUniqueWithoutFieldInput {
    where;
    update;
    create;
};
exports.FieldAnnotationUpsertWithWhereUniqueWithoutFieldInput = FieldAnnotationUpsertWithWhereUniqueWithoutFieldInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput)
], FieldAnnotationUpsertWithWhereUniqueWithoutFieldInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationUpdateWithoutFieldInput_1.FieldAnnotationUpdateWithoutFieldInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldAnnotationUpdateWithoutFieldInput_1.FieldAnnotationUpdateWithoutFieldInput)
], FieldAnnotationUpsertWithWhereUniqueWithoutFieldInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationCreateWithoutFieldInput_1.FieldAnnotationCreateWithoutFieldInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldAnnotationCreateWithoutFieldInput_1.FieldAnnotationCreateWithoutFieldInput)
], FieldAnnotationUpsertWithWhereUniqueWithoutFieldInput.prototype, "create", void 0);
exports.FieldAnnotationUpsertWithWhereUniqueWithoutFieldInput = FieldAnnotationUpsertWithWhereUniqueWithoutFieldInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationUpsertWithWhereUniqueWithoutFieldInput", {})
], FieldAnnotationUpsertWithWhereUniqueWithoutFieldInput);
