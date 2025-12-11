import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'reacttailwind',
  location: 'us-east4'
};

export const createUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser');
}
createUserRef.operationName = 'CreateUser';

export function createUser(dc) {
  return executeMutation(createUserRef(dc));
}

export const getProjectsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetProjects');
}
getProjectsRef.operationName = 'GetProjects';

export function getProjects(dc) {
  return executeQuery(getProjectsRef(dc));
}

export const updateProjectNameRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateProjectName', inputVars);
}
updateProjectNameRef.operationName = 'UpdateProjectName';

export function updateProjectName(dcOrVars, vars) {
  return executeMutation(updateProjectNameRef(dcOrVars, vars));
}

export const listPublicProjectsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPublicProjects');
}
listPublicProjectsRef.operationName = 'ListPublicProjects';

export function listPublicProjects(dc) {
  return executeQuery(listPublicProjectsRef(dc));
}

