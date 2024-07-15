"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorUpsertWithWhereUniqueWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorCreateWithoutAuthorInput_1 = require("../inputs/BookAuthorCreateWithoutAuthorInput");
const BookAuthorUpdateWithoutAuthorInput_1 = require("../inputs/BookAuthorUpdateWithoutAuthorInput");
const BookAuthorWhereUniqueInput_1 = require("../inputs/BookAuthorWhereUniqueInput");
let BookAuthorUpsertWithWhereUniqueWithoutAuthorInput = class BookAuthorUpsertWithWhereUniqueWithoutAuthorInput {
    where;
    update;
    create;
};
exports.BookAuthorUpsertWithWhereUniqueWithoutAuthorInput = BookAuthorUpsertWithWhereUniqueWithoutAuthorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput)
], BookAuthorUpsertWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorUpdateWithoutAuthorInput_1.BookAuthorUpdateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookAuthorUpdateWithoutAuthorInput_1.BookAuthorUpdateWithoutAuthorInput)
], BookAuthorUpsertWithWhereUniqueWithoutAuthorInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorCreateWithoutAuthorInput_1.BookAuthorCreateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookAuthorCreateWithoutAuthorInput_1.BookAuthorCreateWithoutAuthorInput)
], BookAuthorUpsertWithWhereUniqueWithoutAuthorInput.prototype, "create", void 0);
exports.BookAuthorUpsertWithWhereUniqueWithoutAuthorInput = BookAuthorUpsertWithWhereUniqueWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorUpsertWithWhereUniqueWithoutAuthorInput", {})
], BookAuthorUpsertWithWhereUniqueWithoutAuthorInput);
