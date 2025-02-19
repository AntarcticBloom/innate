"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManySchemaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchemaWhereInput_1 = require("../../../inputs/SchemaWhereInput");
let DeleteManySchemaArgs = class DeleteManySchemaArgs {
    where;
};
exports.DeleteManySchemaArgs = DeleteManySchemaArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaWhereInput_1.SchemaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaWhereInput_1.SchemaWhereInput)
], DeleteManySchemaArgs.prototype, "where", void 0);
exports.DeleteManySchemaArgs = DeleteManySchemaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManySchemaArgs);
