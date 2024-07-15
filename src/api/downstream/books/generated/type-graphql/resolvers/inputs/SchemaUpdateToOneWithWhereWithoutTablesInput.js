"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaUpdateToOneWithWhereWithoutTablesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchemaUpdateWithoutTablesInput_1 = require("../inputs/SchemaUpdateWithoutTablesInput");
const SchemaWhereInput_1 = require("../inputs/SchemaWhereInput");
let SchemaUpdateToOneWithWhereWithoutTablesInput = class SchemaUpdateToOneWithWhereWithoutTablesInput {
    where;
    data;
};
exports.SchemaUpdateToOneWithWhereWithoutTablesInput = SchemaUpdateToOneWithWhereWithoutTablesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaWhereInput_1.SchemaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaWhereInput_1.SchemaWhereInput)
], SchemaUpdateToOneWithWhereWithoutTablesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaUpdateWithoutTablesInput_1.SchemaUpdateWithoutTablesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SchemaUpdateWithoutTablesInput_1.SchemaUpdateWithoutTablesInput)
], SchemaUpdateToOneWithWhereWithoutTablesInput.prototype, "data", void 0);
exports.SchemaUpdateToOneWithWhereWithoutTablesInput = SchemaUpdateToOneWithWhereWithoutTablesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SchemaUpdateToOneWithWhereWithoutTablesInput", {})
], SchemaUpdateToOneWithWhereWithoutTablesInput);
