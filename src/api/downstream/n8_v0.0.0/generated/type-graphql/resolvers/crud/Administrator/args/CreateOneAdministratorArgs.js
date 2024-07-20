"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneAdministratorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdministratorCreateInput_1 = require("../../../inputs/AdministratorCreateInput");
let CreateOneAdministratorArgs = class CreateOneAdministratorArgs {
    data;
};
exports.CreateOneAdministratorArgs = CreateOneAdministratorArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdministratorCreateInput_1.AdministratorCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AdministratorCreateInput_1.AdministratorCreateInput)
], CreateOneAdministratorArgs.prototype, "data", void 0);
exports.CreateOneAdministratorArgs = CreateOneAdministratorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneAdministratorArgs);
