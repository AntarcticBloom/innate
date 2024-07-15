"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationCreateManyFieldInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationCreateManyFieldInput_1 = require("../inputs/FieldAnnotationCreateManyFieldInput");
let FieldAnnotationCreateManyFieldInputEnvelope = class FieldAnnotationCreateManyFieldInputEnvelope {
    data;
    skipDuplicates;
};
exports.FieldAnnotationCreateManyFieldInputEnvelope = FieldAnnotationCreateManyFieldInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationCreateManyFieldInput_1.FieldAnnotationCreateManyFieldInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationCreateManyFieldInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], FieldAnnotationCreateManyFieldInputEnvelope.prototype, "skipDuplicates", void 0);
exports.FieldAnnotationCreateManyFieldInputEnvelope = FieldAnnotationCreateManyFieldInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationCreateManyFieldInputEnvelope", {})
], FieldAnnotationCreateManyFieldInputEnvelope);
