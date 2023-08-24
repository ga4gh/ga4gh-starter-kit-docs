---
sidebar_position: 2
---

# Starter Kit Passport UI Overview

The Current Starter Kit Passport UI Release **0.0.2** implements GA4GH Passport Specification Release **1.2.0**

[Github](https://github.com/ga4gh/ga4gh-starter-kit-passport-ui), [Docker Hub](https://hub.docker.com/repository/docker/ga4gh/ga4gh-starter-kit-passport-ui-node)

The GA4GH Starter Kit Passport UI is the central UI server that connects the other Starter Kit Passport related microservice (ory hydra, ory kratos). The GA4GH Starter Kit Passport: Starterkit Implementation is made up of multiple services, this UI-node being one of them. To make API requests, the Passport Broker Service will need to be running. [View specification](https://github.com/ga4gh-duri/ga4gh-duri.github.io/blob/master/researcher_ids/ga4gh_passport_v1.md).


## Installation and Usage

To run the Passport UI, first clone the Passport UI repo
```
git clone https://github.com/ga4gh/ga4gh-starter-kit-passport-ui
```

This service is a docker container, having [Docker Desktop](https://docs.docker.com/desktop/) installed beforehand will be useful. 

After cloning the repository, navigate to the cloned repo and use the command below to run the different services in the passport-network docker-compose file.
```
docker-compose -f passport-network.yml up --build --force-recreate
```

You can confirm hydra and kratos are running by confirming the following response in the command prompt
```
ga4gh-starter-kit-passport-ui_kratos-migrate_1 exited with code 0
ga4gh-starter-kit-passport-ui_hydra-migrate_1 exited with code 0
```

Ory hydra is a OAuth 2.0 and Open ID Connect certified server. It allows you to interface with the passport application and login systems.

Ory kratos is the identity management system for the server for the different users. This service supports user creation and management.

Confirm the passport broker is running using a request to the passport broker service info
```
GET http://localhost:4500/ga4gh/passport/v1/service-info
```

You should get back an object body starting with `id` with value `"org.ga4gh.starterkit.passport.broker"`, and other information.

Confirm that the image for the repository `ga4gh/ga4gh-starter-kit-passport-ui-node`

The GA4GH Starter Kit Passport network implementation is made up of multiple services, this UI-node being one of them. In order to start running multiple services at once a [docker compose](https://github.com/ga4gh/ga4gh-starter-kit-passport-ui/blob/595b13e965ce1cfbb7f042baa9da34b5d9334ad2/passport-develop.yml) file used.



***
###### Installing and Run with Docker

To install, first pull the docker image:
```
docker pull ga4gh/ga4gh-starter-kit-passport-ui-node:${TAG}
```

where `${TAG}` represents the release version of the application. See the "Latest Starter Kit Passport UI Node Release" above for the most current release, or browse releases/tags on [Docker Hub](https://hub.docker.com/repository/docker/ga4gh/ga4gh-starter-kit-passport-ui-node/tags).

e.g.
```
docker pull ga4gh/ga4gh-starter-kit:0.2.0
```

To run the passport network (Hydra, Kratos, our UI):
```
docker-compose -f passport-network.yml up --build --force-recreate
```

To run just the Ory Hydra service:
```
docker-compose -f hydra-service.yml up --build --force-recreate
```

To run just the Ory Kratos service:
```
docker-compose -f kratos-service.yml up --build --force-recreate
```

where:
* `CONTAINER_PUBLIC_API_PORT`: The port within the docker container that the public API endpoints will be served over, must be equal to the `publicApiPort` value in `serverProps`; e.g. `8000`. [More info](../../concepts-and-guides/configuring-webservice-properties)
* `HOST_PUBLIC_API_PORT`: The mapped port on the host machine that will serve the public API endpoints; e.g. `80`
* `CONTAINER_ADMIN_API_PORT`: The port within the docker container that the admin API endpoints will be served over, must be equal to the `adminApiPort` value in `serverProps`; e.g. `3000`. [More info](../../concepts-and-guides/configuring-webservice-properties)
* `HOST_ADMIN_API_PORT`: The mapped port on the host machine that will serve the admin API endpoints; e.g. `8080`
* `HOST_CONFIG_DIR`: Absolute file path to directory containing YAML config file; e.g. `/home/user/passport/config`
* `CONFIG_FILE`: Name of YAML config file mounted to container; e.g. `config.yml` [More info](./passports_configuration)

The following snippet displays an example `docker run` command:
```
docker run \
    -p 80:7000 \
    -p 7001:7001 \
    -v /home/usr/passport/config:/config \
    ga4gh/ga4gh-starter-kit-passport-ui:0.2.0 \
    java -jar ga4gh-starter-kit-passport-ui.jar -c /config/config.yml
```

