"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCreateOrConnectWithoutSchemaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableCreateWithoutSchemaInput_1 = require("../inputs/TableCreateWithoutSchemaInput");
const TableWhereUniqueInput_1 = require("../inputs/TableWhereUniqueInput");
let TableCreateOrConnectWithoutSchemaInput = class TableCreateOrConnectWithoutSchemaInput {
    where;
    create;
};
exports.TableCreateOrConnectWithoutSchemaInput = TableCreateOrConnectWithoutSchemaInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereUniqueInput_1.TableWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TableWhereUniqueInput_1.TableWhereUniqueInput)
], TableCreateOrConnectWithoutSchemaInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableCreateWithoutSchemaInput_1.TableCreateWithoutSchemaInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TableCreateWithoutSchemaInput_1.TableCreateWithoutSchemaInput)
], TableCreateOrConnectWithoutSchemaInput.prototype, "create", void 0);
exports.TableCreateOrConnectWithoutSchemaInput = TableCreateOrConnectWithoutSchemaInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableCreateOrConnectWithoutSchemaInput", {})
], TableCreateOrConnectWithoutSchemaInput);
