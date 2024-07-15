"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneBookAuthorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorUpdateInput_1 = require("../../../inputs/BookAuthorUpdateInput");
const BookAuthorWhereUniqueInput_1 = require("../../../inputs/BookAuthorWhereUniqueInput");
let UpdateOneBookAuthorArgs = class UpdateOneBookAuthorArgs {
    data;
    where;
};
exports.UpdateOneBookAuthorArgs = UpdateOneBookAuthorArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorUpdateInput_1.BookAuthorUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookAuthorUpdateInput_1.BookAuthorUpdateInput)
], UpdateOneBookAuthorArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput)
], UpdateOneBookAuthorArgs.prototype, "where", void 0);
exports.UpdateOneBookAuthorArgs = UpdateOneBookAuthorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneBookAuthorArgs);
