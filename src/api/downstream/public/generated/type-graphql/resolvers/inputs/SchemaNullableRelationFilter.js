"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaNullableRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchemaWhereInput_1 = require("../inputs/SchemaWhereInput");
let SchemaNullableRelationFilter = class SchemaNullableRelationFilter {
    is;
    isNot;
};
exports.SchemaNullableRelationFilter = SchemaNullableRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaWhereInput_1.SchemaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaWhereInput_1.SchemaWhereInput)
], SchemaNullableRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaWhereInput_1.SchemaWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaWhereInput_1.SchemaWhereInput)
], SchemaNullableRelationFilter.prototype, "isNot", void 0);
exports.SchemaNullableRelationFilter = SchemaNullableRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("SchemaNullableRelationFilter", {})
], SchemaNullableRelationFilter);
