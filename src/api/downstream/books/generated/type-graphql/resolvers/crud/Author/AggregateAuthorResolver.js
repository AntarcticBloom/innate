"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAuthorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateAuthorArgs_1 = require("./args/AggregateAuthorArgs");
const Author_1 = require("../../../models/Author");
const AggregateAuthor_1 = require("../../outputs/AggregateAuthor");
const helpers_1 = require("../../../helpers");
let AggregateAuthorResolver = class AggregateAuthorResolver {
    async aggregateAuthor(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).author.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateAuthorResolver = AggregateAuthorResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAuthor_1.AggregateAuthor, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAuthorArgs_1.AggregateAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateAuthorResolver.prototype, "aggregateAuthor", null);
exports.AggregateAuthorResolver = AggregateAuthorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Author_1.Author)
], AggregateAuthorResolver);
