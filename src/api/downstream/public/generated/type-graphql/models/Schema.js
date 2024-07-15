"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schema = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchemaCount_1 = require("../resolvers/outputs/SchemaCount");
let Schema = class Schema {
    id;
    name;
    tracked;
    isNewestProductionVersion;
    createdAt;
    updatedAt;
    tables;
    _count;
};
exports.Schema = Schema;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Schema.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Schema.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Schema.prototype, "tracked", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Schema.prototype, "isNewestProductionVersion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Schema.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Schema.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SchemaCount_1.SchemaCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SchemaCount_1.SchemaCount)
], Schema.prototype, "_count", void 0);
exports.Schema = Schema = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Schema", {})
], Schema);
