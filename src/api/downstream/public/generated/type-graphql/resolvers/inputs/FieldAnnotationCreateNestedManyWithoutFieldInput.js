"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationCreateNestedManyWithoutFieldInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationCreateManyFieldInputEnvelope_1 = require("../inputs/FieldAnnotationCreateManyFieldInputEnvelope");
const FieldAnnotationCreateOrConnectWithoutFieldInput_1 = require("../inputs/FieldAnnotationCreateOrConnectWithoutFieldInput");
const FieldAnnotationCreateWithoutFieldInput_1 = require("../inputs/FieldAnnotationCreateWithoutFieldInput");
const FieldAnnotationWhereUniqueInput_1 = require("../inputs/FieldAnnotationWhereUniqueInput");
let FieldAnnotationCreateNestedManyWithoutFieldInput = class FieldAnnotationCreateNestedManyWithoutFieldInput {
    create;
    connectOrCreate;
    createMany;
    connect;
};
exports.FieldAnnotationCreateNestedManyWithoutFieldInput = FieldAnnotationCreateNestedManyWithoutFieldInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationCreateWithoutFieldInput_1.FieldAnnotationCreateWithoutFieldInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationCreateNestedManyWithoutFieldInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationCreateOrConnectWithoutFieldInput_1.FieldAnnotationCreateOrConnectWithoutFieldInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationCreateNestedManyWithoutFieldInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationCreateManyFieldInputEnvelope_1.FieldAnnotationCreateManyFieldInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationCreateManyFieldInputEnvelope_1.FieldAnnotationCreateManyFieldInputEnvelope)
], FieldAnnotationCreateNestedManyWithoutFieldInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationCreateNestedManyWithoutFieldInput.prototype, "connect", void 0);
exports.FieldAnnotationCreateNestedManyWithoutFieldInput = FieldAnnotationCreateNestedManyWithoutFieldInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationCreateNestedManyWithoutFieldInput", {})
], FieldAnnotationCreateNestedManyWithoutFieldInput);
