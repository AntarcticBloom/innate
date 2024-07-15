import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueFieldAnnotationArgs } from "./args/FindUniqueFieldAnnotationArgs";
import { FieldAnnotation } from "../../../models/FieldAnnotation";
export declare class FindUniqueFieldAnnotationResolver {
    fieldAnnotation(ctx: any, info: GraphQLResolveInfo, args: FindUniqueFieldAnnotationArgs): Promise<FieldAnnotation | null>;
}
