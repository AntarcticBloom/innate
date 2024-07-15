"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorWhereInput_1 = require("../inputs/AuthorWhereInput");
let AuthorRelationFilter = class AuthorRelationFilter {
    is;
    isNot;
};
exports.AuthorRelationFilter = AuthorRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorWhereInput_1.AuthorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorWhereInput_1.AuthorWhereInput)
], AuthorRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorWhereInput_1.AuthorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorWhereInput_1.AuthorWhereInput)
], AuthorRelationFilter.prototype, "isNot", void 0);
exports.AuthorRelationFilter = AuthorRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("AuthorRelationFilter", {})
], AuthorRelationFilter);