"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldCreateOrConnectWithoutFieldAnnotationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldCreateWithoutFieldAnnotationsInput_1 = require("../inputs/FieldCreateWithoutFieldAnnotationsInput");
const FieldWhereUniqueInput_1 = require("../inputs/FieldWhereUniqueInput");
let FieldCreateOrConnectWithoutFieldAnnotationsInput = class FieldCreateOrConnectWithoutFieldAnnotationsInput {
    where;
    create;
};
exports.FieldCreateOrConnectWithoutFieldAnnotationsInput = FieldCreateOrConnectWithoutFieldAnnotationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldWhereUniqueInput_1.FieldWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldWhereUniqueInput_1.FieldWhereUniqueInput)
], FieldCreateOrConnectWithoutFieldAnnotationsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldCreateWithoutFieldAnnotationsInput_1.FieldCreateWithoutFieldAnnotationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldCreateWithoutFieldAnnotationsInput_1.FieldCreateWithoutFieldAnnotationsInput)
], FieldCreateOrConnectWithoutFieldAnnotationsInput.prototype, "create", void 0);
exports.FieldCreateOrConnectWithoutFieldAnnotationsInput = FieldCreateOrConnectWithoutFieldAnnotationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldCreateOrConnectWithoutFieldAnnotationsInput", {})
], FieldCreateOrConnectWithoutFieldAnnotationsInput);
