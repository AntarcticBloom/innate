"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevokedRefreshTokenOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let RevokedRefreshTokenOrderByWithRelationInput = class RevokedRefreshTokenOrderByWithRelationInput {
    id;
    value;
    actualExpiration;
};
exports.RevokedRefreshTokenOrderByWithRelationInput = RevokedRefreshTokenOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RevokedRefreshTokenOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RevokedRefreshTokenOrderByWithRelationInput.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RevokedRefreshTokenOrderByWithRelationInput.prototype, "actualExpiration", void 0);
exports.RevokedRefreshTokenOrderByWithRelationInput = RevokedRefreshTokenOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RevokedRefreshTokenOrderByWithRelationInput", {})
], RevokedRefreshTokenOrderByWithRelationInput);
