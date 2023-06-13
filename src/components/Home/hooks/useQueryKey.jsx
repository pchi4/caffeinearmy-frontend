export const useQueryKey = (key, params) => {
    return [key, ...Object.values(params)];
};
