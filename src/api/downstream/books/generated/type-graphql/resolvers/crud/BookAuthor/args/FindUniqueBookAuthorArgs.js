"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBookAuthorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorWhereUniqueInput_1 = require("../../../inputs/BookAuthorWhereUniqueInput");
let FindUniqueBookAuthorArgs = class FindUniqueBookAuthorArgs {
    where;
};
exports.FindUniqueBookAuthorArgs = FindUniqueBookAuthorArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput)
], FindUniqueBookAuthorArgs.prototype, "where", void 0);
exports.FindUniqueBookAuthorArgs = FindUniqueBookAuthorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueBookAuthorArgs);
