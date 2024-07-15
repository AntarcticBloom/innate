"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevokedRefreshTokenMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RevokedRefreshTokenMaxAggregate = class RevokedRefreshTokenMaxAggregate {
    id;
    value;
    actualExpiration;
};
exports.RevokedRefreshTokenMaxAggregate = RevokedRefreshTokenMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RevokedRefreshTokenMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RevokedRefreshTokenMaxAggregate.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RevokedRefreshTokenMaxAggregate.prototype, "actualExpiration", void 0);
exports.RevokedRefreshTokenMaxAggregate = RevokedRefreshTokenMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RevokedRefreshTokenMaxAggregate", {})
], RevokedRefreshTokenMaxAggregate);
