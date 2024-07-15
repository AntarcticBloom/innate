"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SchemaMaxAggregate = class SchemaMaxAggregate {
    id;
    name;
    tracked;
    isNewestProductionVersion;
    createdAt;
    updatedAt;
};
exports.SchemaMaxAggregate = SchemaMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaMaxAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SchemaMaxAggregate.prototype, "tracked", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SchemaMaxAggregate.prototype, "isNewestProductionVersion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SchemaMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SchemaMaxAggregate.prototype, "updatedAt", void 0);
exports.SchemaMaxAggregate = SchemaMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SchemaMaxAggregate", {})
], SchemaMaxAggregate);
