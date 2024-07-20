"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldUpdateManyWithoutTableNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldCreateManyTableInputEnvelope_1 = require("../inputs/FieldCreateManyTableInputEnvelope");
const FieldCreateOrConnectWithoutTableInput_1 = require("../inputs/FieldCreateOrConnectWithoutTableInput");
const FieldCreateWithoutTableInput_1 = require("../inputs/FieldCreateWithoutTableInput");
const FieldScalarWhereInput_1 = require("../inputs/FieldScalarWhereInput");
const FieldUpdateManyWithWhereWithoutTableInput_1 = require("../inputs/FieldUpdateManyWithWhereWithoutTableInput");
const FieldUpdateWithWhereUniqueWithoutTableInput_1 = require("../inputs/FieldUpdateWithWhereUniqueWithoutTableInput");
const FieldUpsertWithWhereUniqueWithoutTableInput_1 = require("../inputs/FieldUpsertWithWhereUniqueWithoutTableInput");
const FieldWhereUniqueInput_1 = require("../inputs/FieldWhereUniqueInput");
let FieldUpdateManyWithoutTableNestedInput = class FieldUpdateManyWithoutTableNestedInput {
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
exports.FieldUpdateManyWithoutTableNestedInput = FieldUpdateManyWithoutTableNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldCreateWithoutTableInput_1.FieldCreateWithoutTableInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldUpdateManyWithoutTableNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldCreateOrConnectWithoutTableInput_1.FieldCreateOrConnectWithoutTableInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldUpdateManyWithoutTableNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldUpsertWithWhereUniqueWithoutTableInput_1.FieldUpsertWithWhereUniqueWithoutTableInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldUpdateManyWithoutTableNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldCreateManyTableInputEnvelope_1.FieldCreateManyTableInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldCreateManyTableInputEnvelope_1.FieldCreateManyTableInputEnvelope)
], FieldUpdateManyWithoutTableNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldWhereUniqueInput_1.FieldWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldUpdateManyWithoutTableNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldWhereUniqueInput_1.FieldWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldUpdateManyWithoutTableNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldWhereUniqueInput_1.FieldWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldUpdateManyWithoutTableNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldWhereUniqueInput_1.FieldWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldUpdateManyWithoutTableNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldUpdateWithWhereUniqueWithoutTableInput_1.FieldUpdateWithWhereUniqueWithoutTableInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldUpdateManyWithoutTableNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldUpdateManyWithWhereWithoutTableInput_1.FieldUpdateManyWithWhereWithoutTableInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldUpdateManyWithoutTableNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldScalarWhereInput_1.FieldScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldUpdateManyWithoutTableNestedInput.prototype, "deleteMany", void 0);
exports.FieldUpdateManyWithoutTableNestedInput = FieldUpdateManyWithoutTableNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldUpdateManyWithoutTableNestedInput", {})
], FieldUpdateManyWithoutTableNestedInput);
