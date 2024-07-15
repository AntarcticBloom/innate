"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyBookAuthorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorCreateManyInput_1 = require("../../../inputs/BookAuthorCreateManyInput");
let CreateManyBookAuthorArgs = class CreateManyBookAuthorArgs {
    data;
    skipDuplicates;
};
exports.CreateManyBookAuthorArgs = CreateManyBookAuthorArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorCreateManyInput_1.BookAuthorCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyBookAuthorArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyBookAuthorArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyBookAuthorArgs = CreateManyBookAuthorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyBookAuthorArgs);
