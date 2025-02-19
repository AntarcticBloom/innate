"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneSchemaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchemaCreateInput_1 = require("../../../inputs/SchemaCreateInput");
const SchemaUpdateInput_1 = require("../../../inputs/SchemaUpdateInput");
const SchemaWhereUniqueInput_1 = require("../../../inputs/SchemaWhereUniqueInput");
let UpsertOneSchemaArgs = class UpsertOneSchemaArgs {
    where;
    create;
    update;
};
exports.UpsertOneSchemaArgs = UpsertOneSchemaArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaWhereUniqueInput_1.SchemaWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SchemaWhereUniqueInput_1.SchemaWhereUniqueInput)
], UpsertOneSchemaArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaCreateInput_1.SchemaCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SchemaCreateInput_1.SchemaCreateInput)
], UpsertOneSchemaArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaUpdateInput_1.SchemaUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SchemaUpdateInput_1.SchemaUpdateInput)
], UpsertOneSchemaArgs.prototype, "update", void 0);
exports.UpsertOneSchemaArgs = UpsertOneSchemaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneSchemaArgs);
