"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableUpdateManyWithoutSchemaNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableCreateManySchemaInputEnvelope_1 = require("../inputs/TableCreateManySchemaInputEnvelope");
const TableCreateOrConnectWithoutSchemaInput_1 = require("../inputs/TableCreateOrConnectWithoutSchemaInput");
const TableCreateWithoutSchemaInput_1 = require("../inputs/TableCreateWithoutSchemaInput");
const TableScalarWhereInput_1 = require("../inputs/TableScalarWhereInput");
const TableUpdateManyWithWhereWithoutSchemaInput_1 = require("../inputs/TableUpdateManyWithWhereWithoutSchemaInput");
const TableUpdateWithWhereUniqueWithoutSchemaInput_1 = require("../inputs/TableUpdateWithWhereUniqueWithoutSchemaInput");
const TableUpsertWithWhereUniqueWithoutSchemaInput_1 = require("../inputs/TableUpsertWithWhereUniqueWithoutSchemaInput");
const TableWhereUniqueInput_1 = require("../inputs/TableWhereUniqueInput");
let TableUpdateManyWithoutSchemaNestedInput = class TableUpdateManyWithoutSchemaNestedInput {
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
exports.TableUpdateManyWithoutSchemaNestedInput = TableUpdateManyWithoutSchemaNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableCreateWithoutSchemaInput_1.TableCreateWithoutSchemaInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TableUpdateManyWithoutSchemaNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableCreateOrConnectWithoutSchemaInput_1.TableCreateOrConnectWithoutSchemaInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TableUpdateManyWithoutSchemaNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableUpsertWithWhereUniqueWithoutSchemaInput_1.TableUpsertWithWhereUniqueWithoutSchemaInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TableUpdateManyWithoutSchemaNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableCreateManySchemaInputEnvelope_1.TableCreateManySchemaInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableCreateManySchemaInputEnvelope_1.TableCreateManySchemaInputEnvelope)
], TableUpdateManyWithoutSchemaNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableWhereUniqueInput_1.TableWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TableUpdateManyWithoutSchemaNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableWhereUniqueInput_1.TableWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TableUpdateManyWithoutSchemaNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableWhereUniqueInput_1.TableWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TableUpdateManyWithoutSchemaNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableWhereUniqueInput_1.TableWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TableUpdateManyWithoutSchemaNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableUpdateWithWhereUniqueWithoutSchemaInput_1.TableUpdateWithWhereUniqueWithoutSchemaInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TableUpdateManyWithoutSchemaNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableUpdateManyWithWhereWithoutSchemaInput_1.TableUpdateManyWithWhereWithoutSchemaInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TableUpdateManyWithoutSchemaNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableScalarWhereInput_1.TableScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TableUpdateManyWithoutSchemaNestedInput.prototype, "deleteMany", void 0);
exports.TableUpdateManyWithoutSchemaNestedInput = TableUpdateManyWithoutSchemaNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableUpdateManyWithoutSchemaNestedInput", {})
], TableUpdateManyWithoutSchemaNestedInput);
