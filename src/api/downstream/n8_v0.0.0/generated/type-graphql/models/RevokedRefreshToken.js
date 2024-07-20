"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevokedRefreshToken = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RevokedRefreshToken = class RevokedRefreshToken {
    id;
    value;
    actualExpiration;
};
exports.RevokedRefreshToken = RevokedRefreshToken;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RevokedRefreshToken.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RevokedRefreshToken.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], RevokedRefreshToken.prototype, "actualExpiration", void 0);
exports.RevokedRefreshToken = RevokedRefreshToken = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RevokedRefreshToken", {})
], RevokedRefreshToken);
