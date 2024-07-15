"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AuthorMaxAggregate = class AuthorMaxAggregate {
    id;
    name;
    createdAt;
    updatedAt;
};
exports.AuthorMaxAggregate = AuthorMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AuthorMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AuthorMaxAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AuthorMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AuthorMaxAggregate.prototype, "updatedAt", void 0);
exports.AuthorMaxAggregate = AuthorMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AuthorMaxAggregate", {})
], AuthorMaxAggregate);
