"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneAuthorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorWhereUniqueInput_1 = require("../../../inputs/AuthorWhereUniqueInput");
let DeleteOneAuthorArgs = class DeleteOneAuthorArgs {
    where;
};
exports.DeleteOneAuthorArgs = DeleteOneAuthorArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorWhereUniqueInput_1.AuthorWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AuthorWhereUniqueInput_1.AuthorWhereUniqueInput)
], DeleteOneAuthorArgs.prototype, "where", void 0);
exports.DeleteOneAuthorArgs = DeleteOneAuthorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneAuthorArgs);
