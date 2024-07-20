"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationUpdateManyWithoutTableNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationCreateManyTableInputEnvelope_1 = require("../inputs/FieldAnnotationCreateManyTableInputEnvelope");
const FieldAnnotationCreateOrConnectWithoutTableInput_1 = require("../inputs/FieldAnnotationCreateOrConnectWithoutTableInput");
const FieldAnnotationCreateWithoutTableInput_1 = require("../inputs/FieldAnnotationCreateWithoutTableInput");
const FieldAnnotationScalarWhereInput_1 = require("../inputs/FieldAnnotationScalarWhereInput");
const FieldAnnotationUpdateManyWithWhereWithoutTableInput_1 = require("../inputs/FieldAnnotationUpdateManyWithWhereWithoutTableInput");
const FieldAnnotationUpdateWithWhereUniqueWithoutTableInput_1 = require("../inputs/FieldAnnotationUpdateWithWhereUniqueWithoutTableInput");
const FieldAnnotationUpsertWithWhereUniqueWithoutTableInput_1 = require("../inputs/FieldAnnotationUpsertWithWhereUniqueWithoutTableInput");
const FieldAnnotationWhereUniqueInput_1 = require("../inputs/FieldAnnotationWhereUniqueInput");
let FieldAnnotationUpdateManyWithoutTableNestedInput = class FieldAnnotationUpdateManyWithoutTableNestedInput {
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
exports.FieldAnnotationUpdateManyWithoutTableNestedInput = FieldAnnotationUpdateManyWithoutTableNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationCreateWithoutTableInput_1.FieldAnnotationCreateWithoutTableInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationUpdateManyWithoutTableNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationCreateOrConnectWithoutTableInput_1.FieldAnnotationCreateOrConnectWithoutTableInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationUpdateManyWithoutTableNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationUpsertWithWhereUniqueWithoutTableInput_1.FieldAnnotationUpsertWithWhereUniqueWithoutTableInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationUpdateManyWithoutTableNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationCreateManyTableInputEnvelope_1.FieldAnnotationCreateManyTableInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationCreateManyTableInputEnvelope_1.FieldAnnotationCreateManyTableInputEnvelope)
], FieldAnnotationUpdateManyWithoutTableNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationUpdateManyWithoutTableNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationUpdateManyWithoutTableNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationUpdateManyWithoutTableNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationUpdateManyWithoutTableNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationUpdateWithWhereUniqueWithoutTableInput_1.FieldAnnotationUpdateWithWhereUniqueWithoutTableInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationUpdateManyWithoutTableNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationUpdateManyWithWhereWithoutTableInput_1.FieldAnnotationUpdateManyWithWhereWithoutTableInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationUpdateManyWithoutTableNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationScalarWhereInput_1.FieldAnnotationScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationUpdateManyWithoutTableNestedInput.prototype, "deleteMany", void 0);
exports.FieldAnnotationUpdateManyWithoutTableNestedInput = FieldAnnotationUpdateManyWithoutTableNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationUpdateManyWithoutTableNestedInput", {})
], FieldAnnotationUpdateManyWithoutTableNestedInput);
