"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaCountTablesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableWhereInput_1 = require("../../inputs/TableWhereInput");
let SchemaCountTablesArgs = class SchemaCountTablesArgs {
    where;
};
exports.SchemaCountTablesArgs = SchemaCountTablesArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereInput_1.TableWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableWhereInput_1.TableWhereInput)
], SchemaCountTablesArgs.prototype, "where", void 0);
exports.SchemaCountTablesArgs = SchemaCountTablesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], SchemaCountTablesArgs);
