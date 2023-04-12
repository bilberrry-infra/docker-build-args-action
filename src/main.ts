import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const includeVars: string = core.getInput('includeVars')
    const includeSecrets: string = core.getInput('includeSecrets')
    const extraArgs: string[] = core.getMultilineInput('extraArgs')

    const builArgs: string[] = []

    if (includeVars) {
      const obj = JSON.parse(includeVars)
      for (const item of Object.entries(obj)) {
        builArgs.push(`${item[0]}=${item[1]}`)
      }
    }

    if (includeSecrets) {
      const obj = JSON.parse(includeSecrets)
      for (const item of Object.entries(obj)) {
        builArgs.push(`${item[0]}=${item[1]}`)
      }
    }

    builArgs.push(...extraArgs)

    core.info(builArgs.join('\n'))
    core.setOutput('args', builArgs.join('\n'))
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
