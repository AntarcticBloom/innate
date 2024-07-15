"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneAuthorArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorUpdateInput_1 = require("../../../inputs/AuthorUpdateInput");
const AuthorWhereUniqueInput_1 = require("../../../inputs/AuthorWhereUniqueInput");
let UpdateOneAuthorArgs = class UpdateOneAuthorArgs {
    data;
    where;
};
exports.UpdateOneAuthorArgs = UpdateOneAuthorArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorUpdateInput_1.AuthorUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AuthorUpdateInput_1.AuthorUpdateInput)
], UpdateOneAuthorArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorWhereUniqueInput_1.AuthorWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AuthorWhereUniqueInput_1.AuthorWhereUniqueInput)
], UpdateOneAuthorArgs.prototype, "where", void 0);
exports.UpdateOneAuthorArgs = UpdateOneAuthorArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneAuthorArgs);
