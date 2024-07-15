"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneBookAuthorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorCreateInput_1 = require("../../../inputs/BookAuthorCreateInput");
let CreateOneBookAuthorArgs = class CreateOneBookAuthorArgs {
    data;
};
exports.CreateOneBookAuthorArgs = CreateOneBookAuthorArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorCreateInput_1.BookAuthorCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookAuthorCreateInput_1.BookAuthorCreateInput)
], CreateOneBookAuthorArgs.prototype, "data", void 0);
exports.CreateOneBookAuthorArgs = CreateOneBookAuthorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneBookAuthorArgs);
