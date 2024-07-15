"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAdministratorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdministratorCreateManyInput_1 = require("../../../inputs/AdministratorCreateManyInput");
let CreateManyAdministratorArgs = class CreateManyAdministratorArgs {
    data;
    skipDuplicates;
};
exports.CreateManyAdministratorArgs = CreateManyAdministratorArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdministratorCreateManyInput_1.AdministratorCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAdministratorArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyAdministratorArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyAdministratorArgs = CreateManyAdministratorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAdministratorArgs);
