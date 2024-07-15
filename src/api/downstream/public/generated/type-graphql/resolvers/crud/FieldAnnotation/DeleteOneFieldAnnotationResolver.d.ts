import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneFieldAnnotationArgs } from "./args/DeleteOneFieldAnnotationArgs";
import { FieldAnnotation } from "../../../models/FieldAnnotation";
export declare class DeleteOneFieldAnnotationResolver {
    deleteOneFieldAnnotation(ctx: any, info: GraphQLResolveInfo, args: DeleteOneFieldAnnotationArgs): Promise<FieldAnnotation | null>;
}
