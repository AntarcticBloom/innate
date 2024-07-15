"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueAuthorOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorWhereUniqueInput_1 = require("../../../inputs/AuthorWhereUniqueInput");
let FindUniqueAuthorOrThrowArgs = class FindUniqueAuthorOrThrowArgs {
    where;
};
exports.FindUniqueAuthorOrThrowArgs = FindUniqueAuthorOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorWhereUniqueInput_1.AuthorWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AuthorWhereUniqueInput_1.AuthorWhereUniqueInput)
], FindUniqueAuthorOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueAuthorOrThrowArgs = FindUniqueAuthorOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueAuthorOrThrowArgs);
