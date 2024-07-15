import type { GraphQLResolveInfo } from "graphql";
import { CreateOneFieldArgs } from "./args/CreateOneFieldArgs";
import { Field } from "../../../models/Field";
export declare class CreateOneFieldResolver {
    createOneField(ctx: any, info: GraphQLResolveInfo, args: CreateOneFieldArgs): Promise<Field>;
}
