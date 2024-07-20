"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministratorCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AdministratorCreateManyInput = class AdministratorCreateManyInput {
    id;
    email;
    banned;
    username;
    verified;
    createdAt;
    updatedAt;
};
exports.AdministratorCreateManyInput = AdministratorCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorCreateManyInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AdministratorCreateManyInput.prototype, "banned", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AdministratorCreateManyInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AdministratorCreateManyInput.prototype, "verified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AdministratorCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AdministratorCreateManyInput.prototype, "updatedAt", void 0);
exports.AdministratorCreateManyInput = AdministratorCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AdministratorCreateManyInput", {})
], AdministratorCreateManyInput);
