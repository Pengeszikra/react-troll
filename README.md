# react-troll
react useReducer organizator

![react-troll-logo](./doc/react-troll-logo-small.png)

*"the troll eated dispatch"*

React best state manegement hook is useReducer, without this helper library you can use very well.
After application complexity groving in time, this troll woll be handy. Because give a simple controll to you!

## troll : deconstruction

As other hooks use power of array decunstruction, react-troll also give naming to your hand:
because useTroll return with state and setOfActions - action creator with dispatch - array:
```jsx
  const [state, setOfActions] = useTroll(reducer, init, actionsLookup);
```
But when you dosn't deconstruct immedietley, instead:
```jsx
  const troll = useTroll(reducer, init, actionsLookup);

  return <InteractiveComponent troll={troll} />
```
Then you know your component reach your state and actions which they need.
Also can pass troll to down her childrens.
```jsx
export const InteractiveComponent = ({troll:[{a, b, c}, {aAction, bAction}]}) => {
  useEffect(_ => bAction,[b]);
  return <div onClick={_ => aAction(c)}>{a}</div>;
}
```

## For example:

```jsx
import React from 'react';
import {useTroll} from 'react-troll';
import {fooReducer, fooInit, fooActionSet} from 'fooTroll';

const troll = useTroll(fooReducer, fooInit, fooActionSet);

return (
  <main>
    <FooNavigation troll={troll} />
    <FooApplication troll={troll} title="foo item set" className="foo-application" />
  </main>
);
```

```jsx
import {actionFactory, kebabToCamelCase} from 'react-troll';

export const [getActionsLookup, action] = actionFactory(kebabToCamelCase);
export const 
  GENERATE_NEW_ITEM = action('generate-new-item'),
  REMOVE_ITEM = action('remove-item')
;

export fooInit = {
  items: [];
}

const randomId = _ => Math.random().toString(32).slice(-8);

export const fooReducer = (state, {type, payload}) => {
  switch (type) {
    case GENERATE_NEW_ITEM: 
      const id = randomId();
      return {...state, items:[...state.items, {id, label: `my id is: ${id}`}]};
    case REMOVE_ITEM: 
      return {...state, 
        items: state.items.filter(({id}) => id != payload);
      };
    default: return state;
  }
}
```

```jsx
import React from 'react';

export const FooApplication = ({troll, title, ...props}) => {
  const [state, actions] = troll;
  const {items} = state;
  const {generateNewItem, removeItem} = actions;

  return (
    <section {...props}>
      <h1>{title}</h1>
      <button onCLick={ _ => generateNewItem}>add item</button>
      {items.map(({id, label}) => <span key={id}>{label} <span onClick={_ => removeItem(id)}>X</span></span>)}
    </section>
  )
};
```

*coming: react-troll-saga*