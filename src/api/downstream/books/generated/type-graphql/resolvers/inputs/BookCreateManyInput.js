"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BookCreateManyInput = class BookCreateManyInput {
    id;
    name;
    createdAt;
    updatedAt;
};
exports.BookCreateManyInput = BookCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookCreateManyInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookCreateManyInput.prototype, "updatedAt", void 0);
exports.BookCreateManyInput = BookCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookCreateManyInput", {})
], BookCreateManyInput);
