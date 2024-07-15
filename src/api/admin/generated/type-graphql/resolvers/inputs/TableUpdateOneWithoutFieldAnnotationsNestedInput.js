"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableUpdateOneWithoutFieldAnnotationsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableCreateOrConnectWithoutFieldAnnotationsInput_1 = require("../inputs/TableCreateOrConnectWithoutFieldAnnotationsInput");
const TableCreateWithoutFieldAnnotationsInput_1 = require("../inputs/TableCreateWithoutFieldAnnotationsInput");
const TableUpdateToOneWithWhereWithoutFieldAnnotationsInput_1 = require("../inputs/TableUpdateToOneWithWhereWithoutFieldAnnotationsInput");
const TableUpsertWithoutFieldAnnotationsInput_1 = require("../inputs/TableUpsertWithoutFieldAnnotationsInput");
const TableWhereInput_1 = require("../inputs/TableWhereInput");
const TableWhereUniqueInput_1 = require("../inputs/TableWhereUniqueInput");
let TableUpdateOneWithoutFieldAnnotationsNestedInput = class TableUpdateOneWithoutFieldAnnotationsNestedInput {
    create;
    connectOrCreate;
    upsert;
    disconnect;
    delete;
    connect;
    update;
};
exports.TableUpdateOneWithoutFieldAnnotationsNestedInput = TableUpdateOneWithoutFieldAnnotationsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableCreateWithoutFieldAnnotationsInput_1.TableCreateWithoutFieldAnnotationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableCreateWithoutFieldAnnotationsInput_1.TableCreateWithoutFieldAnnotationsInput)
], TableUpdateOneWithoutFieldAnnotationsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableCreateOrConnectWithoutFieldAnnotationsInput_1.TableCreateOrConnectWithoutFieldAnnotationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableCreateOrConnectWithoutFieldAnnotationsInput_1.TableCreateOrConnectWithoutFieldAnnotationsInput)
], TableUpdateOneWithoutFieldAnnotationsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableUpsertWithoutFieldAnnotationsInput_1.TableUpsertWithoutFieldAnnotationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableUpsertWithoutFieldAnnotationsInput_1.TableUpsertWithoutFieldAnnotationsInput)
], TableUpdateOneWithoutFieldAnnotationsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereInput_1.TableWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableWhereInput_1.TableWhereInput)
], TableUpdateOneWithoutFieldAnnotationsNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereInput_1.TableWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableWhereInput_1.TableWhereInput)
], TableUpdateOneWithoutFieldAnnotationsNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereUniqueInput_1.TableWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableWhereUniqueInput_1.TableWhereUniqueInput)
], TableUpdateOneWithoutFieldAnnotationsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableUpdateToOneWithWhereWithoutFieldAnnotationsInput_1.TableUpdateToOneWithWhereWithoutFieldAnnotationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableUpdateToOneWithWhereWithoutFieldAnnotationsInput_1.TableUpdateToOneWithWhereWithoutFieldAnnotationsInput)
], TableUpdateOneWithoutFieldAnnotationsNestedInput.prototype, "update", void 0);
exports.TableUpdateOneWithoutFieldAnnotationsNestedInput = TableUpdateOneWithoutFieldAnnotationsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableUpdateOneWithoutFieldAnnotationsNestedInput", {})
], TableUpdateOneWithoutFieldAnnotationsNestedInput);
