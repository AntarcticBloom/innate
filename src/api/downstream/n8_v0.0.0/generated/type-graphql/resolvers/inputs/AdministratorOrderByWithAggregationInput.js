"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministratorOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdministratorCountOrderByAggregateInput_1 = require("../inputs/AdministratorCountOrderByAggregateInput");
const AdministratorMaxOrderByAggregateInput_1 = require("../inputs/AdministratorMaxOrderByAggregateInput");
const AdministratorMinOrderByAggregateInput_1 = require("../inputs/AdministratorMinOrderByAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AdministratorOrderByWithAggregationInput = class AdministratorOrderByWithAggregationInput {
    id;
    email;
    banned;
    username;
    verified;
    createdAt;
    updatedAt;
    _count;
    _max;
    _min;
};
exports.AdministratorOrderByWithAggregationInput = AdministratorOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorOrderByWithAggregationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], AdministratorOrderByWithAggregationInput.prototype, "banned", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorOrderByWithAggregationInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], AdministratorOrderByWithAggregationInput.prototype, "verified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdministratorCountOrderByAggregateInput_1.AdministratorCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdministratorCountOrderByAggregateInput_1.AdministratorCountOrderByAggregateInput)
], AdministratorOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdministratorMaxOrderByAggregateInput_1.AdministratorMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdministratorMaxOrderByAggregateInput_1.AdministratorMaxOrderByAggregateInput)
], AdministratorOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdministratorMinOrderByAggregateInput_1.AdministratorMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdministratorMinOrderByAggregateInput_1.AdministratorMinOrderByAggregateInput)
], AdministratorOrderByWithAggregationInput.prototype, "_min", void 0);
exports.AdministratorOrderByWithAggregationInput = AdministratorOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AdministratorOrderByWithAggregationInput", {})
], AdministratorOrderByWithAggregationInput);
