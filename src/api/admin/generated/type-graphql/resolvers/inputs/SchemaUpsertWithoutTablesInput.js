"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaUpsertWithoutTablesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchemaCreateWithoutTablesInput_1 = require("../inputs/SchemaCreateWithoutTablesInput");
const SchemaUpdateWithoutTablesInput_1 = require("../inputs/SchemaUpdateWithoutTablesInput");
const SchemaWhereInput_1 = require("../inputs/SchemaWhereInput");
let SchemaUpsertWithoutTablesInput = class SchemaUpsertWithoutTablesInput {
    update;
    create;
    where;
};
exports.SchemaUpsertWithoutTablesInput = SchemaUpsertWithoutTablesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaUpdateWithoutTablesInput_1.SchemaUpdateWithoutTablesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SchemaUpdateWithoutTablesInput_1.SchemaUpdateWithoutTablesInput)
], SchemaUpsertWithoutTablesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaCreateWithoutTablesInput_1.SchemaCreateWithoutTablesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SchemaCreateWithoutTablesInput_1.SchemaCreateWithoutTablesInput)
], SchemaUpsertWithoutTablesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaWhereInput_1.SchemaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaWhereInput_1.SchemaWhereInput)
], SchemaUpsertWithoutTablesInput.prototype, "where", void 0);
exports.SchemaUpsertWithoutTablesInput = SchemaUpsertWithoutTablesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SchemaUpsertWithoutTablesInput", {})
], SchemaUpsertWithoutTablesInput);
