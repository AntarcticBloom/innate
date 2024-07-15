"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyBookArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCreateManyInput_1 = require("../../../inputs/BookCreateManyInput");
let CreateManyBookArgs = class CreateManyBookArgs {
    data;
    skipDuplicates;
};
exports.CreateManyBookArgs = CreateManyBookArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookCreateManyInput_1.BookCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyBookArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyBookArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyBookArgs = CreateManyBookArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyBookArgs);
