# Transform


## Installation

```bash
npm install @axetroy/transform
```

or if you are using **yarn**(recommend)

```bash
yarn add @axetroy/transform
```

## Usage

```javascript
import transform from '@axetroy/transform';
test('simple', t => {
  const src = 'hello world  ';
  const result = transform(src)
    .pipe(uppercase)
    .pipe(trim)
    .pipe(removeSpace)
    .value();
  t.deepEqual(result, 'HELLOWORLD');
});
```

## Test

```bash
git clone https://github.com/axetroy/transform.git
cd ./transform.js
yarn
yarn run test
```

## Contributing

```bash
git clone https://github.com/axetroy/transform.git
cd ./transform.js
yarn
yarn run test
```

You can flow [Contribute Guide](https://github.com/axetroy/transform/blob/master/contributing.md)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars1.githubusercontent.com/u/9758711?v=3" width="100px;"/><br /><sub>Axetroy</sub>](http://axetroy.github.io)<br />[💻](https://github.com/gpmer/gpm.js/commits?author=axetroy) 🔌 [⚠️](https://github.com/gpmer/gpm.js/commits?author=axetroy) [🐛](https://github.com/gpmer/gpm.js/issues?q=author%3Aaxetroy) 🎨 |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

The [MIT License](https://github.com/axetroy/transform/blob/master/LICENSE)