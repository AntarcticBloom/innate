"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookUpdateOneRequiredWithoutBookAuthorsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCreateOrConnectWithoutBookAuthorsInput_1 = require("../inputs/BookCreateOrConnectWithoutBookAuthorsInput");
const BookCreateWithoutBookAuthorsInput_1 = require("../inputs/BookCreateWithoutBookAuthorsInput");
const BookUpdateToOneWithWhereWithoutBookAuthorsInput_1 = require("../inputs/BookUpdateToOneWithWhereWithoutBookAuthorsInput");
const BookUpsertWithoutBookAuthorsInput_1 = require("../inputs/BookUpsertWithoutBookAuthorsInput");
const BookWhereUniqueInput_1 = require("../inputs/BookWhereUniqueInput");
let BookUpdateOneRequiredWithoutBookAuthorsNestedInput = class BookUpdateOneRequiredWithoutBookAuthorsNestedInput {
    create;
    connectOrCreate;
    upsert;
    connect;
    update;
};
exports.BookUpdateOneRequiredWithoutBookAuthorsNestedInput = BookUpdateOneRequiredWithoutBookAuthorsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateWithoutBookAuthorsInput_1.BookCreateWithoutBookAuthorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookCreateWithoutBookAuthorsInput_1.BookCreateWithoutBookAuthorsInput)
], BookUpdateOneRequiredWithoutBookAuthorsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCreateOrConnectWithoutBookAuthorsInput_1.BookCreateOrConnectWithoutBookAuthorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookCreateOrConnectWithoutBookAuthorsInput_1.BookCreateOrConnectWithoutBookAuthorsInput)
], BookUpdateOneRequiredWithoutBookAuthorsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookUpsertWithoutBookAuthorsInput_1.BookUpsertWithoutBookAuthorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookUpsertWithoutBookAuthorsInput_1.BookUpsertWithoutBookAuthorsInput)
], BookUpdateOneRequiredWithoutBookAuthorsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookWhereUniqueInput_1.BookWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookWhereUniqueInput_1.BookWhereUniqueInput)
], BookUpdateOneRequiredWithoutBookAuthorsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookUpdateToOneWithWhereWithoutBookAuthorsInput_1.BookUpdateToOneWithWhereWithoutBookAuthorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookUpdateToOneWithWhereWithoutBookAuthorsInput_1.BookUpdateToOneWithWhereWithoutBookAuthorsInput)
], BookUpdateOneRequiredWithoutBookAuthorsNestedInput.prototype, "update", void 0);
exports.BookUpdateOneRequiredWithoutBookAuthorsNestedInput = BookUpdateOneRequiredWithoutBookAuthorsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookUpdateOneRequiredWithoutBookAuthorsNestedInput", {})
], BookUpdateOneRequiredWithoutBookAuthorsNestedInput);
