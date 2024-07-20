"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldCountFieldAnnotationsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationWhereInput_1 = require("../../inputs/FieldAnnotationWhereInput");
let FieldCountFieldAnnotationsArgs = class FieldCountFieldAnnotationsArgs {
    where;
};
exports.FieldCountFieldAnnotationsArgs = FieldCountFieldAnnotationsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationWhereInput_1.FieldAnnotationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationWhereInput_1.FieldAnnotationWhereInput)
], FieldCountFieldAnnotationsArgs.prototype, "where", void 0);
exports.FieldCountFieldAnnotationsArgs = FieldCountFieldAnnotationsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FieldCountFieldAnnotationsArgs);
