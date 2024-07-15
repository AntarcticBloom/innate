"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let BookCountOrderByAggregateInput = class BookCountOrderByAggregateInput {
    id;
    name;
    createdAt;
    updatedAt;
};
exports.BookCountOrderByAggregateInput = BookCountOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookCountOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookCountOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookCountOrderByAggregateInput.prototype, "updatedAt", void 0);
exports.BookCountOrderByAggregateInput = BookCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookCountOrderByAggregateInput", {})
], BookCountOrderByAggregateInput);
