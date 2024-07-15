"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCreateOrConnectWithoutFieldAnnotationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableCreateWithoutFieldAnnotationsInput_1 = require("../inputs/TableCreateWithoutFieldAnnotationsInput");
const TableWhereUniqueInput_1 = require("../inputs/TableWhereUniqueInput");
let TableCreateOrConnectWithoutFieldAnnotationsInput = class TableCreateOrConnectWithoutFieldAnnotationsInput {
    where;
    create;
};
exports.TableCreateOrConnectWithoutFieldAnnotationsInput = TableCreateOrConnectWithoutFieldAnnotationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereUniqueInput_1.TableWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TableWhereUniqueInput_1.TableWhereUniqueInput)
], TableCreateOrConnectWithoutFieldAnnotationsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableCreateWithoutFieldAnnotationsInput_1.TableCreateWithoutFieldAnnotationsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TableCreateWithoutFieldAnnotationsInput_1.TableCreateWithoutFieldAnnotationsInput)
], TableCreateOrConnectWithoutFieldAnnotationsInput.prototype, "create", void 0);
exports.TableCreateOrConnectWithoutFieldAnnotationsInput = TableCreateOrConnectWithoutFieldAnnotationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableCreateOrConnectWithoutFieldAnnotationsInput", {})
], TableCreateOrConnectWithoutFieldAnnotationsInput);
