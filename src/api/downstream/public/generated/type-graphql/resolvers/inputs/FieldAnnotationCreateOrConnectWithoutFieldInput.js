"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationCreateOrConnectWithoutFieldInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationCreateWithoutFieldInput_1 = require("../inputs/FieldAnnotationCreateWithoutFieldInput");
const FieldAnnotationWhereUniqueInput_1 = require("../inputs/FieldAnnotationWhereUniqueInput");
let FieldAnnotationCreateOrConnectWithoutFieldInput = class FieldAnnotationCreateOrConnectWithoutFieldInput {
    where;
    create;
};
exports.FieldAnnotationCreateOrConnectWithoutFieldInput = FieldAnnotationCreateOrConnectWithoutFieldInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput)
], FieldAnnotationCreateOrConnectWithoutFieldInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationCreateWithoutFieldInput_1.FieldAnnotationCreateWithoutFieldInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldAnnotationCreateWithoutFieldInput_1.FieldAnnotationCreateWithoutFieldInput)
], FieldAnnotationCreateOrConnectWithoutFieldInput.prototype, "create", void 0);
exports.FieldAnnotationCreateOrConnectWithoutFieldInput = FieldAnnotationCreateOrConnectWithoutFieldInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationCreateOrConnectWithoutFieldInput", {})
], FieldAnnotationCreateOrConnectWithoutFieldInput);
