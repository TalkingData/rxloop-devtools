# rxloop-devtools
https://github.com/TalkingData/rxloop/tree/master/packages/devtools

> the rxloop devtools plugin

## Usage

```javascript
import rxloop from '@rxloop/core';
import devtools from '@rxloop/devtools';

const app = rxloop({
  plugins: [
    devtools({
      blacklist: [ 'loading' ]
    })
  ],
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

