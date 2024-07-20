"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministratorMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AdministratorMaxOrderByAggregateInput = class AdministratorMaxOrderByAggregateInput {
    id;
    email;
    banned;
    username;
    verified;
    createdAt;
    updatedAt;
};
exports.AdministratorMaxOrderByAggregateInput = AdministratorMaxOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorMaxOrderByAggregateInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorMaxOrderByAggregateInput.prototype, "banned", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorMaxOrderByAggregateInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorMaxOrderByAggregateInput.prototype, "verified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorMaxOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorMaxOrderByAggregateInput.prototype, "updatedAt", void 0);
exports.AdministratorMaxOrderByAggregateInput = AdministratorMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AdministratorMaxOrderByAggregateInput", {})
], AdministratorMaxOrderByAggregateInput);
