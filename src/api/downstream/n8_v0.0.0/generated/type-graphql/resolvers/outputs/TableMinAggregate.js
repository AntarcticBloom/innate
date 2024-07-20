"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TableMinAggregate = class TableMinAggregate {
    id;
    schemaId;
    name;
    modelName;
    createdAt;
    updatedAt;
};
exports.TableMinAggregate = TableMinAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TableMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TableMinAggregate.prototype, "schemaId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TableMinAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TableMinAggregate.prototype, "modelName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TableMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TableMinAggregate.prototype, "updatedAt", void 0);
exports.TableMinAggregate = TableMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TableMinAggregate", {})
], TableMinAggregate);
