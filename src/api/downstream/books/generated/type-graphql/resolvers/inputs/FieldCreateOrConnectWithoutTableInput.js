"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldCreateOrConnectWithoutTableInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldCreateWithoutTableInput_1 = require("../inputs/FieldCreateWithoutTableInput");
const FieldWhereUniqueInput_1 = require("../inputs/FieldWhereUniqueInput");
let FieldCreateOrConnectWithoutTableInput = class FieldCreateOrConnectWithoutTableInput {
    where;
    create;
};
exports.FieldCreateOrConnectWithoutTableInput = FieldCreateOrConnectWithoutTableInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldWhereUniqueInput_1.FieldWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldWhereUniqueInput_1.FieldWhereUniqueInput)
], FieldCreateOrConnectWithoutTableInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldCreateWithoutTableInput_1.FieldCreateWithoutTableInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldCreateWithoutTableInput_1.FieldCreateWithoutTableInput)
], FieldCreateOrConnectWithoutTableInput.prototype, "create", void 0);
exports.FieldCreateOrConnectWithoutTableInput = FieldCreateOrConnectWithoutTableInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldCreateOrConnectWithoutTableInput", {})
], FieldCreateOrConnectWithoutTableInput);
