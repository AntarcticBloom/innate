"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationCreateOrConnectWithoutTableInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationCreateWithoutTableInput_1 = require("../inputs/FieldAnnotationCreateWithoutTableInput");
const FieldAnnotationWhereUniqueInput_1 = require("../inputs/FieldAnnotationWhereUniqueInput");
let FieldAnnotationCreateOrConnectWithoutTableInput = class FieldAnnotationCreateOrConnectWithoutTableInput {
    where;
    create;
};
exports.FieldAnnotationCreateOrConnectWithoutTableInput = FieldAnnotationCreateOrConnectWithoutTableInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput)
], FieldAnnotationCreateOrConnectWithoutTableInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationCreateWithoutTableInput_1.FieldAnnotationCreateWithoutTableInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldAnnotationCreateWithoutTableInput_1.FieldAnnotationCreateWithoutTableInput)
], FieldAnnotationCreateOrConnectWithoutTableInput.prototype, "create", void 0);
exports.FieldAnnotationCreateOrConnectWithoutTableInput = FieldAnnotationCreateOrConnectWithoutTableInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationCreateOrConnectWithoutTableInput", {})
], FieldAnnotationCreateOrConnectWithoutTableInput);
