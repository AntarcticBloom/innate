"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorUpsertWithoutBookAuthorsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorCreateWithoutBookAuthorsInput_1 = require("../inputs/AuthorCreateWithoutBookAuthorsInput");
const AuthorUpdateWithoutBookAuthorsInput_1 = require("../inputs/AuthorUpdateWithoutBookAuthorsInput");
const AuthorWhereInput_1 = require("../inputs/AuthorWhereInput");
let AuthorUpsertWithoutBookAuthorsInput = class AuthorUpsertWithoutBookAuthorsInput {
    update;
    create;
    where;
};
exports.AuthorUpsertWithoutBookAuthorsInput = AuthorUpsertWithoutBookAuthorsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorUpdateWithoutBookAuthorsInput_1.AuthorUpdateWithoutBookAuthorsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AuthorUpdateWithoutBookAuthorsInput_1.AuthorUpdateWithoutBookAuthorsInput)
], AuthorUpsertWithoutBookAuthorsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorCreateWithoutBookAuthorsInput_1.AuthorCreateWithoutBookAuthorsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AuthorCreateWithoutBookAuthorsInput_1.AuthorCreateWithoutBookAuthorsInput)
], AuthorUpsertWithoutBookAuthorsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorWhereInput_1.AuthorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorWhereInput_1.AuthorWhereInput)
], AuthorUpsertWithoutBookAuthorsInput.prototype, "where", void 0);
exports.AuthorUpsertWithoutBookAuthorsInput = AuthorUpsertWithoutBookAuthorsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AuthorUpsertWithoutBookAuthorsInput", {})
], AuthorUpsertWithoutBookAuthorsInput);
