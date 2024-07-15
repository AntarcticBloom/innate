"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstAuthorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorOrderByWithRelationInput_1 = require("../../../inputs/AuthorOrderByWithRelationInput");
const AuthorWhereInput_1 = require("../../../inputs/AuthorWhereInput");
const AuthorWhereUniqueInput_1 = require("../../../inputs/AuthorWhereUniqueInput");
const AuthorScalarFieldEnum_1 = require("../../../../enums/AuthorScalarFieldEnum");
let FindFirstAuthorArgs = class FindFirstAuthorArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
    distinct;
};
exports.FindFirstAuthorArgs = FindFirstAuthorArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorWhereInput_1.AuthorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorWhereInput_1.AuthorWhereInput)
], FindFirstAuthorArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AuthorOrderByWithRelationInput_1.AuthorOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstAuthorArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorWhereUniqueInput_1.AuthorWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorWhereUniqueInput_1.AuthorWhereUniqueInput)
], FindFirstAuthorArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstAuthorArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstAuthorArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AuthorScalarFieldEnum_1.AuthorScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstAuthorArgs.prototype, "distinct", void 0);
exports.FindFirstAuthorArgs = FindFirstAuthorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstAuthorArgs);
