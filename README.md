`QuestLog`
=========

Digital todo application loosely following the [Bullet Journal](https://bulletjournal.com/) methodology and design. The eventual goal being to gamify it even further to feel more like a game Quest Log.

## Projects

Description of the multiple projects involved with this application.

### `QuestLog.Api`

Built using .Net Core, exposing Api endpoints to handle various data.\
Currently using `UseInMemoryDatabase`.

### `QuestLog.Client`

Built using React. Combining the design with the `styled-components` package.

## Setup
### Install

Installation steps necessary to run the project.

**Dotnet Api**
- `cd QuestLog.Api`
  - `dotnet restore`
  - `dotnet build`

**React Client**
- `cd QuestLog.Client`
  - cd into the Client project to handle npm packages.
- `npm i`
  - Install all necessary packages.

### Run
Dotnet Api:
- `cd QuestLog.Api`
  - `dotnet run`

React Client:
- `cd QuestLog.Client`
- `npm start`
