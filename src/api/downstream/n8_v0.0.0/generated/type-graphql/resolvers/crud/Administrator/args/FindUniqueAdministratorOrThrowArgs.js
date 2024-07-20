"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAdministratorOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdministratorWhereUniqueInput_1 = require("../../../inputs/AdministratorWhereUniqueInput");
let FindUniqueAdministratorOrThrowArgs = class FindUniqueAdministratorOrThrowArgs {
    where;
};
exports.FindUniqueAdministratorOrThrowArgs = FindUniqueAdministratorOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdministratorWhereUniqueInput_1.AdministratorWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AdministratorWhereUniqueInput_1.AdministratorWhereUniqueInput)
], FindUniqueAdministratorOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueAdministratorOrThrowArgs = FindUniqueAdministratorOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueAdministratorOrThrowArgs);
