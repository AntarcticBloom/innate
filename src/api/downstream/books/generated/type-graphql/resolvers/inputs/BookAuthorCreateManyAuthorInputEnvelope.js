"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorCreateManyAuthorInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorCreateManyAuthorInput_1 = require("../inputs/BookAuthorCreateManyAuthorInput");
let BookAuthorCreateManyAuthorInputEnvelope = class BookAuthorCreateManyAuthorInputEnvelope {
    data;
    skipDuplicates;
};
exports.BookAuthorCreateManyAuthorInputEnvelope = BookAuthorCreateManyAuthorInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorCreateManyAuthorInput_1.BookAuthorCreateManyAuthorInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorCreateManyAuthorInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], BookAuthorCreateManyAuthorInputEnvelope.prototype, "skipDuplicates", void 0);
exports.BookAuthorCreateManyAuthorInputEnvelope = BookAuthorCreateManyAuthorInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorCreateManyAuthorInputEnvelope", {})
], BookAuthorCreateManyAuthorInputEnvelope);
