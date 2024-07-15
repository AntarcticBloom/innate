"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAdministratorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdministratorOrderByWithRelationInput_1 = require("../../../inputs/AdministratorOrderByWithRelationInput");
const AdministratorWhereInput_1 = require("../../../inputs/AdministratorWhereInput");
const AdministratorWhereUniqueInput_1 = require("../../../inputs/AdministratorWhereUniqueInput");
let AggregateAdministratorArgs = class AggregateAdministratorArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
};
exports.AggregateAdministratorArgs = AggregateAdministratorArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdministratorWhereInput_1.AdministratorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdministratorWhereInput_1.AdministratorWhereInput)
], AggregateAdministratorArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AdministratorOrderByWithRelationInput_1.AdministratorOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateAdministratorArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdministratorWhereUniqueInput_1.AdministratorWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdministratorWhereUniqueInput_1.AdministratorWhereUniqueInput)
], AggregateAdministratorArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateAdministratorArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateAdministratorArgs.prototype, "skip", void 0);
exports.AggregateAdministratorArgs = AggregateAdministratorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateAdministratorArgs);
