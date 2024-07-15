"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorUpdateManyWithoutBookNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorCreateManyBookInputEnvelope_1 = require("../inputs/BookAuthorCreateManyBookInputEnvelope");
const BookAuthorCreateOrConnectWithoutBookInput_1 = require("../inputs/BookAuthorCreateOrConnectWithoutBookInput");
const BookAuthorCreateWithoutBookInput_1 = require("../inputs/BookAuthorCreateWithoutBookInput");
const BookAuthorScalarWhereInput_1 = require("../inputs/BookAuthorScalarWhereInput");
const BookAuthorUpdateManyWithWhereWithoutBookInput_1 = require("../inputs/BookAuthorUpdateManyWithWhereWithoutBookInput");
const BookAuthorUpdateWithWhereUniqueWithoutBookInput_1 = require("../inputs/BookAuthorUpdateWithWhereUniqueWithoutBookInput");
const BookAuthorUpsertWithWhereUniqueWithoutBookInput_1 = require("../inputs/BookAuthorUpsertWithWhereUniqueWithoutBookInput");
const BookAuthorWhereUniqueInput_1 = require("../inputs/BookAuthorWhereUniqueInput");
let BookAuthorUpdateManyWithoutBookNestedInput = class BookAuthorUpdateManyWithoutBookNestedInput {
    create;
    connectOrCreate;
    upsert;
    createMany;
    set;
    disconnect;
    delete;
    connect;
    update;
    updateMany;
    deleteMany;
};
exports.BookAuthorUpdateManyWithoutBookNestedInput = BookAuthorUpdateManyWithoutBookNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorCreateWithoutBookInput_1.BookAuthorCreateWithoutBookInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorUpdateManyWithoutBookNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorCreateOrConnectWithoutBookInput_1.BookAuthorCreateOrConnectWithoutBookInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorUpdateManyWithoutBookNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorUpsertWithWhereUniqueWithoutBookInput_1.BookAuthorUpsertWithWhereUniqueWithoutBookInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorUpdateManyWithoutBookNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorCreateManyBookInputEnvelope_1.BookAuthorCreateManyBookInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorCreateManyBookInputEnvelope_1.BookAuthorCreateManyBookInputEnvelope)
], BookAuthorUpdateManyWithoutBookNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorUpdateManyWithoutBookNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorUpdateManyWithoutBookNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorUpdateManyWithoutBookNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorUpdateManyWithoutBookNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorUpdateWithWhereUniqueWithoutBookInput_1.BookAuthorUpdateWithWhereUniqueWithoutBookInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorUpdateManyWithoutBookNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorUpdateManyWithWhereWithoutBookInput_1.BookAuthorUpdateManyWithWhereWithoutBookInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorUpdateManyWithoutBookNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorScalarWhereInput_1.BookAuthorScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorUpdateManyWithoutBookNestedInput.prototype, "deleteMany", void 0);
exports.BookAuthorUpdateManyWithoutBookNestedInput = BookAuthorUpdateManyWithoutBookNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorUpdateManyWithoutBookNestedInput", {})
], BookAuthorUpdateManyWithoutBookNestedInput);
