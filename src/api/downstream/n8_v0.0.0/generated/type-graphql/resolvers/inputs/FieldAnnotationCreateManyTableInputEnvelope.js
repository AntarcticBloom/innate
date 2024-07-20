"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationCreateManyTableInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationCreateManyTableInput_1 = require("../inputs/FieldAnnotationCreateManyTableInput");
let FieldAnnotationCreateManyTableInputEnvelope = class FieldAnnotationCreateManyTableInputEnvelope {
    data;
    skipDuplicates;
};
exports.FieldAnnotationCreateManyTableInputEnvelope = FieldAnnotationCreateManyTableInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationCreateManyTableInput_1.FieldAnnotationCreateManyTableInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationCreateManyTableInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], FieldAnnotationCreateManyTableInputEnvelope.prototype, "skipDuplicates", void 0);
exports.FieldAnnotationCreateManyTableInputEnvelope = FieldAnnotationCreateManyTableInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationCreateManyTableInputEnvelope", {})
], FieldAnnotationCreateManyTableInputEnvelope);
