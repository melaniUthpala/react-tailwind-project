import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateUserData {
  user_insert: User_Key;
}

export interface DeploymentTarget_Key {
  id: UUIDString;
  __typename?: 'DeploymentTarget_Key';
}

export interface GetProjectsData {
  projects: ({
    id: UUIDString;
    name: string;
  } & Project_Key)[];
}

export interface InitializationLog_Key {
  id: UUIDString;
  __typename?: 'InitializationLog_Key';
}

export interface ListPublicProjectsData {
  projects: ({
    id: UUIDString;
    name: string;
    projectId: string;
  } & Project_Key)[];
}

export interface Project_Key {
  id: UUIDString;
  __typename?: 'Project_Key';
}

export interface ServiceConfiguration_Key {
  id: UUIDString;
  __typename?: 'ServiceConfiguration_Key';
}

export interface UpdateProjectNameData {
  project_update?: Project_Key | null;
}

export interface UpdateProjectNameVariables {
  id: UUIDString;
  name: string;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateUserData, undefined>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(): MutationPromise<CreateUserData, undefined>;
export function createUser(dc: DataConnect): MutationPromise<CreateUserData, undefined>;

interface GetProjectsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetProjectsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetProjectsData, undefined>;
  operationName: string;
}
export const getProjectsRef: GetProjectsRef;

export function getProjects(): QueryPromise<GetProjectsData, undefined>;
export function getProjects(dc: DataConnect): QueryPromise<GetProjectsData, undefined>;

interface UpdateProjectNameRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateProjectNameVariables): MutationRef<UpdateProjectNameData, UpdateProjectNameVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateProjectNameVariables): MutationRef<UpdateProjectNameData, UpdateProjectNameVariables>;
  operationName: string;
}
export const updateProjectNameRef: UpdateProjectNameRef;

export function updateProjectName(vars: UpdateProjectNameVariables): MutationPromise<UpdateProjectNameData, UpdateProjectNameVariables>;
export function updateProjectName(dc: DataConnect, vars: UpdateProjectNameVariables): MutationPromise<UpdateProjectNameData, UpdateProjectNameVariables>;

interface ListPublicProjectsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPublicProjectsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListPublicProjectsData, undefined>;
  operationName: string;
}
export const listPublicProjectsRef: ListPublicProjectsRef;

export function listPublicProjects(): QueryPromise<ListPublicProjectsData, undefined>;
export function listPublicProjects(dc: DataConnect): QueryPromise<ListPublicProjectsData, undefined>;

