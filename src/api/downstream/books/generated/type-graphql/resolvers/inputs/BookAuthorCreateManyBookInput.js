"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorCreateManyBookInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookAuthorCreateManyBookInput = class BookAuthorCreateManyBookInput {
    authorId;
};
exports.BookAuthorCreateManyBookInput = BookAuthorCreateManyBookInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookAuthorCreateManyBookInput.prototype, "authorId", void 0);
exports.BookAuthorCreateManyBookInput = BookAuthorCreateManyBookInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorCreateManyBookInput", {})
], BookAuthorCreateManyBookInput);
