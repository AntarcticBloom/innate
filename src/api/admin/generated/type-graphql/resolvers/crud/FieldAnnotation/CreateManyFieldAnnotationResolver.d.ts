import type { GraphQLResolveInfo } from "graphql";
import { CreateManyFieldAnnotationArgs } from "./args/CreateManyFieldAnnotationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyFieldAnnotationResolver {
    createManyFieldAnnotation(ctx: any, info: GraphQLResolveInfo, args: CreateManyFieldAnnotationArgs): Promise<AffectedRowsOutput>;
}
