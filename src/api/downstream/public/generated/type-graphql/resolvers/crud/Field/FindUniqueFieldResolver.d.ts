import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueFieldArgs } from "./args/FindUniqueFieldArgs";
import { Field } from "../../../models/Field";
export declare class FindUniqueFieldResolver {
    field(ctx: any, info: GraphQLResolveInfo, args: FindUniqueFieldArgs): Promise<Field | null>;
}
