import { AdministratorOrderByWithRelationInput } from "../../../inputs/AdministratorOrderByWithRelationInput";
import { AdministratorWhereInput } from "../../../inputs/AdministratorWhereInput";
import { AdministratorWhereUniqueInput } from "../../../inputs/AdministratorWhereUniqueInput";
export declare class AggregateAdministratorArgs {
    where?: AdministratorWhereInput | undefined;
    orderBy?: AdministratorOrderByWithRelationInput[] | undefined;
    cursor?: AdministratorWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
