"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookCountOrderByAggregateInput_1 = require("../inputs/BookCountOrderByAggregateInput");
const BookMaxOrderByAggregateInput_1 = require("../inputs/BookMaxOrderByAggregateInput");
const BookMinOrderByAggregateInput_1 = require("../inputs/BookMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let BookOrderByWithAggregationInput = class BookOrderByWithAggregationInput {
    id;
    name;
    createdAt;
    updatedAt;
    _count;
    _max;
    _min;
};
exports.BookOrderByWithAggregationInput = BookOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookCountOrderByAggregateInput_1.BookCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookCountOrderByAggregateInput_1.BookCountOrderByAggregateInput)
], BookOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookMaxOrderByAggregateInput_1.BookMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookMaxOrderByAggregateInput_1.BookMaxOrderByAggregateInput)
], BookOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookMinOrderByAggregateInput_1.BookMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookMinOrderByAggregateInput_1.BookMinOrderByAggregateInput)
], BookOrderByWithAggregationInput.prototype, "_min", void 0);
exports.BookOrderByWithAggregationInput = BookOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookOrderByWithAggregationInput", {})
], BookOrderByWithAggregationInput);
