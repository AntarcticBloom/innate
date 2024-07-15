"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorCreateNestedManyWithoutAuthorInput_1 = require("../inputs/BookAuthorCreateNestedManyWithoutAuthorInput");
let AuthorCreateInput = class AuthorCreateInput {
    id;
    name;
    createdAt;
    updatedAt;
    bookAuthors;
};
exports.AuthorCreateInput = AuthorCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AuthorCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AuthorCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AuthorCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AuthorCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorCreateNestedManyWithoutAuthorInput_1.BookAuthorCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorCreateNestedManyWithoutAuthorInput_1.BookAuthorCreateNestedManyWithoutAuthorInput)
], AuthorCreateInput.prototype, "bookAuthors", void 0);
exports.AuthorCreateInput = AuthorCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AuthorCreateInput", {})
], AuthorCreateInput);
