import { AdministratorCountAggregate } from "../outputs/AdministratorCountAggregate";
import { AdministratorMaxAggregate } from "../outputs/AdministratorMaxAggregate";
import { AdministratorMinAggregate } from "../outputs/AdministratorMinAggregate";
export declare class AdministratorGroupBy {
    id: string;
    hash: string;
    salt: string;
    magicLinkToken: string | null;
    email: string;
    banned: boolean | null;
    username: string;
    verified: boolean | null;
    createdAt: Date;
    updatedAt: Date;
    _count: AdministratorCountAggregate | null;
    _min: AdministratorMinAggregate | null;
    _max: AdministratorMaxAggregate | null;
}
