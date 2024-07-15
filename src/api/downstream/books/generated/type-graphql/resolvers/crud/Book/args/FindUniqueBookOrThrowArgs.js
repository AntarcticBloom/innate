"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBookOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookWhereUniqueInput_1 = require("../../../inputs/BookWhereUniqueInput");
let FindUniqueBookOrThrowArgs = class FindUniqueBookOrThrowArgs {
    where;
};
exports.FindUniqueBookOrThrowArgs = FindUniqueBookOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereUniqueInput_1.BookWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookWhereUniqueInput_1.BookWhereUniqueInput)
], FindUniqueBookOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueBookOrThrowArgs = FindUniqueBookOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueBookOrThrowArgs);
