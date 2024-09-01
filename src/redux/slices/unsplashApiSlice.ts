import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const accessKey = import.meta.env.VITE_UNSPLASH_API_ACESS_KEY;
// Define the type for individual image items
export type ImageItem = {
  id: number;
  urls: {
    raw: string;
  };
  color?: string; 
}

export type ApiResponse =  {
  total: number;
  totalPage: number;
  results: ImageItem[];
}
type getImagesTypes = {
  category:string;
  page: number;
} 
export const unsplashApiSlice = createApi({
  reducerPath: "unsplashApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.unsplash.com/",
  }),
  endpoints: (builder) => ({
    getImages: builder.query<ApiResponse, getImagesTypes>({
      query: ({category,page}) =>
        `search/photos?query=${category} interior design&page=${page}&per_page=20&client_id=${accessKey}`,
    }),
   
  }),
});
export const  {useGetImagesQuery} = unsplashApiSlice;