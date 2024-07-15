"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneAdministratorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdministratorUpdateInput_1 = require("../../../inputs/AdministratorUpdateInput");
const AdministratorWhereUniqueInput_1 = require("../../../inputs/AdministratorWhereUniqueInput");
let UpdateOneAdministratorArgs = class UpdateOneAdministratorArgs {
    data;
    where;
};
exports.UpdateOneAdministratorArgs = UpdateOneAdministratorArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdministratorUpdateInput_1.AdministratorUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AdministratorUpdateInput_1.AdministratorUpdateInput)
], UpdateOneAdministratorArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdministratorWhereUniqueInput_1.AdministratorWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AdministratorWhereUniqueInput_1.AdministratorWhereUniqueInput)
], UpdateOneAdministratorArgs.prototype, "where", void 0);
exports.UpdateOneAdministratorArgs = UpdateOneAdministratorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneAdministratorArgs);
