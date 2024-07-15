"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTableOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstTableOrThrowArgs_1 = require("./args/FindFirstTableOrThrowArgs");
const Table_1 = require("../../../models/Table");
const helpers_1 = require("../../../helpers");
let FindFirstTableOrThrowResolver = class FindFirstTableOrThrowResolver {
    async findFirstTableOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).table.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstTableOrThrowResolver = FindFirstTableOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Table_1.Table, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTableOrThrowArgs_1.FindFirstTableOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstTableOrThrowResolver.prototype, "findFirstTableOrThrow", null);
exports.FindFirstTableOrThrowResolver = FindFirstTableOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Table_1.Table)
], FindFirstTableOrThrowResolver);
