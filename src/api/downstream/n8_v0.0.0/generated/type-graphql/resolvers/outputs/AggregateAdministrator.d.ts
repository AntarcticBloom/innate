import { AdministratorCountAggregate } from "../outputs/AdministratorCountAggregate";
import { AdministratorMaxAggregate } from "../outputs/AdministratorMaxAggregate";
import { AdministratorMinAggregate } from "../outputs/AdministratorMinAggregate";
export declare class AggregateAdministrator {
    _count: AdministratorCountAggregate | null;
    _min: AdministratorMinAggregate | null;
    _max: AdministratorMaxAggregate | null;
}
