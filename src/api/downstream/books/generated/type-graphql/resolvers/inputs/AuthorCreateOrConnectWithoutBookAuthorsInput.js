"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorCreateOrConnectWithoutBookAuthorsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorCreateWithoutBookAuthorsInput_1 = require("../inputs/AuthorCreateWithoutBookAuthorsInput");
const AuthorWhereUniqueInput_1 = require("../inputs/AuthorWhereUniqueInput");
let AuthorCreateOrConnectWithoutBookAuthorsInput = class AuthorCreateOrConnectWithoutBookAuthorsInput {
    where;
    create;
};
exports.AuthorCreateOrConnectWithoutBookAuthorsInput = AuthorCreateOrConnectWithoutBookAuthorsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorWhereUniqueInput_1.AuthorWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AuthorWhereUniqueInput_1.AuthorWhereUniqueInput)
], AuthorCreateOrConnectWithoutBookAuthorsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorCreateWithoutBookAuthorsInput_1.AuthorCreateWithoutBookAuthorsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AuthorCreateWithoutBookAuthorsInput_1.AuthorCreateWithoutBookAuthorsInput)
], AuthorCreateOrConnectWithoutBookAuthorsInput.prototype, "create", void 0);
exports.AuthorCreateOrConnectWithoutBookAuthorsInput = AuthorCreateOrConnectWithoutBookAuthorsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AuthorCreateOrConnectWithoutBookAuthorsInput", {})
], AuthorCreateOrConnectWithoutBookAuthorsInput);
