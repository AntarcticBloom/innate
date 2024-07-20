"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyFieldArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldUpdateManyMutationInput_1 = require("../../../inputs/FieldUpdateManyMutationInput");
const FieldWhereInput_1 = require("../../../inputs/FieldWhereInput");
let UpdateManyFieldArgs = class UpdateManyFieldArgs {
    data;
    where;
};
exports.UpdateManyFieldArgs = UpdateManyFieldArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldUpdateManyMutationInput_1.FieldUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldUpdateManyMutationInput_1.FieldUpdateManyMutationInput)
], UpdateManyFieldArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldWhereInput_1.FieldWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldWhereInput_1.FieldWhereInput)
], UpdateManyFieldArgs.prototype, "where", void 0);
exports.UpdateManyFieldArgs = UpdateManyFieldArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyFieldArgs);
