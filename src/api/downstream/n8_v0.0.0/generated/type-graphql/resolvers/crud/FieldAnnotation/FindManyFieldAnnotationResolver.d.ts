import type { GraphQLResolveInfo } from "graphql";
import { FindManyFieldAnnotationArgs } from "./args/FindManyFieldAnnotationArgs";
import { FieldAnnotation } from "../../../models/FieldAnnotation";
export declare class FindManyFieldAnnotationResolver {
    fieldAnnotations(ctx: any, info: GraphQLResolveInfo, args: FindManyFieldAnnotationArgs): Promise<FieldAnnotation[]>;
}
