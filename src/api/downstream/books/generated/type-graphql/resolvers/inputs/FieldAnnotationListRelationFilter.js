"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationWhereInput_1 = require("../inputs/FieldAnnotationWhereInput");
let FieldAnnotationListRelationFilter = class FieldAnnotationListRelationFilter {
    every;
    some;
    none;
};
exports.FieldAnnotationListRelationFilter = FieldAnnotationListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationWhereInput_1.FieldAnnotationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationWhereInput_1.FieldAnnotationWhereInput)
], FieldAnnotationListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationWhereInput_1.FieldAnnotationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationWhereInput_1.FieldAnnotationWhereInput)
], FieldAnnotationListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationWhereInput_1.FieldAnnotationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationWhereInput_1.FieldAnnotationWhereInput)
], FieldAnnotationListRelationFilter.prototype, "none", void 0);
exports.FieldAnnotationListRelationFilter = FieldAnnotationListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationListRelationFilter", {})
], FieldAnnotationListRelationFilter);
