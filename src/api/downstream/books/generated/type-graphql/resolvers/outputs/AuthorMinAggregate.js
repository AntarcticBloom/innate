"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AuthorMinAggregate = class AuthorMinAggregate {
    id;
    name;
    createdAt;
    updatedAt;
};
exports.AuthorMinAggregate = AuthorMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AuthorMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AuthorMinAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AuthorMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AuthorMinAggregate.prototype, "updatedAt", void 0);
exports.AuthorMinAggregate = AuthorMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AuthorMinAggregate", {})
], AuthorMinAggregate);
