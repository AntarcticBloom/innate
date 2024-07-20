"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneFieldAnnotationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldAnnotationCreateInput_1 = require("../../../inputs/FieldAnnotationCreateInput");
const FieldAnnotationUpdateInput_1 = require("../../../inputs/FieldAnnotationUpdateInput");
const FieldAnnotationWhereUniqueInput_1 = require("../../../inputs/FieldAnnotationWhereUniqueInput");
let UpsertOneFieldAnnotationArgs = class UpsertOneFieldAnnotationArgs {
    where;
    create;
    update;
};
exports.UpsertOneFieldAnnotationArgs = UpsertOneFieldAnnotationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldAnnotationWhereUniqueInput_1.FieldAnnotationWhereUniqueInput)
], UpsertOneFieldAnnotationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationCreateInput_1.FieldAnnotationCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldAnnotationCreateInput_1.FieldAnnotationCreateInput)
], UpsertOneFieldAnnotationArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldAnnotationUpdateInput_1.FieldAnnotationUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", FieldAnnotationUpdateInput_1.FieldAnnotationUpdateInput)
], UpsertOneFieldAnnotationArgs.prototype, "update", void 0);
exports.UpsertOneFieldAnnotationArgs = UpsertOneFieldAnnotationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneFieldAnnotationArgs);
