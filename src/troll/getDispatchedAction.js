export const getDispatchedActions = (actionSet, dispatch) => Object.keys(actionSet).reduce(
  (collector, key) => ({...collector, [key]: payload => actionSet[key](payload) |> dispatch })
, {});