"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationCreateNestedManyWithoutTableInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationCreateManyTableInputEnvelope_1 = require("../inputs/FieldAnnotationCreateManyTableInputEnvelope");
const FieldAnnotationCreateOrConnectWithoutTableInput_1 = require("../inputs/FieldAnnotationCreateOrConnectWithoutTableInput");
const FieldAnnotationCreateWithoutTableInput_1 = require("../inputs/FieldAnnotationCreateWithoutTableInput");
const FieldAnnotationWhereUniqueInput_1 = require("../inputs/FieldAnnotationWhereUniqueInput");
let FieldAnnotationCreateNestedManyWithoutTableInput = class FieldAnnotationCreateNestedManyWithoutTableInput {
    create;
    connectOrCreate;
    createMany;
    connect;
};
exports.FieldAnnotationCreateNestedManyWithoutTableInput = FieldAnnotationCreateNestedManyWithoutTableInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationCreateWithoutTableInput_1.FieldAnnotationCreateWithoutTableInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationCreateNestedManyWithoutTableInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationCreateOrConnectWithoutTableInput_1.FieldAnnotationCreateOrConnectWithoutTableInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationCreateNestedManyWithoutTableInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationCreateManyTableInputEnvelope_1.FieldAnnotationCreateManyTableInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldAnnotationCreateManyTableInputEnvelope_1.FieldAnnotationCreateManyTableInputEnvelope)
], FieldAnnotationCreateNestedManyWithoutTableInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldAnnotationCreateNestedManyWithoutTableInput.prototype, "connect", void 0);
exports.FieldAnnotationCreateNestedManyWithoutTableInput = FieldAnnotationCreateNestedManyWithoutTableInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldAnnotationCreateNestedManyWithoutTableInput", {})
], FieldAnnotationCreateNestedManyWithoutTableInput);
