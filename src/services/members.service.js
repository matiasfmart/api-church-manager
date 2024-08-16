import { executeQuery } from './db.service.js';
import { 
    getAllMembers as getAllMembersQuery, 
    getCellOptions as getCellOptionsQuery,
    getAreaOptions as getAreaOptionsQuery 
} from '../queries/members.queries.js';

export const fetchAllMembers = async () => {
    return executeQuery(getAllMembersQuery);
};

export const fetchCellOptions = async () => {
    return executeQuery(getCellOptionsQuery);
};

export const fetchAreaOptions = async () => {
    return executeQuery(getAreaOptionsQuery);
};
