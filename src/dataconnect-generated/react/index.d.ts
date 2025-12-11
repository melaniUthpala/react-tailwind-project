import { CreateUserData, GetProjectsData, UpdateProjectNameData, UpdateProjectNameVariables, ListPublicProjectsData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;

export function useGetProjects(options?: useDataConnectQueryOptions<GetProjectsData>): UseDataConnectQueryResult<GetProjectsData, undefined>;
export function useGetProjects(dc: DataConnect, options?: useDataConnectQueryOptions<GetProjectsData>): UseDataConnectQueryResult<GetProjectsData, undefined>;

export function useUpdateProjectName(options?: useDataConnectMutationOptions<UpdateProjectNameData, FirebaseError, UpdateProjectNameVariables>): UseDataConnectMutationResult<UpdateProjectNameData, UpdateProjectNameVariables>;
export function useUpdateProjectName(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateProjectNameData, FirebaseError, UpdateProjectNameVariables>): UseDataConnectMutationResult<UpdateProjectNameData, UpdateProjectNameVariables>;

export function useListPublicProjects(options?: useDataConnectQueryOptions<ListPublicProjectsData>): UseDataConnectQueryResult<ListPublicProjectsData, undefined>;
export function useListPublicProjects(dc: DataConnect, options?: useDataConnectQueryOptions<ListPublicProjectsData>): UseDataConnectQueryResult<ListPublicProjectsData, undefined>;
