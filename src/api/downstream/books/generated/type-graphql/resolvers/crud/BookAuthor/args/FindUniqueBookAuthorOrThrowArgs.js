"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBookAuthorOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorWhereUniqueInput_1 = require("../../../inputs/BookAuthorWhereUniqueInput");
let FindUniqueBookAuthorOrThrowArgs = class FindUniqueBookAuthorOrThrowArgs {
    where;
};
exports.FindUniqueBookAuthorOrThrowArgs = FindUniqueBookAuthorOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput)
], FindUniqueBookAuthorOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueBookAuthorOrThrowArgs = FindUniqueBookAuthorOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueBookAuthorOrThrowArgs);
