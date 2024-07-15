"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyFieldAnnotationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationUpdateManyMutationInput_1 = require("../../../inputs/FieldAnnotationUpdateManyMutationInput");
const FieldAnnotationWhereInput_1 = require("../../../inputs/FieldAnnotationWhereInput");
let UpdateManyFieldAnnotationArgs = class UpdateManyFieldAnnotationArgs {
    data;
    where;
};
exports.UpdateManyFieldAnnotationArgs = UpdateManyFieldAnnotationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationUpdateManyMutationInput_1.FieldAnnotationUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldAnnotationUpdateManyMutationInput_1.FieldAnnotationUpdateManyMutationInput)
], UpdateManyFieldAnnotationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationWhereInput_1.FieldAnnotationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationWhereInput_1.FieldAnnotationWhereInput)
], UpdateManyFieldAnnotationArgs.prototype, "where", void 0);
exports.UpdateManyFieldAnnotationArgs = UpdateManyFieldAnnotationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyFieldAnnotationArgs);
