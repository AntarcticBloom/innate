"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyFieldResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyFieldArgs_1 = require("./args/CreateManyFieldArgs");
const Field_1 = require("../../../models/Field");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyFieldResolver = class CreateManyFieldResolver {
    async createManyField(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).field.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyFieldResolver = CreateManyFieldResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyFieldArgs_1.CreateManyFieldArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyFieldResolver.prototype, "createManyField", null);
exports.CreateManyFieldResolver = CreateManyFieldResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Field_1.Field)
], CreateManyFieldResolver);
