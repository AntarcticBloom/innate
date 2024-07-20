import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneFieldArgs } from "./args/DeleteOneFieldArgs";
import { Field } from "../../../models/Field";
export declare class DeleteOneFieldResolver {
    deleteOneField(ctx: any, info: GraphQLResolveInfo, args: DeleteOneFieldArgs): Promise<Field | null>;
}
