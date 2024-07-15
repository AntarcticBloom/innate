"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyFieldAnnotationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationWhereInput_1 = require("../../../inputs/FieldAnnotationWhereInput");
let DeleteManyFieldAnnotationArgs = class DeleteManyFieldAnnotationArgs {
    where;
};
exports.DeleteManyFieldAnnotationArgs = DeleteManyFieldAnnotationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationWhereInput_1.FieldAnnotationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationWhereInput_1.FieldAnnotationWhereInput)
], DeleteManyFieldAnnotationArgs.prototype, "where", void 0);
exports.DeleteManyFieldAnnotationArgs = DeleteManyFieldAnnotationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyFieldAnnotationArgs);
