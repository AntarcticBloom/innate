"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FieldCountFieldAnnotationsArgs_1 = require("./args/FieldCountFieldAnnotationsArgs");
let FieldCount = class FieldCount {
    fieldAnnotations;
    getFieldAnnotations(root, args) {
        return root.fieldAnnotations;
    }
};
exports.FieldCount = FieldCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "fieldAnnotations",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [FieldCount, FieldCountFieldAnnotationsArgs_1.FieldCountFieldAnnotationsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], FieldCount.prototype, "getFieldAnnotations", null);
exports.FieldCount = FieldCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("FieldCount", {})
], FieldCount);
