"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorCreateOrConnectWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorCreateWithoutAuthorInput_1 = require("../inputs/BookAuthorCreateWithoutAuthorInput");
const BookAuthorWhereUniqueInput_1 = require("../inputs/BookAuthorWhereUniqueInput");
let BookAuthorCreateOrConnectWithoutAuthorInput = class BookAuthorCreateOrConnectWithoutAuthorInput {
    where;
    create;
};
exports.BookAuthorCreateOrConnectWithoutAuthorInput = BookAuthorCreateOrConnectWithoutAuthorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput)
], BookAuthorCreateOrConnectWithoutAuthorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorCreateWithoutAuthorInput_1.BookAuthorCreateWithoutAuthorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookAuthorCreateWithoutAuthorInput_1.BookAuthorCreateWithoutAuthorInput)
], BookAuthorCreateOrConnectWithoutAuthorInput.prototype, "create", void 0);
exports.BookAuthorCreateOrConnectWithoutAuthorInput = BookAuthorCreateOrConnectWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorCreateOrConnectWithoutAuthorInput", {})
], BookAuthorCreateOrConnectWithoutAuthorInput);
