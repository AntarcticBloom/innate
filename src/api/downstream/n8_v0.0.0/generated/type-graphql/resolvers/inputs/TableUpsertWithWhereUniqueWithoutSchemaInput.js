"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableUpsertWithWhereUniqueWithoutSchemaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableCreateWithoutSchemaInput_1 = require("../inputs/TableCreateWithoutSchemaInput");
const TableUpdateWithoutSchemaInput_1 = require("../inputs/TableUpdateWithoutSchemaInput");
const TableWhereUniqueInput_1 = require("../inputs/TableWhereUniqueInput");
let TableUpsertWithWhereUniqueWithoutSchemaInput = class TableUpsertWithWhereUniqueWithoutSchemaInput {
    where;
    update;
    create;
};
exports.TableUpsertWithWhereUniqueWithoutSchemaInput = TableUpsertWithWhereUniqueWithoutSchemaInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereUniqueInput_1.TableWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TableWhereUniqueInput_1.TableWhereUniqueInput)
], TableUpsertWithWhereUniqueWithoutSchemaInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableUpdateWithoutSchemaInput_1.TableUpdateWithoutSchemaInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TableUpdateWithoutSchemaInput_1.TableUpdateWithoutSchemaInput)
], TableUpsertWithWhereUniqueWithoutSchemaInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableCreateWithoutSchemaInput_1.TableCreateWithoutSchemaInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TableCreateWithoutSchemaInput_1.TableCreateWithoutSchemaInput)
], TableUpsertWithWhereUniqueWithoutSchemaInput.prototype, "create", void 0);
exports.TableUpsertWithWhereUniqueWithoutSchemaInput = TableUpsertWithWhereUniqueWithoutSchemaInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableUpsertWithWhereUniqueWithoutSchemaInput", {})
], TableUpsertWithWhereUniqueWithoutSchemaInput);
