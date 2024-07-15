"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCreateNestedOneWithoutFieldAnnotationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableCreateOrConnectWithoutFieldAnnotationsInput_1 = require("../inputs/TableCreateOrConnectWithoutFieldAnnotationsInput");
const TableCreateWithoutFieldAnnotationsInput_1 = require("../inputs/TableCreateWithoutFieldAnnotationsInput");
const TableWhereUniqueInput_1 = require("../inputs/TableWhereUniqueInput");
let TableCreateNestedOneWithoutFieldAnnotationsInput = class TableCreateNestedOneWithoutFieldAnnotationsInput {
    create;
    connectOrCreate;
    connect;
};
exports.TableCreateNestedOneWithoutFieldAnnotationsInput = TableCreateNestedOneWithoutFieldAnnotationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableCreateWithoutFieldAnnotationsInput_1.TableCreateWithoutFieldAnnotationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableCreateWithoutFieldAnnotationsInput_1.TableCreateWithoutFieldAnnotationsInput)
], TableCreateNestedOneWithoutFieldAnnotationsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableCreateOrConnectWithoutFieldAnnotationsInput_1.TableCreateOrConnectWithoutFieldAnnotationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableCreateOrConnectWithoutFieldAnnotationsInput_1.TableCreateOrConnectWithoutFieldAnnotationsInput)
], TableCreateNestedOneWithoutFieldAnnotationsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereUniqueInput_1.TableWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableWhereUniqueInput_1.TableWhereUniqueInput)
], TableCreateNestedOneWithoutFieldAnnotationsInput.prototype, "connect", void 0);
exports.TableCreateNestedOneWithoutFieldAnnotationsInput = TableCreateNestedOneWithoutFieldAnnotationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableCreateNestedOneWithoutFieldAnnotationsInput", {})
], TableCreateNestedOneWithoutFieldAnnotationsInput);
