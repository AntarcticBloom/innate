"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneBookAuthorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorCreateInput_1 = require("../../../inputs/BookAuthorCreateInput");
const BookAuthorUpdateInput_1 = require("../../../inputs/BookAuthorUpdateInput");
const BookAuthorWhereUniqueInput_1 = require("../../../inputs/BookAuthorWhereUniqueInput");
let UpsertOneBookAuthorArgs = class UpsertOneBookAuthorArgs {
    where;
    create;
    update;
};
exports.UpsertOneBookAuthorArgs = UpsertOneBookAuthorArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput)
], UpsertOneBookAuthorArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorCreateInput_1.BookAuthorCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookAuthorCreateInput_1.BookAuthorCreateInput)
], UpsertOneBookAuthorArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorUpdateInput_1.BookAuthorUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookAuthorUpdateInput_1.BookAuthorUpdateInput)
], UpsertOneBookAuthorArgs.prototype, "update", void 0);
exports.UpsertOneBookAuthorArgs = UpsertOneBookAuthorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneBookAuthorArgs);
