jezpoz-cli
==========

Jezpozs&#39; tools in a cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/jezpoz-cli.svg)](https://npmjs.org/package/jezpoz-cli)
[![CircleCI](https://circleci.com/gh/jezpoz/jezpoz-cli/tree/master.svg?style=shield)](https://circleci.com/gh/jezpoz/jezpoz-cli/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/jezpoz-cli.svg)](https://npmjs.org/package/jezpoz-cli)
[![License](https://img.shields.io/npm/l/jezpoz-cli.svg)](https://github.com/jezpoz/jezpoz-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g jezpoz-cli
$ jeztools COMMAND
running command...
$ jeztools (-v|--version|version)
jezpoz-cli/0.0.0 darwin-x64 node-v14.5.0
$ jeztools --help [COMMAND]
USAGE
  $ jeztools COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`jeztools hello [FILE]`](#jeztools-hello-file)
* [`jeztools help [COMMAND]`](#jeztools-help-command)

## `jeztools hello [FILE]`

describe the command here

```
USAGE
  $ jeztools hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ jeztools hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/jezpoz/jezpoz-cli/blob/v0.0.0/src/commands/hello.ts)_

## `jeztools help [COMMAND]`

display help for jeztools

```
USAGE
  $ jeztools help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
