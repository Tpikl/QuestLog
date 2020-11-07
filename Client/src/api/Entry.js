import axios from 'axios';
import { API_BASE } from './Api';

const ENTRY_URL = `${API_BASE}/entry`;

export async function GetEntries() {
    return axios.get(`${ENTRY_URL}/getbyuserid/DCB35393-671D-4AF5-86F0-3F88A62D7FD0`);
}