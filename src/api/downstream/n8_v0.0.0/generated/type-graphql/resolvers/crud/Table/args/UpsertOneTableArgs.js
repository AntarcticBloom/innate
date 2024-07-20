"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTableArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TableCreateInput_1 = require("../../../inputs/TableCreateInput");
const TableUpdateInput_1 = require("../../../inputs/TableUpdateInput");
const TableWhereUniqueInput_1 = require("../../../inputs/TableWhereUniqueInput");
let UpsertOneTableArgs = class UpsertOneTableArgs {
    where;
    create;
    update;
};
exports.UpsertOneTableArgs = UpsertOneTableArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableWhereUniqueInput_1.TableWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TableWhereUniqueInput_1.TableWhereUniqueInput)
], UpsertOneTableArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableCreateInput_1.TableCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TableCreateInput_1.TableCreateInput)
], UpsertOneTableArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TableUpdateInput_1.TableUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TableUpdateInput_1.TableUpdateInput)
], UpsertOneTableArgs.prototype, "update", void 0);
exports.UpsertOneTableArgs = UpsertOneTableArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneTableArgs);
