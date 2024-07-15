import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneFieldArgs } from "./args/UpdateOneFieldArgs";
import { Field } from "../../../models/Field";
export declare class UpdateOneFieldResolver {
    updateOneField(ctx: any, info: GraphQLResolveInfo, args: UpdateOneFieldArgs): Promise<Field | null>;
}
