import type { GraphQLResolveInfo } from "graphql";
import { FindFirstFieldAnnotationArgs } from "./args/FindFirstFieldAnnotationArgs";
import { FieldAnnotation } from "../../../models/FieldAnnotation";
export declare class FindFirstFieldAnnotationResolver {
    findFirstFieldAnnotation(ctx: any, info: GraphQLResolveInfo, args: FindFirstFieldAnnotationArgs): Promise<FieldAnnotation | null>;
}
