"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTableResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTableArgs_1 = require("./args/AggregateTableArgs");
const Table_1 = require("../../../models/Table");
const AggregateTable_1 = require("../../outputs/AggregateTable");
const helpers_1 = require("../../../helpers");
let AggregateTableResolver = class AggregateTableResolver {
    async aggregateTable(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).table.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateTableResolver = AggregateTableResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTable_1.AggregateTable, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTableArgs_1.AggregateTableArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateTableResolver.prototype, "aggregateTable", null);
exports.AggregateTableResolver = AggregateTableResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Table_1.Table)
], AggregateTableResolver);
