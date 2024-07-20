import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneFieldAnnotationArgs } from "./args/UpdateOneFieldAnnotationArgs";
import { FieldAnnotation } from "../../../models/FieldAnnotation";
export declare class UpdateOneFieldAnnotationResolver {
    updateOneFieldAnnotation(ctx: any, info: GraphQLResolveInfo, args: UpdateOneFieldAnnotationArgs): Promise<FieldAnnotation | null>;
}
