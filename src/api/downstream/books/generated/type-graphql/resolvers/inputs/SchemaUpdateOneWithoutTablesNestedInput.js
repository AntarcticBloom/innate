"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaUpdateOneWithoutTablesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchemaCreateOrConnectWithoutTablesInput_1 = require("../inputs/SchemaCreateOrConnectWithoutTablesInput");
const SchemaCreateWithoutTablesInput_1 = require("../inputs/SchemaCreateWithoutTablesInput");
const SchemaUpdateToOneWithWhereWithoutTablesInput_1 = require("../inputs/SchemaUpdateToOneWithWhereWithoutTablesInput");
const SchemaUpsertWithoutTablesInput_1 = require("../inputs/SchemaUpsertWithoutTablesInput");
const SchemaWhereInput_1 = require("../inputs/SchemaWhereInput");
const SchemaWhereUniqueInput_1 = require("../inputs/SchemaWhereUniqueInput");
let SchemaUpdateOneWithoutTablesNestedInput = class SchemaUpdateOneWithoutTablesNestedInput {
    create;
    connectOrCreate;
    upsert;
    disconnect;
    delete;
    connect;
    update;
};
exports.SchemaUpdateOneWithoutTablesNestedInput = SchemaUpdateOneWithoutTablesNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaCreateWithoutTablesInput_1.SchemaCreateWithoutTablesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaCreateWithoutTablesInput_1.SchemaCreateWithoutTablesInput)
], SchemaUpdateOneWithoutTablesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaCreateOrConnectWithoutTablesInput_1.SchemaCreateOrConnectWithoutTablesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaCreateOrConnectWithoutTablesInput_1.SchemaCreateOrConnectWithoutTablesInput)
], SchemaUpdateOneWithoutTablesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaUpsertWithoutTablesInput_1.SchemaUpsertWithoutTablesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaUpsertWithoutTablesInput_1.SchemaUpsertWithoutTablesInput)
], SchemaUpdateOneWithoutTablesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaWhereInput_1.SchemaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaWhereInput_1.SchemaWhereInput)
], SchemaUpdateOneWithoutTablesNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaWhereInput_1.SchemaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaWhereInput_1.SchemaWhereInput)
], SchemaUpdateOneWithoutTablesNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaWhereUniqueInput_1.SchemaWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaWhereUniqueInput_1.SchemaWhereUniqueInput)
], SchemaUpdateOneWithoutTablesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaUpdateToOneWithWhereWithoutTablesInput_1.SchemaUpdateToOneWithWhereWithoutTablesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaUpdateToOneWithWhereWithoutTablesInput_1.SchemaUpdateToOneWithWhereWithoutTablesInput)
], SchemaUpdateOneWithoutTablesNestedInput.prototype, "update", void 0);
exports.SchemaUpdateOneWithoutTablesNestedInput = SchemaUpdateOneWithoutTablesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SchemaUpdateOneWithoutTablesNestedInput", {})
], SchemaUpdateOneWithoutTablesNestedInput);
