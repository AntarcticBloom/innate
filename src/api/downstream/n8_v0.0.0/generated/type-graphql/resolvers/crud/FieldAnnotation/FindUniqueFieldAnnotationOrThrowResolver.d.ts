import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueFieldAnnotationOrThrowArgs } from "./args/FindUniqueFieldAnnotationOrThrowArgs";
import { FieldAnnotation } from "../../../models/FieldAnnotation";
export declare class FindUniqueFieldAnnotationOrThrowResolver {
    getFieldAnnotation(ctx: any, info: GraphQLResolveInfo, args: FindUniqueFieldAnnotationOrThrowArgs): Promise<FieldAnnotation | null>;
}
