import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IComments } from '../../models/IComments'
import { IFilms } from '../../models/IFilms'

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
	tagTypes: ['api'],
	refetchOnFocus: true,
	endpoints: build => ({
		fetchNewSeries: build.query<IFilms[], string>({
			query: () => ({
				url: '/series?_limit=12',
				params: {
					q: 2022,
				},
			}),
		}),
		fetchAllCartoons: build.query<IFilms[], string>({
			query: () => ({
				url: '/cartoons',
			}),
			providesTags: result => ['api'],
		}),
		fetchAllFilms: build.query<IFilms[], string>({
			query: () => ({
				url: '/films',
			}),
			providesTags: result => ['api'],
		}),
		fetchCarouselFilms: build.query<IFilms[], string>({
			query: () => ({
				url: '/films?_limit=3',
			}),
			providesTags: result => ['api'],
		}),
		fetchNewFilms: build.query<IFilms[], string>({
			query: () => ({
				url: '/films?_limit=12',
				params: {
					q: 2022,
				},
			}),
			providesTags: result => ['api'],
		}),
		fetchNewCartoons: build.query<IFilms[], string>({
			query: () => ({
				url: '/cartoons?_limit=12',
				params: {
					q: 2022,
				},
			}),
			providesTags: result => ['api'],
		}),
		fetchFilmInfo: build.query<IFilms, number>({
			query: (filmId: number) => ({
				url: `/films/${filmId}`,
			}),
		}),
		fetchSerialInfo: build.query<IFilms, number>({
			query: (serialId: number) => ({
				url: `/series/${serialId}`,
			}),
		}),
		fetchCartoonInfo: build.query<IFilms, number>({
			query: (cartoonId: number) => ({
				url: `/cartoons/${cartoonId}`,
			}),
		}),
		fetchSimilarFilms: build.query<IFilms[], any>({
			query: (film: any) => ({
				url: `/films?id_ne=${film?.id}`,
				params: {
					q: film?.kind[0],
					s: film?.kind[1],
					f: film?.kind[2],
				},
			}),
		}),
		fetchFilmComments: build.query<IComments[], any>({
			query: (id: any) => ({
				url: `/films/${id}/comments`,
			}),
		}),
		fetchFilmCommentsGood: build.query<IComments[], any>({
			query: (id: any) => ({
				url: `/films/${id}/comments`,
				params: {
					q: 'good',
				},
			}),
		}),
		fetchFilmCommentsBad: build.query<IComments[], any>({
			query: (id: any) => ({
				url: `/films/${id}/comments`,
				params: {
					q: 'bad',
				},
			}),
		}),
		fetchFilmCommentsNone: build.query<IComments[], any>({
			query: (id: any) => ({
				url: `/films/${id}/comments`,
				params: {
					q: 'none',
				},
			}),
		}),
		searchFilms: build.query<IFilms[], string>({
			query: (film: string) => ({
				url: '/films',
				params: {
					q: film,
				},
			}),
		}),
	}),
})
