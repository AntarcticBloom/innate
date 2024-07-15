"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyBookAuthorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyBookAuthorArgs_1 = require("./args/CreateManyBookAuthorArgs");
const BookAuthor_1 = require("../../../models/BookAuthor");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyBookAuthorResolver = class CreateManyBookAuthorResolver {
    async createManyBookAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookAuthor.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyBookAuthorResolver = CreateManyBookAuthorResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyBookAuthorArgs_1.CreateManyBookAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyBookAuthorResolver.prototype, "createManyBookAuthor", null);
exports.CreateManyBookAuthorResolver = CreateManyBookAuthorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BookAuthor_1.BookAuthor)
], CreateManyBookAuthorResolver);
