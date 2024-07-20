"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneFieldArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldUpdateInput_1 = require("../../../inputs/FieldUpdateInput");
const FieldWhereUniqueInput_1 = require("../../../inputs/FieldWhereUniqueInput");
let UpdateOneFieldArgs = class UpdateOneFieldArgs {
    data;
    where;
};
exports.UpdateOneFieldArgs = UpdateOneFieldArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldUpdateInput_1.FieldUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldUpdateInput_1.FieldUpdateInput)
], UpdateOneFieldArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldWhereUniqueInput_1.FieldWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldWhereUniqueInput_1.FieldWhereUniqueInput)
], UpdateOneFieldArgs.prototype, "where", void 0);
exports.UpdateOneFieldArgs = UpdateOneFieldArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneFieldArgs);
