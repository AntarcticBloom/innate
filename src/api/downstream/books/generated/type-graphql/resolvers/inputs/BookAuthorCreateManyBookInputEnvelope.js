"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorCreateManyBookInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookAuthorCreateManyBookInput_1 = require("../inputs/BookAuthorCreateManyBookInput");
let BookAuthorCreateManyBookInputEnvelope = class BookAuthorCreateManyBookInputEnvelope {
    data;
    skipDuplicates;
};
exports.BookAuthorCreateManyBookInputEnvelope = BookAuthorCreateManyBookInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookAuthorCreateManyBookInput_1.BookAuthorCreateManyBookInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], BookAuthorCreateManyBookInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], BookAuthorCreateManyBookInputEnvelope.prototype, "skipDuplicates", void 0);
exports.BookAuthorCreateManyBookInputEnvelope = BookAuthorCreateManyBookInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("BookAuthorCreateManyBookInputEnvelope", {})
], BookAuthorCreateManyBookInputEnvelope);
