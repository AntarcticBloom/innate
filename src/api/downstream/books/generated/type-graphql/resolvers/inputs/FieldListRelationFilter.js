"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldWhereInput_1 = require("../inputs/FieldWhereInput");
let FieldListRelationFilter = class FieldListRelationFilter {
    every;
    some;
    none;
};
exports.FieldListRelationFilter = FieldListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldWhereInput_1.FieldWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldWhereInput_1.FieldWhereInput)
], FieldListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldWhereInput_1.FieldWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldWhereInput_1.FieldWhereInput)
], FieldListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldWhereInput_1.FieldWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldWhereInput_1.FieldWhereInput)
], FieldListRelationFilter.prototype, "none", void 0);
exports.FieldListRelationFilter = FieldListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldListRelationFilter", {})
], FieldListRelationFilter);
