"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneFieldArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldCreateInput_1 = require("../../../inputs/FieldCreateInput");
const FieldUpdateInput_1 = require("../../../inputs/FieldUpdateInput");
const FieldWhereUniqueInput_1 = require("../../../inputs/FieldWhereUniqueInput");
let UpsertOneFieldArgs = class UpsertOneFieldArgs {
    where;
    create;
    update;
};
exports.UpsertOneFieldArgs = UpsertOneFieldArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldWhereUniqueInput_1.FieldWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldWhereUniqueInput_1.FieldWhereUniqueInput)
], UpsertOneFieldArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldCreateInput_1.FieldCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldCreateInput_1.FieldCreateInput)
], UpsertOneFieldArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldUpdateInput_1.FieldUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldUpdateInput_1.FieldUpdateInput)
], UpsertOneFieldArgs.prototype, "update", void 0);
exports.UpsertOneFieldArgs = UpsertOneFieldArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneFieldArgs);
