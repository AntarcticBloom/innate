"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableUpdateManyWithWhereWithoutSchemaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableScalarWhereInput_1 = require("../inputs/TableScalarWhereInput");
const TableUpdateManyMutationInput_1 = require("../inputs/TableUpdateManyMutationInput");
let TableUpdateManyWithWhereWithoutSchemaInput = class TableUpdateManyWithWhereWithoutSchemaInput {
    where;
    data;
};
exports.TableUpdateManyWithWhereWithoutSchemaInput = TableUpdateManyWithWhereWithoutSchemaInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableScalarWhereInput_1.TableScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TableScalarWhereInput_1.TableScalarWhereInput)
], TableUpdateManyWithWhereWithoutSchemaInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableUpdateManyMutationInput_1.TableUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TableUpdateManyMutationInput_1.TableUpdateManyMutationInput)
], TableUpdateManyWithWhereWithoutSchemaInput.prototype, "data", void 0);
exports.TableUpdateManyWithWhereWithoutSchemaInput = TableUpdateManyWithWhereWithoutSchemaInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableUpdateManyWithWhereWithoutSchemaInput", {})
], TableUpdateManyWithWhereWithoutSchemaInput);
