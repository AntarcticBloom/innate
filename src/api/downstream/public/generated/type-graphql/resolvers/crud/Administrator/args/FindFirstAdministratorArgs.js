"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAdministratorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdministratorOrderByWithRelationInput_1 = require("../../../inputs/AdministratorOrderByWithRelationInput");
const AdministratorWhereInput_1 = require("../../../inputs/AdministratorWhereInput");
const AdministratorWhereUniqueInput_1 = require("../../../inputs/AdministratorWhereUniqueInput");
const AdministratorScalarFieldEnum_1 = require("../../../../enums/AdministratorScalarFieldEnum");
let FindFirstAdministratorArgs = class FindFirstAdministratorArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
    distinct;
};
exports.FindFirstAdministratorArgs = FindFirstAdministratorArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdministratorWhereInput_1.AdministratorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdministratorWhereInput_1.AdministratorWhereInput)
], FindFirstAdministratorArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdministratorOrderByWithRelationInput_1.AdministratorOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstAdministratorArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdministratorWhereUniqueInput_1.AdministratorWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdministratorWhereUniqueInput_1.AdministratorWhereUniqueInput)
], FindFirstAdministratorArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstAdministratorArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstAdministratorArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdministratorScalarFieldEnum_1.AdministratorScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstAdministratorArgs.prototype, "distinct", void 0);
exports.FindFirstAdministratorArgs = FindFirstAdministratorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstAdministratorArgs);
