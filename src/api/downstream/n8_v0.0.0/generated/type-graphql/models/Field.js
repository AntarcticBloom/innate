"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Field = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldCount_1 = require("../resolvers/outputs/FieldCount");
let Field = class Field {
    id;
    tableId;
    name;
    type;
    createdAt;
    updatedAt;
    table;
    fieldAnnotations;
    _count;
};
exports.Field = Field;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Field.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Field.prototype, "tableId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Field.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Field.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Field.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Field.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FieldCount_1.FieldCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FieldCount_1.FieldCount)
], Field.prototype, "_count", void 0);
exports.Field = Field = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Field", {})
], Field);
