import { AdministratorOrderByWithRelationInput } from "../../../inputs/AdministratorOrderByWithRelationInput";
import { AdministratorWhereInput } from "../../../inputs/AdministratorWhereInput";
import { AdministratorWhereUniqueInput } from "../../../inputs/AdministratorWhereUniqueInput";
export declare class FindFirstAdministratorArgs {
    where?: AdministratorWhereInput | undefined;
    orderBy?: AdministratorOrderByWithRelationInput[] | undefined;
    cursor?: AdministratorWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "hash" | "salt" | "magicLinkToken" | "email" | "banned" | "username" | "verified" | "createdAt" | "updatedAt"> | undefined;
}
