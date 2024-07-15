"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableCountFieldAnnotationsArgs_1 = require("./args/TableCountFieldAnnotationsArgs");
const TableCountFieldsArgs_1 = require("./args/TableCountFieldsArgs");
let TableCount = class TableCount {
    fields;
    fieldAnnotations;
    getFields(root, args) {
        return root.fields;
    }
    getFieldAnnotations(root, args) {
        return root.fieldAnnotations;
    }
};
exports.TableCount = TableCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "fields",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [TableCount, TableCountFieldsArgs_1.TableCountFieldsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], TableCount.prototype, "getFields", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "fieldAnnotations",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [TableCount, TableCountFieldAnnotationsArgs_1.TableCountFieldAnnotationsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], TableCount.prototype, "getFieldAnnotations", null);
exports.TableCount = TableCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TableCount", {})
], TableCount);
