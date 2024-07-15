"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevokedRefreshTokenUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let RevokedRefreshTokenUpdateManyMutationInput = class RevokedRefreshTokenUpdateManyMutationInput {
    id;
    value;
    actualExpiration;
};
exports.RevokedRefreshTokenUpdateManyMutationInput = RevokedRefreshTokenUpdateManyMutationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RevokedRefreshTokenUpdateManyMutationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RevokedRefreshTokenUpdateManyMutationInput.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], RevokedRefreshTokenUpdateManyMutationInput.prototype, "actualExpiration", void 0);
exports.RevokedRefreshTokenUpdateManyMutationInput = RevokedRefreshTokenUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RevokedRefreshTokenUpdateManyMutationInput", {})
], RevokedRefreshTokenUpdateManyMutationInput);