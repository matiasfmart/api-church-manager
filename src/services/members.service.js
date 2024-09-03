import { executeStoredProcedure } from './db.service.js';
import { STORED_PROCEDURES as SP } from '../queries/members.queries.js'

export const fetchAllMembers = async () => {
    return executeStoredProcedure(SP.GET_ALL_MEMBERS);
};

export const fetchCellOptions = async () => {
    return executeStoredProcedure(SP.GET_CELL_OPTIONS);
};

export const fetchAreaOptions = async () => {
    return executeStoredProcedure(SP.GET_AREA_OPTIONS);
};