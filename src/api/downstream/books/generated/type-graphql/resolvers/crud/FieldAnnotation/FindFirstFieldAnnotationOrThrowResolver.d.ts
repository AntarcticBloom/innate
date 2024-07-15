import type { GraphQLResolveInfo } from "graphql";
import { FindFirstFieldAnnotationOrThrowArgs } from "./args/FindFirstFieldAnnotationOrThrowArgs";
import { FieldAnnotation } from "../../../models/FieldAnnotation";
export declare class FindFirstFieldAnnotationOrThrowResolver {
    findFirstFieldAnnotationOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstFieldAnnotationOrThrowArgs): Promise<FieldAnnotation | null>;
}
