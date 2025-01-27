"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySchemaArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchemaUpdateManyMutationInput_1 = require("../../../inputs/SchemaUpdateManyMutationInput");
const SchemaWhereInput_1 = require("../../../inputs/SchemaWhereInput");
let UpdateManySchemaArgs = class UpdateManySchemaArgs {
    data;
    where;
};
exports.UpdateManySchemaArgs = UpdateManySchemaArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaUpdateManyMutationInput_1.SchemaUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SchemaUpdateManyMutationInput_1.SchemaUpdateManyMutationInput)
], UpdateManySchemaArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaWhereInput_1.SchemaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaWhereInput_1.SchemaWhereInput)
], UpdateManySchemaArgs.prototype, "where", void 0);
exports.UpdateManySchemaArgs = UpdateManySchemaArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManySchemaArgs);
