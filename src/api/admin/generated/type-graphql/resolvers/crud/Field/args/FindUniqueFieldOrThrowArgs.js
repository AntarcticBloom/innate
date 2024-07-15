"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueFieldOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldWhereUniqueInput_1 = require("../../../inputs/FieldWhereUniqueInput");
let FindUniqueFieldOrThrowArgs = class FindUniqueFieldOrThrowArgs {
    where;
};
exports.FindUniqueFieldOrThrowArgs = FindUniqueFieldOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldWhereUniqueInput_1.FieldWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldWhereUniqueInput_1.FieldWhereUniqueInput)
], FindUniqueFieldOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueFieldOrThrowArgs = FindUniqueFieldOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueFieldOrThrowArgs);
