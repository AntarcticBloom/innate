import { AdministratorOrderByWithAggregationInput } from "../../../inputs/AdministratorOrderByWithAggregationInput";
import { AdministratorScalarWhereWithAggregatesInput } from "../../../inputs/AdministratorScalarWhereWithAggregatesInput";
import { AdministratorWhereInput } from "../../../inputs/AdministratorWhereInput";
export declare class GroupByAdministratorArgs {
    where?: AdministratorWhereInput | undefined;
    orderBy?: AdministratorOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "hash" | "salt" | "magicLinkToken" | "email" | "banned" | "username" | "verified" | "createdAt" | "updatedAt">;
    having?: AdministratorScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
