"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneFieldResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneFieldArgs_1 = require("./args/CreateOneFieldArgs");
const Field_1 = require("../../../models/Field");
const helpers_1 = require("../../../helpers");
let CreateOneFieldResolver = class CreateOneFieldResolver {
    async createOneField(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).field.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneFieldResolver = CreateOneFieldResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Field_1.Field, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneFieldArgs_1.CreateOneFieldArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneFieldResolver.prototype, "createOneField", null);
exports.CreateOneFieldResolver = CreateOneFieldResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Field_1.Field)
], CreateOneFieldResolver);
