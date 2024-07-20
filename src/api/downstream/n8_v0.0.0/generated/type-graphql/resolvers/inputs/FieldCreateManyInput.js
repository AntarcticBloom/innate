"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FieldCreateManyInput = class FieldCreateManyInput {
    id;
    tableId;
    name;
    type;
    createdAt;
    updatedAt;
};
exports.FieldCreateManyInput = FieldCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldCreateManyInput.prototype, "tableId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldCreateManyInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldCreateManyInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FieldCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FieldCreateManyInput.prototype, "updatedAt", void 0);
exports.FieldCreateManyInput = FieldCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldCreateManyInput", {})
], FieldCreateManyInput);
