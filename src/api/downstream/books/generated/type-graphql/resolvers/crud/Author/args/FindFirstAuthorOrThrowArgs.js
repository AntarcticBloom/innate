"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAuthorOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorOrderByWithRelationInput_1 = require("../../../inputs/AuthorOrderByWithRelationInput");
const AuthorWhereInput_1 = require("../../../inputs/AuthorWhereInput");
const AuthorWhereUniqueInput_1 = require("../../../inputs/AuthorWhereUniqueInput");
const AuthorScalarFieldEnum_1 = require("../../../../enums/AuthorScalarFieldEnum");
let FindFirstAuthorOrThrowArgs = class FindFirstAuthorOrThrowArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
    distinct;
};
exports.FindFirstAuthorOrThrowArgs = FindFirstAuthorOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorWhereInput_1.AuthorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorWhereInput_1.AuthorWhereInput)
], FindFirstAuthorOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AuthorOrderByWithRelationInput_1.AuthorOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstAuthorOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorWhereUniqueInput_1.AuthorWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorWhereUniqueInput_1.AuthorWhereUniqueInput)
], FindFirstAuthorOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstAuthorOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstAuthorOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AuthorScalarFieldEnum_1.AuthorScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstAuthorOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstAuthorOrThrowArgs = FindFirstAuthorOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstAuthorOrThrowArgs);
