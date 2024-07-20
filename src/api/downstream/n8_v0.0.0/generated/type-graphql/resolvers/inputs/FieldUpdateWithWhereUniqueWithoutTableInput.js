"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldUpdateWithWhereUniqueWithoutTableInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldUpdateWithoutTableInput_1 = require("../inputs/FieldUpdateWithoutTableInput");
const FieldWhereUniqueInput_1 = require("../inputs/FieldWhereUniqueInput");
let FieldUpdateWithWhereUniqueWithoutTableInput = class FieldUpdateWithWhereUniqueWithoutTableInput {
    where;
    data;
};
exports.FieldUpdateWithWhereUniqueWithoutTableInput = FieldUpdateWithWhereUniqueWithoutTableInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldWhereUniqueInput_1.FieldWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldWhereUniqueInput_1.FieldWhereUniqueInput)
], FieldUpdateWithWhereUniqueWithoutTableInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldUpdateWithoutTableInput_1.FieldUpdateWithoutTableInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldUpdateWithoutTableInput_1.FieldUpdateWithoutTableInput)
], FieldUpdateWithWhereUniqueWithoutTableInput.prototype, "data", void 0);
exports.FieldUpdateWithWhereUniqueWithoutTableInput = FieldUpdateWithWhereUniqueWithoutTableInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldUpdateWithWhereUniqueWithoutTableInput", {})
], FieldUpdateWithWhereUniqueWithoutTableInput);
