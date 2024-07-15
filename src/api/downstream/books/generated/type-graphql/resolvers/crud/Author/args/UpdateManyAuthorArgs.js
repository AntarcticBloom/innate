"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAuthorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorUpdateManyMutationInput_1 = require("../../../inputs/AuthorUpdateManyMutationInput");
const AuthorWhereInput_1 = require("../../../inputs/AuthorWhereInput");
let UpdateManyAuthorArgs = class UpdateManyAuthorArgs {
    data;
    where;
};
exports.UpdateManyAuthorArgs = UpdateManyAuthorArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorUpdateManyMutationInput_1.AuthorUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AuthorUpdateManyMutationInput_1.AuthorUpdateManyMutationInput)
], UpdateManyAuthorArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorWhereInput_1.AuthorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorWhereInput_1.AuthorWhereInput)
], UpdateManyAuthorArgs.prototype, "where", void 0);
exports.UpdateManyAuthorArgs = UpdateManyAuthorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyAuthorArgs);
