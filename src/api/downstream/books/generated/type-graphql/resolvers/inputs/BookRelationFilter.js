"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookWhereInput_1 = require("../inputs/BookWhereInput");
let BookRelationFilter = class BookRelationFilter {
    is;
    isNot;
};
exports.BookRelationFilter = BookRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereInput_1.BookWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookWhereInput_1.BookWhereInput)
], BookRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereInput_1.BookWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookWhereInput_1.BookWhereInput)
], BookRelationFilter.prototype, "isNot", void 0);
exports.BookRelationFilter = BookRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("BookRelationFilter", {})
], BookRelationFilter);
