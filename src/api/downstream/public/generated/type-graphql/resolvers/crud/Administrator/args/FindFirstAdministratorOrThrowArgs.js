"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAdministratorOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdministratorOrderByWithRelationInput_1 = require("../../../inputs/AdministratorOrderByWithRelationInput");
const AdministratorWhereInput_1 = require("../../../inputs/AdministratorWhereInput");
const AdministratorWhereUniqueInput_1 = require("../../../inputs/AdministratorWhereUniqueInput");
const AdministratorScalarFieldEnum_1 = require("../../../../enums/AdministratorScalarFieldEnum");
let FindFirstAdministratorOrThrowArgs = class FindFirstAdministratorOrThrowArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
    distinct;
};
exports.FindFirstAdministratorOrThrowArgs = FindFirstAdministratorOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdministratorWhereInput_1.AdministratorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdministratorWhereInput_1.AdministratorWhereInput)
], FindFirstAdministratorOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdministratorOrderByWithRelationInput_1.AdministratorOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstAdministratorOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdministratorWhereUniqueInput_1.AdministratorWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdministratorWhereUniqueInput_1.AdministratorWhereUniqueInput)
], FindFirstAdministratorOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstAdministratorOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstAdministratorOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdministratorScalarFieldEnum_1.AdministratorScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstAdministratorOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstAdministratorOrThrowArgs = FindFirstAdministratorOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstAdministratorOrThrowArgs);
