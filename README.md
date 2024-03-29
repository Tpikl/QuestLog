`QuestLog`
=========

Digital to-do application loosely following the [Bullet Journal](https://bulletjournal.com/) methodology and design. The eventual goal being to gamify it even further to feel more like a video game Quest Log.

## Projects

Descriptions and general information of the projects involved with this application are detailed below.

### `./QuestLog.Api`

.Net Core Api that exposes api endpoints to handle the various data needs of the front end.\

**Packages**
- [Entity Framework](https://learn.microsoft.com/en-us/ef/)
  - Currently using `UseInMemoryDatabase`.

### `./QuestLog.Client`

React front end client, leveraging styling and design using styled-components.

**Packages**
- [axios](https://axios-http.com/docs/intro)
- [date-fns](https://date-fns.org/docs/Getting-Started)
- [prop-types](https://reactjs.org/docs/typechecking-with-proptypes.html)
- [styled-components](https://styled-components.com/docs)

## Setup

_Note: All paths relative to project root._

### Install

Installation steps necessary to run the project.\
Execute these steps before the Run commands below.

.Net Api:
```bash
> cd ./QuestLog.Api
> dotnet restore
> dotnet build
```

React Client:
```bash
> cd ./QuestLog.Client
> npm i
```

### Run

Ensure the installation steps above are completed.\
Both projects must be run separately with the following commands.

.Net Api:
```bash
> cd ./QuestLog.Api
> dotnet run
```

React Client:
```bash
> cd ./QuestLog.Client
> npm start
```
