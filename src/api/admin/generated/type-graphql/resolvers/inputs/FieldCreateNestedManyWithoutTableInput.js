"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldCreateNestedManyWithoutTableInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldCreateManyTableInputEnvelope_1 = require("../inputs/FieldCreateManyTableInputEnvelope");
const FieldCreateOrConnectWithoutTableInput_1 = require("../inputs/FieldCreateOrConnectWithoutTableInput");
const FieldCreateWithoutTableInput_1 = require("../inputs/FieldCreateWithoutTableInput");
const FieldWhereUniqueInput_1 = require("../inputs/FieldWhereUniqueInput");
let FieldCreateNestedManyWithoutTableInput = class FieldCreateNestedManyWithoutTableInput {
    create;
    connectOrCreate;
    createMany;
    connect;
};
exports.FieldCreateNestedManyWithoutTableInput = FieldCreateNestedManyWithoutTableInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldCreateWithoutTableInput_1.FieldCreateWithoutTableInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldCreateNestedManyWithoutTableInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldCreateOrConnectWithoutTableInput_1.FieldCreateOrConnectWithoutTableInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldCreateNestedManyWithoutTableInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldCreateManyTableInputEnvelope_1.FieldCreateManyTableInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldCreateManyTableInputEnvelope_1.FieldCreateManyTableInputEnvelope)
], FieldCreateNestedManyWithoutTableInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldWhereUniqueInput_1.FieldWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FieldCreateNestedManyWithoutTableInput.prototype, "connect", void 0);
exports.FieldCreateNestedManyWithoutTableInput = FieldCreateNestedManyWithoutTableInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldCreateNestedManyWithoutTableInput", {})
], FieldCreateNestedManyWithoutTableInput);
