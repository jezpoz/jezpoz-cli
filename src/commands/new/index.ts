import {Command, flags} from '@oclif/command'
import * as prompts from 'prompts'

import NewNextCrystallizeWebshop from './next-crystallize-webshop/next-crystallize-webshop'
import NewNextSanitySite from './next-sanity-site/next-sanity-site'

export default class NewCommand extends Command {
  static description = 'The new command is used to generate a new project.';

  static examples = [
    '$ jezcli new next-sanity-landingpage',
  ];

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'appName'}]

  async run() {
    const {args} = this.parse(NewCommand)
    const appType = await prompts({
      type: 'select',
      name: 'appType',
      message: 'Pick a app template',
      choices: [
        {title: 'Next.js + Sanity site', value: 'next-sanity-site'},
        {title: 'Next.js + Crystallize webshop', value: 'next-crystallize-webshop'},
      ],
    }) as unknown as string
    switch (appType) {
    case 'next-sanity-site': {
      await NewNextSanitySite.run([args.appName ? args.appName : ''])
      break
    }
    case 'next-crystallize-webshop': {
      await NewNextCrystallizeWebshop.run([args.appName ? args.appName : ''])
      break
    }
    }
  }
}
