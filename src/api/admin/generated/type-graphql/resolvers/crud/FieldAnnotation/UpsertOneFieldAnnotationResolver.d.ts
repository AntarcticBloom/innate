import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneFieldAnnotationArgs } from "./args/UpsertOneFieldAnnotationArgs";
import { FieldAnnotation } from "../../../models/FieldAnnotation";
export declare class UpsertOneFieldAnnotationResolver {
    upsertOneFieldAnnotation(ctx: any, info: GraphQLResolveInfo, args: UpsertOneFieldAnnotationArgs): Promise<FieldAnnotation>;
}
