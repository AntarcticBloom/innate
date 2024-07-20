"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCreateOrConnectWithoutFieldsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableCreateWithoutFieldsInput_1 = require("../inputs/TableCreateWithoutFieldsInput");
const TableWhereUniqueInput_1 = require("../inputs/TableWhereUniqueInput");
let TableCreateOrConnectWithoutFieldsInput = class TableCreateOrConnectWithoutFieldsInput {
    where;
    create;
};
exports.TableCreateOrConnectWithoutFieldsInput = TableCreateOrConnectWithoutFieldsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereUniqueInput_1.TableWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TableWhereUniqueInput_1.TableWhereUniqueInput)
], TableCreateOrConnectWithoutFieldsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableCreateWithoutFieldsInput_1.TableCreateWithoutFieldsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TableCreateWithoutFieldsInput_1.TableCreateWithoutFieldsInput)
], TableCreateOrConnectWithoutFieldsInput.prototype, "create", void 0);
exports.TableCreateOrConnectWithoutFieldsInput = TableCreateOrConnectWithoutFieldsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableCreateOrConnectWithoutFieldsInput", {})
], TableCreateOrConnectWithoutFieldsInput);
