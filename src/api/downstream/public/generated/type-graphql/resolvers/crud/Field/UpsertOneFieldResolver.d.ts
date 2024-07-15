import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneFieldArgs } from "./args/UpsertOneFieldArgs";
import { Field } from "../../../models/Field";
export declare class UpsertOneFieldResolver {
    upsertOneField(ctx: any, info: GraphQLResolveInfo, args: UpsertOneFieldArgs): Promise<Field>;
}
