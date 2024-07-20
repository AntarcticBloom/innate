"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationUpdateManyWithoutFieldNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationCreateManyFieldInputEnvelope_1 = require("../inputs/FieldAnnotationCreateManyFieldInputEnvelope");
const FieldAnnotationCreateOrConnectWithoutFieldInput_1 = require("../inputs/FieldAnnotationCreateOrConnectWithoutFieldInput");
const FieldAnnotationCreateWithoutFieldInput_1 = require("../inputs/FieldAnnotationCreateWithoutFieldInput");
const FieldAnnotationScalarWhereInput_1 = require("../inputs/FieldAnnotationScalarWhereInput");
const FieldAnnotationUpdateManyWithWhereWithoutFieldInput_1 = require("../inputs/FieldAnnotationUpdateManyWithWhereWithoutFieldInput");
const FieldAnnotationUpdateWithWhereUniqueWithoutFieldInput_1 = require("../inputs/FieldAnnotationUpdateWithWhereUniqueWithoutFieldInput");
const FieldAnnotationUpsertWithWhereUniqueWithoutFieldInput_1 = require("../inputs/FieldAnnotationUpsertWithWhereUniqueWithoutFieldInput");
const FieldAnnotationWhereUniqueInput_1 = require("../inputs/FieldAnnotationWhereUniqueInput");
let FieldAnnotationUpdateManyWithoutFieldNestedInput = class FieldAnnotationUpdateManyWithoutFieldNestedInput {
    create;
    connectOrCreate;
    upsert;
    createMany;
    set;
    disconnect;
    delete;
    connect;
    update;
    updateMany;
    deleteMany;
};
exports.FieldAnnotationUpdateManyWithoutFieldNestedInput = FieldAnnotationUpdateManyWithoutFieldNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationCreateWithoutFieldInput_1.FieldAnnotationCreateWithoutFieldInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationUpdateManyWithoutFieldNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationCreateOrConnectWithoutFieldInput_1.FieldAnnotationCreateOrConnectWithoutFieldInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationUpdateManyWithoutFieldNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationUpsertWithWhereUniqueWithoutFieldInput_1.FieldAnnotationUpsertWithWhereUniqueWithoutFieldInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationUpdateManyWithoutFieldNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationCreateManyFieldInputEnvelope_1.FieldAnnotationCreateManyFieldInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationCreateManyFieldInputEnvelope_1.FieldAnnotationCreateManyFieldInputEnvelope)
], FieldAnnotationUpdateManyWithoutFieldNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationUpdateManyWithoutFieldNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationUpdateManyWithoutFieldNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationUpdateManyWithoutFieldNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationUpdateManyWithoutFieldNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationUpdateWithWhereUniqueWithoutFieldInput_1.FieldAnnotationUpdateWithWhereUniqueWithoutFieldInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationUpdateManyWithoutFieldNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationUpdateManyWithWhereWithoutFieldInput_1.FieldAnnotationUpdateManyWithWhereWithoutFieldInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationUpdateManyWithoutFieldNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationScalarWhereInput_1.FieldAnnotationScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationUpdateManyWithoutFieldNestedInput.prototype, "deleteMany", void 0);
exports.FieldAnnotationUpdateManyWithoutFieldNestedInput = FieldAnnotationUpdateManyWithoutFieldNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationUpdateManyWithoutFieldNestedInput", {})
], FieldAnnotationUpdateManyWithoutFieldNestedInput);
