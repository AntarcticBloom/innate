"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorCreateNestedManyWithoutBookInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorCreateManyBookInputEnvelope_1 = require("../inputs/BookAuthorCreateManyBookInputEnvelope");
const BookAuthorCreateOrConnectWithoutBookInput_1 = require("../inputs/BookAuthorCreateOrConnectWithoutBookInput");
const BookAuthorCreateWithoutBookInput_1 = require("../inputs/BookAuthorCreateWithoutBookInput");
const BookAuthorWhereUniqueInput_1 = require("../inputs/BookAuthorWhereUniqueInput");
let BookAuthorCreateNestedManyWithoutBookInput = class BookAuthorCreateNestedManyWithoutBookInput {
    create;
    connectOrCreate;
    createMany;
    connect;
};
exports.BookAuthorCreateNestedManyWithoutBookInput = BookAuthorCreateNestedManyWithoutBookInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorCreateWithoutBookInput_1.BookAuthorCreateWithoutBookInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorCreateNestedManyWithoutBookInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorCreateOrConnectWithoutBookInput_1.BookAuthorCreateOrConnectWithoutBookInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorCreateNestedManyWithoutBookInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorCreateManyBookInputEnvelope_1.BookAuthorCreateManyBookInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorCreateManyBookInputEnvelope_1.BookAuthorCreateManyBookInputEnvelope)
], BookAuthorCreateNestedManyWithoutBookInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorCreateNestedManyWithoutBookInput.prototype, "connect", void 0);
exports.BookAuthorCreateNestedManyWithoutBookInput = BookAuthorCreateNestedManyWithoutBookInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorCreateNestedManyWithoutBookInput", {})
], BookAuthorCreateNestedManyWithoutBookInput);
