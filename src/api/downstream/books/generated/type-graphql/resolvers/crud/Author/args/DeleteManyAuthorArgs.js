"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyAuthorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorWhereInput_1 = require("../../../inputs/AuthorWhereInput");
let DeleteManyAuthorArgs = class DeleteManyAuthorArgs {
    where;
};
exports.DeleteManyAuthorArgs = DeleteManyAuthorArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorWhereInput_1.AuthorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorWhereInput_1.AuthorWhereInput)
], DeleteManyAuthorArgs.prototype, "where", void 0);
exports.DeleteManyAuthorArgs = DeleteManyAuthorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyAuthorArgs);
