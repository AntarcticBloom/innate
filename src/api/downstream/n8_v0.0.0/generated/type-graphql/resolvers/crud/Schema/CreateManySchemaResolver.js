"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManySchemaResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManySchemaArgs_1 = require("./args/CreateManySchemaArgs");
const Schema_1 = require("../../../models/Schema");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManySchemaResolver = class CreateManySchemaResolver {
    async createManySchema(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).schema.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManySchemaResolver = CreateManySchemaResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySchemaArgs_1.CreateManySchemaArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManySchemaResolver.prototype, "createManySchema", null);
exports.CreateManySchemaResolver = CreateManySchemaResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Schema_1.Schema)
], CreateManySchemaResolver);
