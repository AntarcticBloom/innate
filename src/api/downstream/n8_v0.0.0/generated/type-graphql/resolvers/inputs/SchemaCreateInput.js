"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableCreateNestedManyWithoutSchemaInput_1 = require("../inputs/TableCreateNestedManyWithoutSchemaInput");
let SchemaCreateInput = class SchemaCreateInput {
    id;
    name;
    tracked;
    baselineVersionOfSchema;
    isNewestProductionVersion;
    createdAt;
    updatedAt;
    tables;
};
exports.SchemaCreateInput = SchemaCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SchemaCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SchemaCreateInput.prototype, "tracked", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SchemaCreateInput.prototype, "baselineVersionOfSchema", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], SchemaCreateInput.prototype, "isNewestProductionVersion", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SchemaCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SchemaCreateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableCreateNestedManyWithoutSchemaInput_1.TableCreateNestedManyWithoutSchemaInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableCreateNestedManyWithoutSchemaInput_1.TableCreateNestedManyWithoutSchemaInput)
], SchemaCreateInput.prototype, "tables", void 0);
exports.SchemaCreateInput = SchemaCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SchemaCreateInput", {})
], SchemaCreateInput);
