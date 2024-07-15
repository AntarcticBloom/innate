"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationFieldArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldWhereInput_1 = require("../../../inputs/FieldWhereInput");
let FieldAnnotationFieldArgs = class FieldAnnotationFieldArgs {
    where;
};
exports.FieldAnnotationFieldArgs = FieldAnnotationFieldArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldWhereInput_1.FieldWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldWhereInput_1.FieldWhereInput)
], FieldAnnotationFieldArgs.prototype, "where", void 0);
exports.FieldAnnotationFieldArgs = FieldAnnotationFieldArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FieldAnnotationFieldArgs);
