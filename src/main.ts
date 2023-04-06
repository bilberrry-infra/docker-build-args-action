import * as core from '@actions/core'
import parser from 'action-input-parser'

async function run(): Promise<void> {
  try {
    const includeVars = parser.getInput('includeVars', {
      type: 'boolean'
    })
    const includeSecrets = parser.getInput('includeSecrets', {
      type: 'boolean'
    })
    const extraArgs = parser.getInput('extraArgs', {
      type: 'array'
    })

    if (includeVars) {
      console.log(includeVars)
    }

    if (includeSecrets) {
      console.log(includeSecrets)
    }

    console.log(extraArgs)

    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
