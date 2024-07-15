"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneFieldAnnotationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationWhereUniqueInput_1 = require("../../../inputs/FieldAnnotationWhereUniqueInput");
let DeleteOneFieldAnnotationArgs = class DeleteOneFieldAnnotationArgs {
    where;
};
exports.DeleteOneFieldAnnotationArgs = DeleteOneFieldAnnotationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput)
], DeleteOneFieldAnnotationArgs.prototype, "where", void 0);
exports.DeleteOneFieldAnnotationArgs = DeleteOneFieldAnnotationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneFieldAnnotationArgs);
