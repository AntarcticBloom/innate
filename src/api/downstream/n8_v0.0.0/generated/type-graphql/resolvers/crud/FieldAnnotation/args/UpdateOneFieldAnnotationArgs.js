"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneFieldAnnotationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationUpdateInput_1 = require("../../../inputs/FieldAnnotationUpdateInput");
const FieldAnnotationWhereUniqueInput_1 = require("../../../inputs/FieldAnnotationWhereUniqueInput");
let UpdateOneFieldAnnotationArgs = class UpdateOneFieldAnnotationArgs {
    data;
    where;
};
exports.UpdateOneFieldAnnotationArgs = UpdateOneFieldAnnotationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationUpdateInput_1.FieldAnnotationUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldAnnotationUpdateInput_1.FieldAnnotationUpdateInput)
], UpdateOneFieldAnnotationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput)
], UpdateOneFieldAnnotationArgs.prototype, "where", void 0);
exports.UpdateOneFieldAnnotationArgs = UpdateOneFieldAnnotationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneFieldAnnotationArgs);
