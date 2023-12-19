import { QueryClient } from '@tanstack/react-query';

// const getQueryClient = cache(() => new QueryClient());
const getQueryClient = new QueryClient();
export default getQueryClient;
