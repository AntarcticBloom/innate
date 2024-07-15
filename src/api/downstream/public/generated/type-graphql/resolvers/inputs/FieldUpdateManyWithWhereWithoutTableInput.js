"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldUpdateManyWithWhereWithoutTableInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldScalarWhereInput_1 = require("../inputs/FieldScalarWhereInput");
const FieldUpdateManyMutationInput_1 = require("../inputs/FieldUpdateManyMutationInput");
let FieldUpdateManyWithWhereWithoutTableInput = class FieldUpdateManyWithWhereWithoutTableInput {
    where;
    data;
};
exports.FieldUpdateManyWithWhereWithoutTableInput = FieldUpdateManyWithWhereWithoutTableInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldScalarWhereInput_1.FieldScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldScalarWhereInput_1.FieldScalarWhereInput)
], FieldUpdateManyWithWhereWithoutTableInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldUpdateManyMutationInput_1.FieldUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldUpdateManyMutationInput_1.FieldUpdateManyMutationInput)
], FieldUpdateManyWithWhereWithoutTableInput.prototype, "data", void 0);
exports.FieldUpdateManyWithWhereWithoutTableInput = FieldUpdateManyWithWhereWithoutTableInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldUpdateManyWithWhereWithoutTableInput", {})
], FieldUpdateManyWithWhereWithoutTableInput);
