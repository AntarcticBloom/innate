"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBookAuthorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateBookAuthorArgs_1 = require("./args/AggregateBookAuthorArgs");
const BookAuthor_1 = require("../../../models/BookAuthor");
const AggregateBookAuthor_1 = require("../../outputs/AggregateBookAuthor");
const helpers_1 = require("../../../helpers");
let AggregateBookAuthorResolver = class AggregateBookAuthorResolver {
    async aggregateBookAuthor(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookAuthor.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateBookAuthorResolver = AggregateBookAuthorResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateBookAuthor_1.AggregateBookAuthor, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateBookAuthorArgs_1.AggregateBookAuthorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateBookAuthorResolver.prototype, "aggregateBookAuthor", null);
exports.AggregateBookAuthorResolver = AggregateBookAuthorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BookAuthor_1.BookAuthor)
], AggregateBookAuthorResolver);
