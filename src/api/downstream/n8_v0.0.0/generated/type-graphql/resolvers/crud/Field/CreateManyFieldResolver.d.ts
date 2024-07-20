import type { GraphQLResolveInfo } from "graphql";
import { CreateManyFieldArgs } from "./args/CreateManyFieldArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyFieldResolver {
    createManyField(ctx: any, info: GraphQLResolveInfo, args: CreateManyFieldArgs): Promise<AffectedRowsOutput>;
}
