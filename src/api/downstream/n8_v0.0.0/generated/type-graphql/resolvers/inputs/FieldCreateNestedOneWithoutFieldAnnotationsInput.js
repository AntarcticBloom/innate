"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldCreateNestedOneWithoutFieldAnnotationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldCreateOrConnectWithoutFieldAnnotationsInput_1 = require("../inputs/FieldCreateOrConnectWithoutFieldAnnotationsInput");
const FieldCreateWithoutFieldAnnotationsInput_1 = require("../inputs/FieldCreateWithoutFieldAnnotationsInput");
const FieldWhereUniqueInput_1 = require("../inputs/FieldWhereUniqueInput");
let FieldCreateNestedOneWithoutFieldAnnotationsInput = class FieldCreateNestedOneWithoutFieldAnnotationsInput {
    create;
    connectOrCreate;
    connect;
};
exports.FieldCreateNestedOneWithoutFieldAnnotationsInput = FieldCreateNestedOneWithoutFieldAnnotationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldCreateWithoutFieldAnnotationsInput_1.FieldCreateWithoutFieldAnnotationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldCreateWithoutFieldAnnotationsInput_1.FieldCreateWithoutFieldAnnotationsInput)
], FieldCreateNestedOneWithoutFieldAnnotationsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldCreateOrConnectWithoutFieldAnnotationsInput_1.FieldCreateOrConnectWithoutFieldAnnotationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldCreateOrConnectWithoutFieldAnnotationsInput_1.FieldCreateOrConnectWithoutFieldAnnotationsInput)
], FieldCreateNestedOneWithoutFieldAnnotationsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldWhereUniqueInput_1.FieldWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldWhereUniqueInput_1.FieldWhereUniqueInput)
], FieldCreateNestedOneWithoutFieldAnnotationsInput.prototype, "connect", void 0);
exports.FieldCreateNestedOneWithoutFieldAnnotationsInput = FieldCreateNestedOneWithoutFieldAnnotationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldCreateNestedOneWithoutFieldAnnotationsInput", {})
], FieldCreateNestedOneWithoutFieldAnnotationsInput);
