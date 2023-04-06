import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const includeVars: string = core.getInput('includeVars')
    const includeSecrets: string = core.getInput('includeSecrets')
    const extraArgs: string[] = core.getMultilineInput('extraArgs')

    const builArgs: string[] = [];

    if (includeVars) {
      let obj = JSON.parse(includeVars);
      (Object.keys(obj) as (keyof typeof obj)[]).forEach((key) => {
        builArgs.push(key as string + '=' + obj[key]);
      });
    }

    if (includeSecrets) {
      let obj = JSON.parse(includeSecrets);
      (Object.keys(obj) as (keyof typeof obj)[]).forEach((key) => {
        builArgs.push(key as string + '=' + obj[key]);
      });
    }

    builArgs.push(...extraArgs);

    core.setOutput('args', builArgs)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
