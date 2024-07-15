"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldUpsertWithWhereUniqueWithoutTableInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldCreateWithoutTableInput_1 = require("../inputs/FieldCreateWithoutTableInput");
const FieldUpdateWithoutTableInput_1 = require("../inputs/FieldUpdateWithoutTableInput");
const FieldWhereUniqueInput_1 = require("../inputs/FieldWhereUniqueInput");
let FieldUpsertWithWhereUniqueWithoutTableInput = class FieldUpsertWithWhereUniqueWithoutTableInput {
    where;
    update;
    create;
};
exports.FieldUpsertWithWhereUniqueWithoutTableInput = FieldUpsertWithWhereUniqueWithoutTableInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldWhereUniqueInput_1.FieldWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldWhereUniqueInput_1.FieldWhereUniqueInput)
], FieldUpsertWithWhereUniqueWithoutTableInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldUpdateWithoutTableInput_1.FieldUpdateWithoutTableInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldUpdateWithoutTableInput_1.FieldUpdateWithoutTableInput)
], FieldUpsertWithWhereUniqueWithoutTableInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldCreateWithoutTableInput_1.FieldCreateWithoutTableInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldCreateWithoutTableInput_1.FieldCreateWithoutTableInput)
], FieldUpsertWithWhereUniqueWithoutTableInput.prototype, "create", void 0);
exports.FieldUpsertWithWhereUniqueWithoutTableInput = FieldUpsertWithWhereUniqueWithoutTableInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldUpsertWithWhereUniqueWithoutTableInput", {})
], FieldUpsertWithWhereUniqueWithoutTableInput);
