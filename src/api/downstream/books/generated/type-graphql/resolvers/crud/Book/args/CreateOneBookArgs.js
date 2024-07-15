"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneBookArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCreateInput_1 = require("../../../inputs/BookCreateInput");
let CreateOneBookArgs = class CreateOneBookArgs {
    data;
};
exports.CreateOneBookArgs = CreateOneBookArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateInput_1.BookCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookCreateInput_1.BookCreateInput)
], CreateOneBookArgs.prototype, "data", void 0);
exports.CreateOneBookArgs = CreateOneBookArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneBookArgs);
