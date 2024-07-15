"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaCreateNestedOneWithoutTablesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchemaCreateOrConnectWithoutTablesInput_1 = require("../inputs/SchemaCreateOrConnectWithoutTablesInput");
const SchemaCreateWithoutTablesInput_1 = require("../inputs/SchemaCreateWithoutTablesInput");
const SchemaWhereUniqueInput_1 = require("../inputs/SchemaWhereUniqueInput");
let SchemaCreateNestedOneWithoutTablesInput = class SchemaCreateNestedOneWithoutTablesInput {
    create;
    connectOrCreate;
    connect;
};
exports.SchemaCreateNestedOneWithoutTablesInput = SchemaCreateNestedOneWithoutTablesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaCreateWithoutTablesInput_1.SchemaCreateWithoutTablesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaCreateWithoutTablesInput_1.SchemaCreateWithoutTablesInput)
], SchemaCreateNestedOneWithoutTablesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaCreateOrConnectWithoutTablesInput_1.SchemaCreateOrConnectWithoutTablesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaCreateOrConnectWithoutTablesInput_1.SchemaCreateOrConnectWithoutTablesInput)
], SchemaCreateNestedOneWithoutTablesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaWhereUniqueInput_1.SchemaWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaWhereUniqueInput_1.SchemaWhereUniqueInput)
], SchemaCreateNestedOneWithoutTablesInput.prototype, "connect", void 0);
exports.SchemaCreateNestedOneWithoutTablesInput = SchemaCreateNestedOneWithoutTablesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SchemaCreateNestedOneWithoutTablesInput", {})
], SchemaCreateNestedOneWithoutTablesInput);
