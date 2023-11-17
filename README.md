# Join React
Extends the Array prototype to allow joining react elements similar to strings

## Installation
```bash
npm install @garmingo/join-react
```

## Usage
joinReact can be used by either importing the module or by importing the prototype extension directly.

### Importing the module
```typescript
import { joinReact } from '@garmingo/join-react';

const elements = [
    <div>1</div>,
    <div>2</div>,
    <div>3</div>,
];

const joinedElements = joinReact(elements, <div>Separator</div>);
```

### Importing the prototype extension
```typescript
import '@garmingo/join-react';

const elements = [
    <div>1</div>,
    <div>2</div>,
    <div>3</div>,
];

const joinedElements = elements.join(<div>Separator</div>);
```

Now `joinedElements` will be a react element containing the following:
```html
<div>1</div>
<div>Separator</div>
<div>2</div>
<div>Separator</div>
<div>3</div>
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
