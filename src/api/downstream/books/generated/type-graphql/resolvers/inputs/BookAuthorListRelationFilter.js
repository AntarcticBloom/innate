"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorWhereInput_1 = require("../inputs/BookAuthorWhereInput");
let BookAuthorListRelationFilter = class BookAuthorListRelationFilter {
    every;
    some;
    none;
};
exports.BookAuthorListRelationFilter = BookAuthorListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorWhereInput_1.BookAuthorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorWhereInput_1.BookAuthorWhereInput)
], BookAuthorListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorWhereInput_1.BookAuthorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorWhereInput_1.BookAuthorWhereInput)
], BookAuthorListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorWhereInput_1.BookAuthorWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorWhereInput_1.BookAuthorWhereInput)
], BookAuthorListRelationFilter.prototype, "none", void 0);
exports.BookAuthorListRelationFilter = BookAuthorListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorListRelationFilter", {})
], BookAuthorListRelationFilter);
