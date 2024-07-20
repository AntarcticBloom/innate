"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministratorOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AdministratorOrderByWithRelationInput = class AdministratorOrderByWithRelationInput {
    id;
    email;
    banned;
    username;
    verified;
    createdAt;
    updatedAt;
};
exports.AdministratorOrderByWithRelationInput = AdministratorOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorOrderByWithRelationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], AdministratorOrderByWithRelationInput.prototype, "banned", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorOrderByWithRelationInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], AdministratorOrderByWithRelationInput.prototype, "verified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorOrderByWithRelationInput.prototype, "updatedAt", void 0);
exports.AdministratorOrderByWithRelationInput = AdministratorOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AdministratorOrderByWithRelationInput", {})
], AdministratorOrderByWithRelationInput);
