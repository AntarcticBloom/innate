"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableUpdateWithWhereUniqueWithoutSchemaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableUpdateWithoutSchemaInput_1 = require("../inputs/TableUpdateWithoutSchemaInput");
const TableWhereUniqueInput_1 = require("../inputs/TableWhereUniqueInput");
let TableUpdateWithWhereUniqueWithoutSchemaInput = class TableUpdateWithWhereUniqueWithoutSchemaInput {
    where;
    data;
};
exports.TableUpdateWithWhereUniqueWithoutSchemaInput = TableUpdateWithWhereUniqueWithoutSchemaInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereUniqueInput_1.TableWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TableWhereUniqueInput_1.TableWhereUniqueInput)
], TableUpdateWithWhereUniqueWithoutSchemaInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableUpdateWithoutSchemaInput_1.TableUpdateWithoutSchemaInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TableUpdateWithoutSchemaInput_1.TableUpdateWithoutSchemaInput)
], TableUpdateWithWhereUniqueWithoutSchemaInput.prototype, "data", void 0);
exports.TableUpdateWithWhereUniqueWithoutSchemaInput = TableUpdateWithWhereUniqueWithoutSchemaInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableUpdateWithWhereUniqueWithoutSchemaInput", {})
], TableUpdateWithWhereUniqueWithoutSchemaInput);
