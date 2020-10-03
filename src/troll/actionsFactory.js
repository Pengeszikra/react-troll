export const kebabToCamelCase = label => label
  .split('-')
  .reduce((coll, str) => coll 
    ? coll + str.slice(0,1).toUpperCase() + str.slice(1) 
    : str
  );

export const actionFactory = (converter = p => p) => {
  const actionSet = {};
  const action = type => {
    const actionName = type |> converter;
    actionSet[actionName] = payload => ({type, payload});
    return type;
  };
  return [() => actionSet, action];
};