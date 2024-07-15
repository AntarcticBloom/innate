"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldCreateManyTableInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let FieldCreateManyTableInput = class FieldCreateManyTableInput {
    id;
    name;
    type;
    createdAt;
    updatedAt;
};
exports.FieldCreateManyTableInput = FieldCreateManyTableInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], FieldCreateManyTableInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldCreateManyTableInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], FieldCreateManyTableInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FieldCreateManyTableInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], FieldCreateManyTableInput.prototype, "updatedAt", void 0);
exports.FieldCreateManyTableInput = FieldCreateManyTableInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FieldCreateManyTableInput", {})
], FieldCreateManyTableInput);
