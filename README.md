`QuestLog`
=========

Digital to-do application loosely following the [Bullet Journal](https://bulletjournal.com/) methodology and design. The eventual goal being to gamify it even further to feel more like a game Quest Log.

## Projects

Descriptions and general information of the multiple projects involved with this application are detailed below.

### `QuestLog.Api`

.Net Core Api that exposes api endpoints to handle the various data needs of the front end.\

**Packages**
- [Entity Framework](https://learn.microsoft.com/en-us/ef/)
  - Currently using `UseInMemoryDatabase`.

### `QuestLog.Client`

React front end client, leveraging styling and design using styled-components.

**Packages**
- [axios](https://axios-http.com/docs/intro)
- [date-fns](https://date-fns.org/docs/Getting-Started)
- [prop-types](https://reactjs.org/docs/typechecking-with-proptypes.html)
- [styled-components](https://styled-components.com/docs)

## Setup
### Install

Installation steps necessary to run the project.

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
.Net Api:
```bash
> cd QuestLog.Api
> dotnet run
```

React Client:
```bash
> cd QuestLog.Client
> npm start
```
