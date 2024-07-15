"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTableArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableOrderByWithRelationInput_1 = require("../../../inputs/TableOrderByWithRelationInput");
const TableWhereInput_1 = require("../../../inputs/TableWhereInput");
const TableWhereUniqueInput_1 = require("../../../inputs/TableWhereUniqueInput");
let AggregateTableArgs = class AggregateTableArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
};
exports.AggregateTableArgs = AggregateTableArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereInput_1.TableWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableWhereInput_1.TableWhereInput)
], AggregateTableArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TableOrderByWithRelationInput_1.TableOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateTableArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereUniqueInput_1.TableWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableWhereUniqueInput_1.TableWhereUniqueInput)
], AggregateTableArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTableArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateTableArgs.prototype, "skip", void 0);
exports.AggregateTableArgs = AggregateTableArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateTableArgs);
