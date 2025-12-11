const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'reacttailwind',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser');
}
createUserRef.operationName = 'CreateUser';
exports.createUserRef = createUserRef;

exports.createUser = function createUser(dc) {
  return executeMutation(createUserRef(dc));
};

const getProjectsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetProjects');
}
getProjectsRef.operationName = 'GetProjects';
exports.getProjectsRef = getProjectsRef;

exports.getProjects = function getProjects(dc) {
  return executeQuery(getProjectsRef(dc));
};

const updateProjectNameRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateProjectName', inputVars);
}
updateProjectNameRef.operationName = 'UpdateProjectName';
exports.updateProjectNameRef = updateProjectNameRef;

exports.updateProjectName = function updateProjectName(dcOrVars, vars) {
  return executeMutation(updateProjectNameRef(dcOrVars, vars));
};

const listPublicProjectsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPublicProjects');
}
listPublicProjectsRef.operationName = 'ListPublicProjects';
exports.listPublicProjectsRef = listPublicProjectsRef;

exports.listPublicProjects = function listPublicProjects(dc) {
  return executeQuery(listPublicProjectsRef(dc));
};
