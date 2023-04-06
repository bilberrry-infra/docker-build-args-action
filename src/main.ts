import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const includeVars: boolean = core.getBooleanInput('includeVars')
    const includeSecrets: boolean = core.getBooleanInput('includeSecrets')
    const extraArgs: string[] = core.getMultilineInput('extraArgs');

    const builArgs: string[] = [];

    if (includeVars) {
      console.log(process.env)
    }

    if (includeSecrets) {
      console.log(includeSecrets)
    }

    builArgs.push(...extraArgs);

    core.setOutput('args', builArgs)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
