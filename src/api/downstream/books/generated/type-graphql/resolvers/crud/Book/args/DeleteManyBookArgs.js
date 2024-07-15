"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyBookArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookWhereInput_1 = require("../../../inputs/BookWhereInput");
let DeleteManyBookArgs = class DeleteManyBookArgs {
    where;
};
exports.DeleteManyBookArgs = DeleteManyBookArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereInput_1.BookWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookWhereInput_1.BookWhereInput)
], DeleteManyBookArgs.prototype, "where", void 0);
exports.DeleteManyBookArgs = DeleteManyBookArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyBookArgs);
