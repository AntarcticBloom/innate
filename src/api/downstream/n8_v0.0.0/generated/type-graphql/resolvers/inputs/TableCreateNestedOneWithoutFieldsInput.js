"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCreateNestedOneWithoutFieldsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableCreateOrConnectWithoutFieldsInput_1 = require("../inputs/TableCreateOrConnectWithoutFieldsInput");
const TableCreateWithoutFieldsInput_1 = require("../inputs/TableCreateWithoutFieldsInput");
const TableWhereUniqueInput_1 = require("../inputs/TableWhereUniqueInput");
let TableCreateNestedOneWithoutFieldsInput = class TableCreateNestedOneWithoutFieldsInput {
    create;
    connectOrCreate;
    connect;
};
exports.TableCreateNestedOneWithoutFieldsInput = TableCreateNestedOneWithoutFieldsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableCreateWithoutFieldsInput_1.TableCreateWithoutFieldsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableCreateWithoutFieldsInput_1.TableCreateWithoutFieldsInput)
], TableCreateNestedOneWithoutFieldsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableCreateOrConnectWithoutFieldsInput_1.TableCreateOrConnectWithoutFieldsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableCreateOrConnectWithoutFieldsInput_1.TableCreateOrConnectWithoutFieldsInput)
], TableCreateNestedOneWithoutFieldsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereUniqueInput_1.TableWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableWhereUniqueInput_1.TableWhereUniqueInput)
], TableCreateNestedOneWithoutFieldsInput.prototype, "connect", void 0);
exports.TableCreateNestedOneWithoutFieldsInput = TableCreateNestedOneWithoutFieldsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableCreateNestedOneWithoutFieldsInput", {})
], TableCreateNestedOneWithoutFieldsInput);
