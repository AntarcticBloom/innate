"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorUpdateManyWithoutAuthorNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorCreateManyAuthorInputEnvelope_1 = require("../inputs/BookAuthorCreateManyAuthorInputEnvelope");
const BookAuthorCreateOrConnectWithoutAuthorInput_1 = require("../inputs/BookAuthorCreateOrConnectWithoutAuthorInput");
const BookAuthorCreateWithoutAuthorInput_1 = require("../inputs/BookAuthorCreateWithoutAuthorInput");
const BookAuthorScalarWhereInput_1 = require("../inputs/BookAuthorScalarWhereInput");
const BookAuthorUpdateManyWithWhereWithoutAuthorInput_1 = require("../inputs/BookAuthorUpdateManyWithWhereWithoutAuthorInput");
const BookAuthorUpdateWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/BookAuthorUpdateWithWhereUniqueWithoutAuthorInput");
const BookAuthorUpsertWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/BookAuthorUpsertWithWhereUniqueWithoutAuthorInput");
const BookAuthorWhereUniqueInput_1 = require("../inputs/BookAuthorWhereUniqueInput");
let BookAuthorUpdateManyWithoutAuthorNestedInput = class BookAuthorUpdateManyWithoutAuthorNestedInput {
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
exports.BookAuthorUpdateManyWithoutAuthorNestedInput = BookAuthorUpdateManyWithoutAuthorNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorCreateWithoutAuthorInput_1.BookAuthorCreateWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorUpdateManyWithoutAuthorNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorCreateOrConnectWithoutAuthorInput_1.BookAuthorCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorUpdateManyWithoutAuthorNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorUpsertWithWhereUniqueWithoutAuthorInput_1.BookAuthorUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorUpdateManyWithoutAuthorNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorCreateManyAuthorInputEnvelope_1.BookAuthorCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorCreateManyAuthorInputEnvelope_1.BookAuthorCreateManyAuthorInputEnvelope)
], BookAuthorUpdateManyWithoutAuthorNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorUpdateManyWithoutAuthorNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorUpdateManyWithoutAuthorNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorUpdateManyWithoutAuthorNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorUpdateManyWithoutAuthorNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorUpdateWithWhereUniqueWithoutAuthorInput_1.BookAuthorUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorUpdateManyWithoutAuthorNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorUpdateManyWithWhereWithoutAuthorInput_1.BookAuthorUpdateManyWithWhereWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorUpdateManyWithoutAuthorNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorScalarWhereInput_1.BookAuthorScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorUpdateManyWithoutAuthorNestedInput.prototype, "deleteMany", void 0);
exports.BookAuthorUpdateManyWithoutAuthorNestedInput = BookAuthorUpdateManyWithoutAuthorNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorUpdateManyWithoutAuthorNestedInput", {})
], BookAuthorUpdateManyWithoutAuthorNestedInput);
