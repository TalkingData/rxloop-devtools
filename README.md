# rxloop-devtools

> rxloop devtools plugin

## Usage

```javascript
import rxloop from '@rxloop/core';
import devtools from '@rxloop/devtools';

const app = rxloop({
  plugins: [ devtools() ],
});

app.model({
  name: 'commnet',
  state: {
    list: [],
  },
  reducers: {
    add(state) {
      state.list.push({ id: 1, txt: 'text' });
    },
  },
});

app.start();
```

