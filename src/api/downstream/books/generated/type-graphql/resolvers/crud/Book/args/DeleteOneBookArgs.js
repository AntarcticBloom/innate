"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneBookArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookWhereUniqueInput_1 = require("../../../inputs/BookWhereUniqueInput");
let DeleteOneBookArgs = class DeleteOneBookArgs {
    where;
};
exports.DeleteOneBookArgs = DeleteOneBookArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereUniqueInput_1.BookWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookWhereUniqueInput_1.BookWhereUniqueInput)
], DeleteOneBookArgs.prototype, "where", void 0);
exports.DeleteOneBookArgs = DeleteOneBookArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneBookArgs);
