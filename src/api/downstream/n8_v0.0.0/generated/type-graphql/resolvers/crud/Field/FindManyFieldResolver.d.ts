import type { GraphQLResolveInfo } from "graphql";
import { FindManyFieldArgs } from "./args/FindManyFieldArgs";
import { Field } from "../../../models/Field";
export declare class FindManyFieldResolver {
    fields(ctx: any, info: GraphQLResolveInfo, args: FindManyFieldArgs): Promise<Field[]>;
}
