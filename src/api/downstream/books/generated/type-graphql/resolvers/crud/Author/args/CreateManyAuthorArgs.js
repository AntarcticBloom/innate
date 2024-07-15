"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAuthorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorCreateManyInput_1 = require("../../../inputs/AuthorCreateManyInput");
let CreateManyAuthorArgs = class CreateManyAuthorArgs {
    data;
    skipDuplicates;
};
exports.CreateManyAuthorArgs = CreateManyAuthorArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AuthorCreateManyInput_1.AuthorCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAuthorArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyAuthorArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyAuthorArgs = CreateManyAuthorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAuthorArgs);
