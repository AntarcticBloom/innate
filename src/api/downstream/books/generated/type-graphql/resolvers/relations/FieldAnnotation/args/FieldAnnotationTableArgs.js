"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldAnnotationTableArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableWhereInput_1 = require("../../../inputs/TableWhereInput");
let FieldAnnotationTableArgs = class FieldAnnotationTableArgs {
    where;
};
exports.FieldAnnotationTableArgs = FieldAnnotationTableArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereInput_1.TableWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TableWhereInput_1.TableWhereInput)
], FieldAnnotationTableArgs.prototype, "where", void 0);
exports.FieldAnnotationTableArgs = FieldAnnotationTableArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FieldAnnotationTableArgs);
