"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTableArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableUpdateInput_1 = require("../../../inputs/TableUpdateInput");
const TableWhereUniqueInput_1 = require("../../../inputs/TableWhereUniqueInput");
let UpdateOneTableArgs = class UpdateOneTableArgs {
    data;
    where;
};
exports.UpdateOneTableArgs = UpdateOneTableArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableUpdateInput_1.TableUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TableUpdateInput_1.TableUpdateInput)
], UpdateOneTableArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereUniqueInput_1.TableWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TableWhereUniqueInput_1.TableWhereUniqueInput)
], UpdateOneTableArgs.prototype, "where", void 0);
exports.UpdateOneTableArgs = UpdateOneTableArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneTableArgs);
