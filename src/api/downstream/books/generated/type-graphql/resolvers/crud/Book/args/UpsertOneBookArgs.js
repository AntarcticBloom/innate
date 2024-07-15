"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneBookArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCreateInput_1 = require("../../../inputs/BookCreateInput");
const BookUpdateInput_1 = require("../../../inputs/BookUpdateInput");
const BookWhereUniqueInput_1 = require("../../../inputs/BookWhereUniqueInput");
let UpsertOneBookArgs = class UpsertOneBookArgs {
    where;
    create;
    update;
};
exports.UpsertOneBookArgs = UpsertOneBookArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereUniqueInput_1.BookWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookWhereUniqueInput_1.BookWhereUniqueInput)
], UpsertOneBookArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateInput_1.BookCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookCreateInput_1.BookCreateInput)
], UpsertOneBookArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookUpdateInput_1.BookUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookUpdateInput_1.BookUpdateInput)
], UpsertOneBookArgs.prototype, "update", void 0);
exports.UpsertOneBookArgs = UpsertOneBookArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneBookArgs);
