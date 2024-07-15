"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorCreateNestedManyWithoutAuthorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorCreateManyAuthorInputEnvelope_1 = require("../inputs/BookAuthorCreateManyAuthorInputEnvelope");
const BookAuthorCreateOrConnectWithoutAuthorInput_1 = require("../inputs/BookAuthorCreateOrConnectWithoutAuthorInput");
const BookAuthorCreateWithoutAuthorInput_1 = require("../inputs/BookAuthorCreateWithoutAuthorInput");
const BookAuthorWhereUniqueInput_1 = require("../inputs/BookAuthorWhereUniqueInput");
let BookAuthorCreateNestedManyWithoutAuthorInput = class BookAuthorCreateNestedManyWithoutAuthorInput {
    create;
    connectOrCreate;
    createMany;
    connect;
};
exports.BookAuthorCreateNestedManyWithoutAuthorInput = BookAuthorCreateNestedManyWithoutAuthorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorCreateWithoutAuthorInput_1.BookAuthorCreateWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorCreateNestedManyWithoutAuthorInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorCreateOrConnectWithoutAuthorInput_1.BookAuthorCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorCreateNestedManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookAuthorCreateManyAuthorInputEnvelope_1.BookAuthorCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookAuthorCreateManyAuthorInputEnvelope_1.BookAuthorCreateManyAuthorInputEnvelope)
], BookAuthorCreateNestedManyWithoutAuthorInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorWhereUniqueInput_1.BookAuthorWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorCreateNestedManyWithoutAuthorInput.prototype, "connect", void 0);
exports.BookAuthorCreateNestedManyWithoutAuthorInput = BookAuthorCreateNestedManyWithoutAuthorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorCreateNestedManyWithoutAuthorInput", {})
], BookAuthorCreateNestedManyWithoutAuthorInput);
