import axios from 'axios';
import { API_BASE } from './Api';

const ENTRY_URL = `${API_BASE}/entry`;

export async function GetEntries() {
    return axios.get(`${ENTRY_URL}/getbyuserid/DCB35393-671D-4AF5-86F0-3F88A62D7FD0`);
}

export async function AddEntry(entry) {
    return axios.post(`${ENTRY_URL}`, entry);
}

export async function UpdateEntry(entry) {
    return axios.put(`${ENTRY_URL}`, entry);
}

export async function DeleteEntry(id) {
    return axios.delete(`${ENTRY_URL}/${id}`);
}