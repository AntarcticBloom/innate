import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueFieldOrThrowArgs } from "./args/FindUniqueFieldOrThrowArgs";
import { Field } from "../../../models/Field";
export declare class FindUniqueFieldOrThrowResolver {
    getField(ctx: any, info: GraphQLResolveInfo, args: FindUniqueFieldOrThrowArgs): Promise<Field | null>;
}
