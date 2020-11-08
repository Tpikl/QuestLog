import axios from 'axios';
import { API_BASE } from './Api';

const ENTRY_URL = `${API_BASE}/entry`;

// Base API Methods
export async function GetEntry(id) {
    return axios.get(`${ENTRY_URL}/${id}`);
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


// Other Methods
export async function GetEntriesByUserId(id) {
    return axios.get(`${ENTRY_URL}/getbyuserid/${id}`);
}