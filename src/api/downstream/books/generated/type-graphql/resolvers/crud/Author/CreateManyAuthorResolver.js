"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAuthorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyAuthorArgs_1 = require("./args/CreateManyAuthorArgs");
const Author_1 = require("../../../models/Author");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyAuthorResolver = class CreateManyAuthorResolver {
    async createManyAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyAuthorResolver = CreateManyAuthorResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAuthorArgs_1.CreateManyAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyAuthorResolver.prototype, "createManyAuthor", null);
exports.CreateManyAuthorResolver = CreateManyAuthorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Author_1.Author)
], CreateManyAuthorResolver);
