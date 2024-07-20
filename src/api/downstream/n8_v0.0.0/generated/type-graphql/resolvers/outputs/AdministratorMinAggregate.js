"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministratorMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AdministratorMinAggregate = class AdministratorMinAggregate {
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
};
exports.AdministratorMinAggregate = AdministratorMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorMinAggregate.prototype, "hash", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorMinAggregate.prototype, "salt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorMinAggregate.prototype, "magicLinkToken", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorMinAggregate.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AdministratorMinAggregate.prototype, "banned", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorMinAggregate.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AdministratorMinAggregate.prototype, "verified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AdministratorMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AdministratorMinAggregate.prototype, "updatedAt", void 0);
exports.AdministratorMinAggregate = AdministratorMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AdministratorMinAggregate", {})
], AdministratorMinAggregate);
