"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableWhereInput_1 = require("../inputs/TableWhereInput");
let TableListRelationFilter = class TableListRelationFilter {
    every;
    some;
    none;
};
exports.TableListRelationFilter = TableListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereInput_1.TableWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableWhereInput_1.TableWhereInput)
], TableListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereInput_1.TableWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableWhereInput_1.TableWhereInput)
], TableListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereInput_1.TableWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableWhereInput_1.TableWhereInput)
], TableListRelationFilter.prototype, "none", void 0);
exports.TableListRelationFilter = TableListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("TableListRelationFilter", {})
], TableListRelationFilter);
