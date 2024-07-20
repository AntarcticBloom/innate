"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCreateManySchemaInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const client_1 = require("@prisma/client");
let TableCreateManySchemaInput = class TableCreateManySchemaInput {
    id;
    name;
    modelName;
    relations;
    createdAt;
    updatedAt;
};
exports.TableCreateManySchemaInput = TableCreateManySchemaInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TableCreateManySchemaInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TableCreateManySchemaInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TableCreateManySchemaInput.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Object)
], TableCreateManySchemaInput.prototype, "relations", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TableCreateManySchemaInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TableCreateManySchemaInput.prototype, "updatedAt", void 0);
exports.TableCreateManySchemaInput = TableCreateManySchemaInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TableCreateManySchemaInput", {})
], TableCreateManySchemaInput);
