"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorUpdateToOneWithWhereWithoutBookAuthorsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AuthorUpdateWithoutBookAuthorsInput_1 = require("../inputs/AuthorUpdateWithoutBookAuthorsInput");
const AuthorWhereInput_1 = require("../inputs/AuthorWhereInput");
let AuthorUpdateToOneWithWhereWithoutBookAuthorsInput = class AuthorUpdateToOneWithWhereWithoutBookAuthorsInput {
    where;
    data;
};
exports.AuthorUpdateToOneWithWhereWithoutBookAuthorsInput = AuthorUpdateToOneWithWhereWithoutBookAuthorsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorWhereInput_1.AuthorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AuthorWhereInput_1.AuthorWhereInput)
], AuthorUpdateToOneWithWhereWithoutBookAuthorsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AuthorUpdateWithoutBookAuthorsInput_1.AuthorUpdateWithoutBookAuthorsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AuthorUpdateWithoutBookAuthorsInput_1.AuthorUpdateWithoutBookAuthorsInput)
], AuthorUpdateToOneWithWhereWithoutBookAuthorsInput.prototype, "data", void 0);
exports.AuthorUpdateToOneWithWhereWithoutBookAuthorsInput = AuthorUpdateToOneWithWhereWithoutBookAuthorsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AuthorUpdateToOneWithWhereWithoutBookAuthorsInput", {})
], AuthorUpdateToOneWithWhereWithoutBookAuthorsInput);
