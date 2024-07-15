"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SchemaCountTablesArgs_1 = require("./args/SchemaCountTablesArgs");
let SchemaCount = class SchemaCount {
    tables;
    getTables(root, args) {
        return root.tables;
    }
};
exports.SchemaCount = SchemaCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "tables",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [SchemaCount, SchemaCountTablesArgs_1.SchemaCountTablesArgs]),
    tslib_1.__metadata("design:returntype", Number)
], SchemaCount.prototype, "getTables", null);
exports.SchemaCount = SchemaCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SchemaCount", {})
], SchemaCount);
