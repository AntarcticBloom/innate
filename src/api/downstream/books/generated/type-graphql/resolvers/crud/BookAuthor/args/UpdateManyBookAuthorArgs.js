"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyBookAuthorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorUpdateManyMutationInput_1 = require("../../../inputs/BookAuthorUpdateManyMutationInput");
const BookAuthorWhereInput_1 = require("../../../inputs/BookAuthorWhereInput");
let UpdateManyBookAuthorArgs = class UpdateManyBookAuthorArgs {
    data;
    where;
};
exports.UpdateManyBookAuthorArgs = UpdateManyBookAuthorArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorUpdateManyMutationInput_1.BookAuthorUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookAuthorUpdateManyMutationInput_1.BookAuthorUpdateManyMutationInput)
], UpdateManyBookAuthorArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorWhereInput_1.BookAuthorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorWhereInput_1.BookAuthorWhereInput)
], UpdateManyBookAuthorArgs.prototype, "where", void 0);
exports.UpdateManyBookAuthorArgs = UpdateManyBookAuthorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyBookAuthorArgs);
