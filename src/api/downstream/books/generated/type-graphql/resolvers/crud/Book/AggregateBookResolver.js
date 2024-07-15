"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBookResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateBookArgs_1 = require("./args/AggregateBookArgs");
const Book_1 = require("../../../models/Book");
const AggregateBook_1 = require("../../outputs/AggregateBook");
const helpers_1 = require("../../../helpers");
let AggregateBookResolver = class AggregateBookResolver {
    async aggregateBook(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).book.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateBookResolver = AggregateBookResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateBook_1.AggregateBook, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateBookArgs_1.AggregateBookArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateBookResolver.prototype, "aggregateBook", null);
exports.AggregateBookResolver = AggregateBookResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Book_1.Book)
], AggregateBookResolver);
