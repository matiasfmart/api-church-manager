import { fetchAllMembers, fetchCellOptions, fetchAreaOptions } from '../services/members.service.js';
import { handleRequest } from './controllerHelpers.js';

export const getAllMembers = handleRequest(fetchAllMembers);
export const getCellOptions = handleRequest(fetchCellOptions);
export const getAreaOptions = handleRequest(fetchAreaOptions);
