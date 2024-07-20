import type { GraphQLResolveInfo } from "graphql";
import { CreateOneFieldAnnotationArgs } from "./args/CreateOneFieldAnnotationArgs";
import { FieldAnnotation } from "../../../models/FieldAnnotation";
export declare class CreateOneFieldAnnotationResolver {
    createOneFieldAnnotation(ctx: any, info: GraphQLResolveInfo, args: CreateOneFieldAnnotationArgs): Promise<FieldAnnotation>;
}
