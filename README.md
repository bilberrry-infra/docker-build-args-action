# docker-build-args-action
Preparing build arguments for docker/build-push-action from variables and secrets.

## Usage
```yaml
  name: Build docker image
  on:
    push:

  jobs:
    steps:
      - uses: actions/checkout@v3

      - uses: bilberrry-infra/docker-build-args-action@master
        id: action
        with:
          includeVars: ${{ toJson(vars) }}
          includeSecrets: ${{ toJson(secrets) }}
          extraArgs: |
            ARG1=test1
            ARG2=test2

      - uses: docker/build-push-action@v4
        with:
          tags: user/app:latest
          build-args: ${{ steps.action.outputs.args }}
```

## Inputs

| Name | Description | Default | Required |
|------|-------------|---------|----------|
| includeVars | Action variables for docker arguments list |  | false |
| includeSecrets | Action secrets for docker arguments list |  | false |
| extraArgs | Extra values for docker arguments list |  | false |


## Outputs

| Name | Description |
|------|-------------|
| args | Arguments list |