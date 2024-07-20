import type { GraphQLResolveInfo } from "graphql";
import { CreateManyTableArgs } from "./args/CreateManyTableArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTableResolver {
    createManyTable(ctx: any, info: GraphQLResolveInfo, args: CreateManyTableArgs): Promise<AffectedRowsOutput>;
}
