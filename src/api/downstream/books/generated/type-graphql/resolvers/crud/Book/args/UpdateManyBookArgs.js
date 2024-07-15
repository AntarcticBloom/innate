"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyBookArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookUpdateManyMutationInput_1 = require("../../../inputs/BookUpdateManyMutationInput");
const BookWhereInput_1 = require("../../../inputs/BookWhereInput");
let UpdateManyBookArgs = class UpdateManyBookArgs {
    data;
    where;
};
exports.UpdateManyBookArgs = UpdateManyBookArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookUpdateManyMutationInput_1.BookUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookUpdateManyMutationInput_1.BookUpdateManyMutationInput)
], UpdateManyBookArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereInput_1.BookWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookWhereInput_1.BookWhereInput)
], UpdateManyBookArgs.prototype, "where", void 0);
exports.UpdateManyBookArgs = UpdateManyBookArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyBookArgs);
