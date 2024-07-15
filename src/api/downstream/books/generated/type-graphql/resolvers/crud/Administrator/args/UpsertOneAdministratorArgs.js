"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneAdministratorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdministratorCreateInput_1 = require("../../../inputs/AdministratorCreateInput");
const AdministratorUpdateInput_1 = require("../../../inputs/AdministratorUpdateInput");
const AdministratorWhereUniqueInput_1 = require("../../../inputs/AdministratorWhereUniqueInput");
let UpsertOneAdministratorArgs = class UpsertOneAdministratorArgs {
    where;
    create;
    update;
};
exports.UpsertOneAdministratorArgs = UpsertOneAdministratorArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdministratorWhereUniqueInput_1.AdministratorWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AdministratorWhereUniqueInput_1.AdministratorWhereUniqueInput)
], UpsertOneAdministratorArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdministratorCreateInput_1.AdministratorCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AdministratorCreateInput_1.AdministratorCreateInput)
], UpsertOneAdministratorArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdministratorUpdateInput_1.AdministratorUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AdministratorUpdateInput_1.AdministratorUpdateInput)
], UpsertOneAdministratorArgs.prototype, "update", void 0);
exports.UpsertOneAdministratorArgs = UpsertOneAdministratorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneAdministratorArgs);
