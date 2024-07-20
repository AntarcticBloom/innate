"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldUpdateOneWithoutFieldAnnotationsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldCreateOrConnectWithoutFieldAnnotationsInput_1 = require("../inputs/FieldCreateOrConnectWithoutFieldAnnotationsInput");
const FieldCreateWithoutFieldAnnotationsInput_1 = require("../inputs/FieldCreateWithoutFieldAnnotationsInput");
const FieldUpdateToOneWithWhereWithoutFieldAnnotationsInput_1 = require("../inputs/FieldUpdateToOneWithWhereWithoutFieldAnnotationsInput");
const FieldUpsertWithoutFieldAnnotationsInput_1 = require("../inputs/FieldUpsertWithoutFieldAnnotationsInput");
const FieldWhereInput_1 = require("../inputs/FieldWhereInput");
const FieldWhereUniqueInput_1 = require("../inputs/FieldWhereUniqueInput");
let FieldUpdateOneWithoutFieldAnnotationsNestedInput = class FieldUpdateOneWithoutFieldAnnotationsNestedInput {
    create;
    connectOrCreate;
    upsert;
    disconnect;
    delete;
    connect;
    update;
};
exports.FieldUpdateOneWithoutFieldAnnotationsNestedInput = FieldUpdateOneWithoutFieldAnnotationsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldCreateWithoutFieldAnnotationsInput_1.FieldCreateWithoutFieldAnnotationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldCreateWithoutFieldAnnotationsInput_1.FieldCreateWithoutFieldAnnotationsInput)
], FieldUpdateOneWithoutFieldAnnotationsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldCreateOrConnectWithoutFieldAnnotationsInput_1.FieldCreateOrConnectWithoutFieldAnnotationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldCreateOrConnectWithoutFieldAnnotationsInput_1.FieldCreateOrConnectWithoutFieldAnnotationsInput)
], FieldUpdateOneWithoutFieldAnnotationsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldUpsertWithoutFieldAnnotationsInput_1.FieldUpsertWithoutFieldAnnotationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldUpsertWithoutFieldAnnotationsInput_1.FieldUpsertWithoutFieldAnnotationsInput)
], FieldUpdateOneWithoutFieldAnnotationsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldWhereInput_1.FieldWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldWhereInput_1.FieldWhereInput)
], FieldUpdateOneWithoutFieldAnnotationsNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldWhereInput_1.FieldWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldWhereInput_1.FieldWhereInput)
], FieldUpdateOneWithoutFieldAnnotationsNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldWhereUniqueInput_1.FieldWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldWhereUniqueInput_1.FieldWhereUniqueInput)
], FieldUpdateOneWithoutFieldAnnotationsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldUpdateToOneWithWhereWithoutFieldAnnotationsInput_1.FieldUpdateToOneWithWhereWithoutFieldAnnotationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldUpdateToOneWithWhereWithoutFieldAnnotationsInput_1.FieldUpdateToOneWithWhereWithoutFieldAnnotationsInput)
], FieldUpdateOneWithoutFieldAnnotationsNestedInput.prototype, "update", void 0);
exports.FieldUpdateOneWithoutFieldAnnotationsNestedInput = FieldUpdateOneWithoutFieldAnnotationsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldUpdateOneWithoutFieldAnnotationsNestedInput", {})
], FieldUpdateOneWithoutFieldAnnotationsNestedInput);
