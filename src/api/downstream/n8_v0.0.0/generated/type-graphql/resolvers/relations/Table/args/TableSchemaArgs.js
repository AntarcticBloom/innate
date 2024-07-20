"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableSchemaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchemaWhereInput_1 = require("../../../inputs/SchemaWhereInput");
let TableSchemaArgs = class TableSchemaArgs {
    where;
};
exports.TableSchemaArgs = TableSchemaArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaWhereInput_1.SchemaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaWhereInput_1.SchemaWhereInput)
], TableSchemaArgs.prototype, "where", void 0);
exports.TableSchemaArgs = TableSchemaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], TableSchemaArgs);
