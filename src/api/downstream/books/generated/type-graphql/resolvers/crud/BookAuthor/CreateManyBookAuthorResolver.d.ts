import type { GraphQLResolveInfo } from "graphql";
import { CreateManyBookAuthorArgs } from "./args/CreateManyBookAuthorArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyBookAuthorResolver {
    createManyBookAuthor(ctx: any, info: GraphQLResolveInfo, args: CreateManyBookAuthorArgs): Promise<AffectedRowsOutput>;
}
