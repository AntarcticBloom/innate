"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministratorGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AdministratorCountAggregate_1 = require("../outputs/AdministratorCountAggregate");
const AdministratorMaxAggregate_1 = require("../outputs/AdministratorMaxAggregate");
const AdministratorMinAggregate_1 = require("../outputs/AdministratorMinAggregate");
let AdministratorGroupBy = class AdministratorGroupBy {
    id;
    hash;
    salt;
    magicLinkToken;
    email;
    banned;
    username;
    verified;
    createdAt;
    updatedAt;
    _count;
    _min;
    _max;
};
exports.AdministratorGroupBy = AdministratorGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorGroupBy.prototype, "hash", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorGroupBy.prototype, "salt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorGroupBy.prototype, "magicLinkToken", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorGroupBy.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AdministratorGroupBy.prototype, "banned", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorGroupBy.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AdministratorGroupBy.prototype, "verified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AdministratorGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AdministratorGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdministratorCountAggregate_1.AdministratorCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdministratorCountAggregate_1.AdministratorCountAggregate)
], AdministratorGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdministratorMinAggregate_1.AdministratorMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdministratorMinAggregate_1.AdministratorMinAggregate)
], AdministratorGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AdministratorMaxAggregate_1.AdministratorMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AdministratorMaxAggregate_1.AdministratorMaxAggregate)
], AdministratorGroupBy.prototype, "_max", void 0);
exports.AdministratorGroupBy = AdministratorGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AdministratorGroupBy", {})
], AdministratorGroupBy);
