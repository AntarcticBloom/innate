"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyBookAuthorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorWhereInput_1 = require("../../../inputs/BookAuthorWhereInput");
let DeleteManyBookAuthorArgs = class DeleteManyBookAuthorArgs {
    where;
};
exports.DeleteManyBookAuthorArgs = DeleteManyBookAuthorArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorWhereInput_1.BookAuthorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorWhereInput_1.BookAuthorWhereInput)
], DeleteManyBookAuthorArgs.prototype, "where", void 0);
exports.DeleteManyBookAuthorArgs = DeleteManyBookAuthorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyBookAuthorArgs);
