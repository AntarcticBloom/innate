"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAdministratorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdministratorUpdateManyMutationInput_1 = require("../../../inputs/AdministratorUpdateManyMutationInput");
const AdministratorWhereInput_1 = require("../../../inputs/AdministratorWhereInput");
let UpdateManyAdministratorArgs = class UpdateManyAdministratorArgs {
    data;
    where;
};
exports.UpdateManyAdministratorArgs = UpdateManyAdministratorArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdministratorUpdateManyMutationInput_1.AdministratorUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AdministratorUpdateManyMutationInput_1.AdministratorUpdateManyMutationInput)
], UpdateManyAdministratorArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdministratorWhereInput_1.AdministratorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdministratorWhereInput_1.AdministratorWhereInput)
], UpdateManyAdministratorArgs.prototype, "where", void 0);
exports.UpdateManyAdministratorArgs = UpdateManyAdministratorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyAdministratorArgs);
