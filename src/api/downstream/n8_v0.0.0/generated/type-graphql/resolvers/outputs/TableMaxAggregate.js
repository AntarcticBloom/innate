"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TableMaxAggregate = class TableMaxAggregate {
    id;
    schemaId;
    name;
    modelName;
    createdAt;
    updatedAt;
};
exports.TableMaxAggregate = TableMaxAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TableMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TableMaxAggregate.prototype, "schemaId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TableMaxAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TableMaxAggregate.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TableMaxAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TableMaxAggregate.prototype, "updatedAt", void 0);
exports.TableMaxAggregate = TableMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TableMaxAggregate", {})
], TableMaxAggregate);
