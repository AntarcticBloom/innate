"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableUpdateOneWithoutFieldsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableCreateOrConnectWithoutFieldsInput_1 = require("../inputs/TableCreateOrConnectWithoutFieldsInput");
const TableCreateWithoutFieldsInput_1 = require("../inputs/TableCreateWithoutFieldsInput");
const TableUpdateToOneWithWhereWithoutFieldsInput_1 = require("../inputs/TableUpdateToOneWithWhereWithoutFieldsInput");
const TableUpsertWithoutFieldsInput_1 = require("../inputs/TableUpsertWithoutFieldsInput");
const TableWhereInput_1 = require("../inputs/TableWhereInput");
const TableWhereUniqueInput_1 = require("../inputs/TableWhereUniqueInput");
let TableUpdateOneWithoutFieldsNestedInput = class TableUpdateOneWithoutFieldsNestedInput {
    create;
    connectOrCreate;
    upsert;
    disconnect;
    delete;
    connect;
    update;
};
exports.TableUpdateOneWithoutFieldsNestedInput = TableUpdateOneWithoutFieldsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableCreateWithoutFieldsInput_1.TableCreateWithoutFieldsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableCreateWithoutFieldsInput_1.TableCreateWithoutFieldsInput)
], TableUpdateOneWithoutFieldsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableCreateOrConnectWithoutFieldsInput_1.TableCreateOrConnectWithoutFieldsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableCreateOrConnectWithoutFieldsInput_1.TableCreateOrConnectWithoutFieldsInput)
], TableUpdateOneWithoutFieldsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableUpsertWithoutFieldsInput_1.TableUpsertWithoutFieldsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableUpsertWithoutFieldsInput_1.TableUpsertWithoutFieldsInput)
], TableUpdateOneWithoutFieldsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereInput_1.TableWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableWhereInput_1.TableWhereInput)
], TableUpdateOneWithoutFieldsNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereInput_1.TableWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableWhereInput_1.TableWhereInput)
], TableUpdateOneWithoutFieldsNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereUniqueInput_1.TableWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableWhereUniqueInput_1.TableWhereUniqueInput)
], TableUpdateOneWithoutFieldsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableUpdateToOneWithWhereWithoutFieldsInput_1.TableUpdateToOneWithWhereWithoutFieldsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableUpdateToOneWithWhereWithoutFieldsInput_1.TableUpdateToOneWithWhereWithoutFieldsInput)
], TableUpdateOneWithoutFieldsNestedInput.prototype, "update", void 0);
exports.TableUpdateOneWithoutFieldsNestedInput = TableUpdateOneWithoutFieldsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableUpdateOneWithoutFieldsNestedInput", {})
], TableUpdateOneWithoutFieldsNestedInput);
