const origin = window.location.origin.split(':');
const API_HOST = `${origin[0]}s:${origin[1]}`;   // Remove port
const API_PORT = '5001';
export const API_BASE = `${API_HOST}:${API_PORT}/api`;