"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorUpdateWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorUpdateWithoutAuthorInput_1 = require("../inputs/BookAuthorUpdateWithoutAuthorInput");
const BookAuthorWhereUniqueInput_1 = require("../inputs/BookAuthorWhereUniqueInput");
let BookAuthorUpdateWithWhereUniqueWithoutAuthorInput = class BookAuthorUpdateWithWhereUniqueWithoutAuthorInput {
    where;
    data;
};
exports.BookAuthorUpdateWithWhereUniqueWithoutAuthorInput = BookAuthorUpdateWithWhereUniqueWithoutAuthorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput)
], BookAuthorUpdateWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorUpdateWithoutAuthorInput_1.BookAuthorUpdateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookAuthorUpdateWithoutAuthorInput_1.BookAuthorUpdateWithoutAuthorInput)
], BookAuthorUpdateWithWhereUniqueWithoutAuthorInput.prototype, "data", void 0);
exports.BookAuthorUpdateWithWhereUniqueWithoutAuthorInput = BookAuthorUpdateWithWhereUniqueWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorUpdateWithWhereUniqueWithoutAuthorInput", {})
], BookAuthorUpdateWithWhereUniqueWithoutAuthorInput);
