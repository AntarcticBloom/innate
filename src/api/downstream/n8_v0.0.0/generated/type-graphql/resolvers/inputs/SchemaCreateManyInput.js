"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let SchemaCreateManyInput = class SchemaCreateManyInput {
    id;
    name;
    tracked;
    baselineVersionOfSchema;
    isNewestProductionVersion;
    createdAt;
    updatedAt;
};
exports.SchemaCreateManyInput = SchemaCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SchemaCreateManyInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SchemaCreateManyInput.prototype, "tracked", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaCreateManyInput.prototype, "baselineVersionOfSchema", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SchemaCreateManyInput.prototype, "isNewestProductionVersion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SchemaCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SchemaCreateManyInput.prototype, "updatedAt", void 0);
exports.SchemaCreateManyInput = SchemaCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SchemaCreateManyInput", {})
], SchemaCreateManyInput);
