"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneBookAuthorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneBookAuthorArgs_1 = require("./args/CreateOneBookAuthorArgs");
const BookAuthor_1 = require("../../../models/BookAuthor");
const helpers_1 = require("../../../helpers");
let CreateOneBookAuthorResolver = class CreateOneBookAuthorResolver {
    async createOneBookAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bookAuthor.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneBookAuthorResolver = CreateOneBookAuthorResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => BookAuthor_1.BookAuthor, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneBookAuthorArgs_1.CreateOneBookAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneBookAuthorResolver.prototype, "createOneBookAuthor", null);
exports.CreateOneBookAuthorResolver = CreateOneBookAuthorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BookAuthor_1.BookAuthor)
], CreateOneBookAuthorResolver);
