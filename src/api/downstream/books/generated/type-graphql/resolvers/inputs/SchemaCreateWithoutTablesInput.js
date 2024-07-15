"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaCreateWithoutTablesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SchemaCreateWithoutTablesInput = class SchemaCreateWithoutTablesInput {
    id;
    name;
    tracked;
    isNewestProductionVersion;
    createdAt;
    updatedAt;
};
exports.SchemaCreateWithoutTablesInput = SchemaCreateWithoutTablesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaCreateWithoutTablesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SchemaCreateWithoutTablesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SchemaCreateWithoutTablesInput.prototype, "tracked", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SchemaCreateWithoutTablesInput.prototype, "isNewestProductionVersion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SchemaCreateWithoutTablesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SchemaCreateWithoutTablesInput.prototype, "updatedAt", void 0);
exports.SchemaCreateWithoutTablesInput = SchemaCreateWithoutTablesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SchemaCreateWithoutTablesInput", {})
], SchemaCreateWithoutTablesInput);
