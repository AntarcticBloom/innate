"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyBookResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyBookArgs_1 = require("./args/FindManyBookArgs");
const Book_1 = require("../../../models/Book");
const helpers_1 = require("../../../helpers");
let FindManyBookResolver = class FindManyBookResolver {
    async books(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).book.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyBookResolver = FindManyBookResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Book_1.Book], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyBookArgs_1.FindManyBookArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyBookResolver.prototype, "books", null);
exports.FindManyBookResolver = FindManyBookResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Book_1.Book)
], FindManyBookResolver);
