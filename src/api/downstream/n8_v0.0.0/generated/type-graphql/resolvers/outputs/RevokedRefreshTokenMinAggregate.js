"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevokedRefreshTokenMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RevokedRefreshTokenMinAggregate = class RevokedRefreshTokenMinAggregate {
    id;
    value;
    actualExpiration;
};
exports.RevokedRefreshTokenMinAggregate = RevokedRefreshTokenMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RevokedRefreshTokenMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RevokedRefreshTokenMinAggregate.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RevokedRefreshTokenMinAggregate.prototype, "actualExpiration", void 0);
exports.RevokedRefreshTokenMinAggregate = RevokedRefreshTokenMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RevokedRefreshTokenMinAggregate", {})
], RevokedRefreshTokenMinAggregate);
