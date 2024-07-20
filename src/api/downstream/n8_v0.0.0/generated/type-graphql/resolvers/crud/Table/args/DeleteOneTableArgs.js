"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTableArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableWhereUniqueInput_1 = require("../../../inputs/TableWhereUniqueInput");
let DeleteOneTableArgs = class DeleteOneTableArgs {
    where;
};
exports.DeleteOneTableArgs = DeleteOneTableArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereUniqueInput_1.TableWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TableWhereUniqueInput_1.TableWhereUniqueInput)
], DeleteOneTableArgs.prototype, "where", void 0);
exports.DeleteOneTableArgs = DeleteOneTableArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneTableArgs);
