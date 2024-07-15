import type { GraphQLResolveInfo } from "graphql";
import { CreateManyBookArgs } from "./args/CreateManyBookArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyBookResolver {
    createManyBook(ctx: any, info: GraphQLResolveInfo, args: CreateManyBookArgs): Promise<AffectedRowsOutput>;
}
