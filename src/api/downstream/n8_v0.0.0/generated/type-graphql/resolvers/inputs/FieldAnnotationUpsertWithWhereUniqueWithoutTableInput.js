"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationUpsertWithWhereUniqueWithoutTableInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationCreateWithoutTableInput_1 = require("../inputs/FieldAnnotationCreateWithoutTableInput");
const FieldAnnotationUpdateWithoutTableInput_1 = require("../inputs/FieldAnnotationUpdateWithoutTableInput");
const FieldAnnotationWhereUniqueInput_1 = require("../inputs/FieldAnnotationWhereUniqueInput");
let FieldAnnotationUpsertWithWhereUniqueWithoutTableInput = class FieldAnnotationUpsertWithWhereUniqueWithoutTableInput {
    where;
    update;
    create;
};
exports.FieldAnnotationUpsertWithWhereUniqueWithoutTableInput = FieldAnnotationUpsertWithWhereUniqueWithoutTableInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput)
], FieldAnnotationUpsertWithWhereUniqueWithoutTableInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationUpdateWithoutTableInput_1.FieldAnnotationUpdateWithoutTableInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldAnnotationUpdateWithoutTableInput_1.FieldAnnotationUpdateWithoutTableInput)
], FieldAnnotationUpsertWithWhereUniqueWithoutTableInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationCreateWithoutTableInput_1.FieldAnnotationCreateWithoutTableInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldAnnotationCreateWithoutTableInput_1.FieldAnnotationCreateWithoutTableInput)
], FieldAnnotationUpsertWithWhereUniqueWithoutTableInput.prototype, "create", void 0);
exports.FieldAnnotationUpsertWithWhereUniqueWithoutTableInput = FieldAnnotationUpsertWithWhereUniqueWithoutTableInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationUpsertWithWhereUniqueWithoutTableInput", {})
], FieldAnnotationUpsertWithWhereUniqueWithoutTableInput);
