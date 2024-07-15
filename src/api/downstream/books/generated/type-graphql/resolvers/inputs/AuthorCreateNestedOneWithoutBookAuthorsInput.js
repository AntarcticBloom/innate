"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorCreateNestedOneWithoutBookAuthorsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorCreateOrConnectWithoutBookAuthorsInput_1 = require("../inputs/AuthorCreateOrConnectWithoutBookAuthorsInput");
const AuthorCreateWithoutBookAuthorsInput_1 = require("../inputs/AuthorCreateWithoutBookAuthorsInput");
const AuthorWhereUniqueInput_1 = require("../inputs/AuthorWhereUniqueInput");
let AuthorCreateNestedOneWithoutBookAuthorsInput = class AuthorCreateNestedOneWithoutBookAuthorsInput {
    create;
    connectOrCreate;
    connect;
};
exports.AuthorCreateNestedOneWithoutBookAuthorsInput = AuthorCreateNestedOneWithoutBookAuthorsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorCreateWithoutBookAuthorsInput_1.AuthorCreateWithoutBookAuthorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorCreateWithoutBookAuthorsInput_1.AuthorCreateWithoutBookAuthorsInput)
], AuthorCreateNestedOneWithoutBookAuthorsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorCreateOrConnectWithoutBookAuthorsInput_1.AuthorCreateOrConnectWithoutBookAuthorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorCreateOrConnectWithoutBookAuthorsInput_1.AuthorCreateOrConnectWithoutBookAuthorsInput)
], AuthorCreateNestedOneWithoutBookAuthorsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorWhereUniqueInput_1.AuthorWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorWhereUniqueInput_1.AuthorWhereUniqueInput)
], AuthorCreateNestedOneWithoutBookAuthorsInput.prototype, "connect", void 0);
exports.AuthorCreateNestedOneWithoutBookAuthorsInput = AuthorCreateNestedOneWithoutBookAuthorsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AuthorCreateNestedOneWithoutBookAuthorsInput", {})
], AuthorCreateNestedOneWithoutBookAuthorsInput);
