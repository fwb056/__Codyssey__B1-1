export const STATE = {
    theme: localStorage.getItem('theme') || 'light',
    repos: [],
    isLoading: false,
    error: null
};