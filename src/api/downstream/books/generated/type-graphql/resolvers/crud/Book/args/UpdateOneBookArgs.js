"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneBookArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookUpdateInput_1 = require("../../../inputs/BookUpdateInput");
const BookWhereUniqueInput_1 = require("../../../inputs/BookWhereUniqueInput");
let UpdateOneBookArgs = class UpdateOneBookArgs {
    data;
    where;
};
exports.UpdateOneBookArgs = UpdateOneBookArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookUpdateInput_1.BookUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookUpdateInput_1.BookUpdateInput)
], UpdateOneBookArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereUniqueInput_1.BookWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookWhereUniqueInput_1.BookWhereUniqueInput)
], UpdateOneBookArgs.prototype, "where", void 0);
exports.UpdateOneBookArgs = UpdateOneBookArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneBookArgs);
