import type { GraphQLResolveInfo } from "graphql";
import { FindFirstFieldOrThrowArgs } from "./args/FindFirstFieldOrThrowArgs";
import { Field } from "../../../models/Field";
export declare class FindFirstFieldOrThrowResolver {
    findFirstFieldOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstFieldOrThrowArgs): Promise<Field | null>;
}
