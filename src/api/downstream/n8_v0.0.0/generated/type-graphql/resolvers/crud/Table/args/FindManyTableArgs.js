"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTableArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableOrderByWithRelationInput_1 = require("../../../inputs/TableOrderByWithRelationInput");
const TableWhereInput_1 = require("../../../inputs/TableWhereInput");
const TableWhereUniqueInput_1 = require("../../../inputs/TableWhereUniqueInput");
const TableScalarFieldEnum_1 = require("../../../../enums/TableScalarFieldEnum");
let FindManyTableArgs = class FindManyTableArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
    distinct;
};
exports.FindManyTableArgs = FindManyTableArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereInput_1.TableWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableWhereInput_1.TableWhereInput)
], FindManyTableArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableOrderByWithRelationInput_1.TableOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTableArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereUniqueInput_1.TableWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableWhereUniqueInput_1.TableWhereUniqueInput)
], FindManyTableArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTableArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTableArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableScalarFieldEnum_1.TableScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTableArgs.prototype, "distinct", void 0);
exports.FindManyTableArgs = FindManyTableArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyTableArgs);
