"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTableResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueTableArgs_1 = require("./args/FindUniqueTableArgs");
const Table_1 = require("../../../models/Table");
const helpers_1 = require("../../../helpers");
let FindUniqueTableResolver = class FindUniqueTableResolver {
    async table(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).table.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueTableResolver = FindUniqueTableResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Table_1.Table, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTableArgs_1.FindUniqueTableArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueTableResolver.prototype, "table", null);
exports.FindUniqueTableResolver = FindUniqueTableResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Table_1.Table)
], FindUniqueTableResolver);
