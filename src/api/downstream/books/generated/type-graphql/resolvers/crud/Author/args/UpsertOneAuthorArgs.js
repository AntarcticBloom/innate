"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneAuthorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorCreateInput_1 = require("../../../inputs/AuthorCreateInput");
const AuthorUpdateInput_1 = require("../../../inputs/AuthorUpdateInput");
const AuthorWhereUniqueInput_1 = require("../../../inputs/AuthorWhereUniqueInput");
let UpsertOneAuthorArgs = class UpsertOneAuthorArgs {
    where;
    create;
    update;
};
exports.UpsertOneAuthorArgs = UpsertOneAuthorArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorWhereUniqueInput_1.AuthorWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AuthorWhereUniqueInput_1.AuthorWhereUniqueInput)
], UpsertOneAuthorArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorCreateInput_1.AuthorCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AuthorCreateInput_1.AuthorCreateInput)
], UpsertOneAuthorArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorUpdateInput_1.AuthorUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AuthorUpdateInput_1.AuthorUpdateInput)
], UpsertOneAuthorArgs.prototype, "update", void 0);
exports.UpsertOneAuthorArgs = UpsertOneAuthorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneAuthorArgs);
