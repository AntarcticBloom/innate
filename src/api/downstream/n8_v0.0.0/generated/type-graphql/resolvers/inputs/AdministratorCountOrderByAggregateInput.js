"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministratorCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AdministratorCountOrderByAggregateInput = class AdministratorCountOrderByAggregateInput {
    id;
    email;
    banned;
    username;
    verified;
    createdAt;
    updatedAt;
};
exports.AdministratorCountOrderByAggregateInput = AdministratorCountOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorCountOrderByAggregateInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorCountOrderByAggregateInput.prototype, "banned", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorCountOrderByAggregateInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorCountOrderByAggregateInput.prototype, "verified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorCountOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorCountOrderByAggregateInput.prototype, "updatedAt", void 0);
exports.AdministratorCountOrderByAggregateInput = AdministratorCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AdministratorCountOrderByAggregateInput", {})
], AdministratorCountOrderByAggregateInput);
