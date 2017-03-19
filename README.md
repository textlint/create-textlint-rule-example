# create-textlint-rule-example [![Build Status](https://travis-ci.org/textlint/create-textlint-rule-example.svg?branch=master)](https://travis-ci.org/textlint/create-textlint-rule-example)

Create textlint rule example from test codes([textlint-tester](https://github.com/textlint/textlint-tester "textlint-tester")).

## Install

Install with [npm](https://www.npmjs.com/):

    npm install create-textlint-rule-example

## Usage

### CLI

A argument is the test file for textlint that use [textlint-tester](https://github.com/textlint/textlint-tester "textlint-tester").

```shell-session
$ create-textlint-rule-example path/to/rule-test.js
# OR
$ cat path/to/rule-test.js | create-textlint-rule-example
```

Example Output:

    **OK**:
    
    ```
    text
    TODOS:
    [TODO: this is todo](http://example.com)
    ![TODO: this is todo](http://example.com/img)
    > TODO: this is todo
    ```
    
    **NG**:
    
    ```
    TODO: this is TODO
    TODO: this is TODO
                
    - [ ] TODO
    TODO: A TODO: B
    THIS IS TODO:
    ```


## Changelog

See [Releases page](https://github.com/textlint/create-textlint-rule-example/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/textlint/create-textlint-rule-example/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
