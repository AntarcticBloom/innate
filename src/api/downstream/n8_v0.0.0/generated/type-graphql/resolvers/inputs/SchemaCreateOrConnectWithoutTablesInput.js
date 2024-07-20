"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaCreateOrConnectWithoutTablesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchemaCreateWithoutTablesInput_1 = require("../inputs/SchemaCreateWithoutTablesInput");
const SchemaWhereUniqueInput_1 = require("../inputs/SchemaWhereUniqueInput");
let SchemaCreateOrConnectWithoutTablesInput = class SchemaCreateOrConnectWithoutTablesInput {
    where;
    create;
};
exports.SchemaCreateOrConnectWithoutTablesInput = SchemaCreateOrConnectWithoutTablesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaWhereUniqueInput_1.SchemaWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SchemaWhereUniqueInput_1.SchemaWhereUniqueInput)
], SchemaCreateOrConnectWithoutTablesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaCreateWithoutTablesInput_1.SchemaCreateWithoutTablesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SchemaCreateWithoutTablesInput_1.SchemaCreateWithoutTablesInput)
], SchemaCreateOrConnectWithoutTablesInput.prototype, "create", void 0);
exports.SchemaCreateOrConnectWithoutTablesInput = SchemaCreateOrConnectWithoutTablesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SchemaCreateOrConnectWithoutTablesInput", {})
], SchemaCreateOrConnectWithoutTablesInput);
