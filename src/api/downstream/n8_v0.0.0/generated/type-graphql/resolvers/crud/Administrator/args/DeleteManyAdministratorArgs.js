"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyAdministratorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdministratorWhereInput_1 = require("../../../inputs/AdministratorWhereInput");
let DeleteManyAdministratorArgs = class DeleteManyAdministratorArgs {
    where;
};
exports.DeleteManyAdministratorArgs = DeleteManyAdministratorArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdministratorWhereInput_1.AdministratorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdministratorWhereInput_1.AdministratorWhereInput)
], DeleteManyAdministratorArgs.prototype, "where", void 0);
exports.DeleteManyAdministratorArgs = DeleteManyAdministratorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyAdministratorArgs);
