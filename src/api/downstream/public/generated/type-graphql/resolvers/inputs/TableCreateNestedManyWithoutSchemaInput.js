"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCreateNestedManyWithoutSchemaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableCreateManySchemaInputEnvelope_1 = require("../inputs/TableCreateManySchemaInputEnvelope");
const TableCreateOrConnectWithoutSchemaInput_1 = require("../inputs/TableCreateOrConnectWithoutSchemaInput");
const TableCreateWithoutSchemaInput_1 = require("../inputs/TableCreateWithoutSchemaInput");
const TableWhereUniqueInput_1 = require("../inputs/TableWhereUniqueInput");
let TableCreateNestedManyWithoutSchemaInput = class TableCreateNestedManyWithoutSchemaInput {
    create;
    connectOrCreate;
    createMany;
    connect;
};
exports.TableCreateNestedManyWithoutSchemaInput = TableCreateNestedManyWithoutSchemaInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableCreateWithoutSchemaInput_1.TableCreateWithoutSchemaInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TableCreateNestedManyWithoutSchemaInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableCreateOrConnectWithoutSchemaInput_1.TableCreateOrConnectWithoutSchemaInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TableCreateNestedManyWithoutSchemaInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableCreateManySchemaInputEnvelope_1.TableCreateManySchemaInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableCreateManySchemaInputEnvelope_1.TableCreateManySchemaInputEnvelope)
], TableCreateNestedManyWithoutSchemaInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableWhereUniqueInput_1.TableWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TableCreateNestedManyWithoutSchemaInput.prototype, "connect", void 0);
exports.TableCreateNestedManyWithoutSchemaInput = TableCreateNestedManyWithoutSchemaInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableCreateNestedManyWithoutSchemaInput", {})
], TableCreateNestedManyWithoutSchemaInput);
