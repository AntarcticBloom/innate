import type { GraphQLResolveInfo } from "graphql";
import { FindFirstFieldArgs } from "./args/FindFirstFieldArgs";
import { Field } from "../../../models/Field";
export declare class FindFirstFieldResolver {
    findFirstField(ctx: any, info: GraphQLResolveInfo, args: FindFirstFieldArgs): Promise<Field | null>;
}
