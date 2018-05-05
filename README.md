## React Loaders Spinners

A component-based loaders/spinners React library, built with [`styled-components`](https://github.com/styled-components/styled-components).

**Demo**

Check out and play around with the examples [here](https://codesandbox.io/s/2prqo9p5wn).

### Why should you use this?

If you need highly customizable loader(s) or spinner(s) in your React project.

## Getting started

```
yarn add react-loaders-spinners
```
or
```
npm install react-loaders-spinners
```

Note that `react-loaders-spinners` lists `styled-components` as a `peerDependency`, therefore it expects you to have `styled-components` already installed in your project.

```javascript
import React from 'react';
import { BounceyLoader } from 'react-loaders-spinners';

const App = () => (
  <BounceyLoader />
)
```

## Available Props/Defaults/Types

**Standard Default Props For ALL Loaders**
|     prop     |  default  |
| ------------ | --------- |
| pColor:str   |  #555     |
| loading:bool | true *req |

|  Loader/Spinner  | height:int | width:int | sColor:str | spaceBetween:int | thickness:int |
| ---------------- | ---------- | --------- | ---------- | ---------------- | ------------- |
|    PulseLoader   |     100    |    100    |   #f3f3f3  |                  |               |
|   BounceyLoader  |     20     |    20     |            |        20        |               |
|    SpinLoader    |     50     |    50     |   #f3f3f3  |                  |      10       |
|    BoxLoader     |     100    |    100    |            |                  |               |
|   JamminLoader   |            |           |            |                  |      10       |

```javascript
  // props example
  <PulseLoader 
    width={200}
    height={200}
    pColor='dodgerblue' // can use hex or named color
    sColor='#FF711E' // can use hex or named color
  />
```
## Contributing

I'd love to get some feedback and contribution from the community. Feel free to file an issue, create a pull request, or leave some feedback as to how you think this project can be improved! More loaders/spinners to be added soon!