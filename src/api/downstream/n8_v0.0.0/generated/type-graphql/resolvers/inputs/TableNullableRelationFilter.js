"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableNullableRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableWhereInput_1 = require("../inputs/TableWhereInput");
let TableNullableRelationFilter = class TableNullableRelationFilter {
    is;
    isNot;
};
exports.TableNullableRelationFilter = TableNullableRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereInput_1.TableWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableWhereInput_1.TableWhereInput)
], TableNullableRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereInput_1.TableWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableWhereInput_1.TableWhereInput)
], TableNullableRelationFilter.prototype, "isNot", void 0);
exports.TableNullableRelationFilter = TableNullableRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("TableNullableRelationFilter", {})
], TableNullableRelationFilter);
