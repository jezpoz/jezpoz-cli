import {Command, flags} from '@oclif/command'
import {prompts} from 'prompts'

export default class NewNextCrystallizeWebshop extends Command {
  static description = `
    This will run you through the setup of a webshop with
    Next.js and Crystallize
  `

  static flags = {
    help: flags.help({char: 'h'}),
    name: flags.string({char: 'n', description: 'name of the app'}),
  }

  static args = [{name: 'appName'}]

  async run() {
    const {args} = this.parse(NewNextCrystallizeWebshop)
    let appName: string = args.appName
    if (!appName) {
      appName = await prompts.select({
        type: 'text',
        name: 'appName',
        message: 'Name your new app',
        validate: (appName: string) => appName.includes(' ') ? 'App name cannot contain spaces' : true,
      }) as unknown as string
    }
    this.log('Creating new app with name', appName)
  }
}
