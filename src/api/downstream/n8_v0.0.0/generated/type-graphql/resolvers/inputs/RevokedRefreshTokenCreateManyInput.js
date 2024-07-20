"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevokedRefreshTokenCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RevokedRefreshTokenCreateManyInput = class RevokedRefreshTokenCreateManyInput {
    id;
    value;
    actualExpiration;
};
exports.RevokedRefreshTokenCreateManyInput = RevokedRefreshTokenCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RevokedRefreshTokenCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RevokedRefreshTokenCreateManyInput.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RevokedRefreshTokenCreateManyInput.prototype, "actualExpiration", void 0);
exports.RevokedRefreshTokenCreateManyInput = RevokedRefreshTokenCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RevokedRefreshTokenCreateManyInput", {})
], RevokedRefreshTokenCreateManyInput);
