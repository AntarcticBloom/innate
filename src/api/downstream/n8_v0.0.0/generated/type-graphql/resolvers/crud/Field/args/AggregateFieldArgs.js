"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateFieldArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldOrderByWithRelationInput_1 = require("../../../inputs/FieldOrderByWithRelationInput");
const FieldWhereInput_1 = require("../../../inputs/FieldWhereInput");
const FieldWhereUniqueInput_1 = require("../../../inputs/FieldWhereUniqueInput");
let AggregateFieldArgs = class AggregateFieldArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
};
exports.AggregateFieldArgs = AggregateFieldArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldWhereInput_1.FieldWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldWhereInput_1.FieldWhereInput)
], AggregateFieldArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FieldOrderByWithRelationInput_1.FieldOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateFieldArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldWhereUniqueInput_1.FieldWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldWhereUniqueInput_1.FieldWhereUniqueInput)
], AggregateFieldArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateFieldArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateFieldArgs.prototype, "skip", void 0);
exports.AggregateFieldArgs = AggregateFieldArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateFieldArgs);
