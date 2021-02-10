# Ranking REST API

## Install

`npm install` or `yarn install`

## Run the app

`npm run dev` or `yarn dev`

## Get results by competition id

### Request

`GET /results/:id`

### Response Example

`Status: 200 OK`
```json
{
  "competition_id": 1234,
  "competition": "100m classificatória 1",
  "athlete": "João da Silva",
  "value": 9.65,
  "unit": "s"
}
```
## Post a result

### Request

`POST /results`
```json
{
  "competition_id": 1234,
  "competition": "100m classificatória 1",
  "athlete": "João da Silva",
  "value": 9.65,
  "unit": "s"
}
```
### Response

`Status: 201 Created`
```json
{
  "competition_id": 1234,
  "competition": "100m classificatória 1",
  "athlete": "João da Silva",
  "value": 9.65,
  "unit": "s"
}
```
## Post a new competition

### Request

`POST /competition`
```json
{
  "competition_id": 1234,
  "name": "100m classificatória 1"
}
```
### Response

`Status: 201 Created`
```json
{
  "competition_id": 1234,
  "name": "100m classificatória 1"
}
```
## Get ranking in order by competition id

### Request

`GET /ranking/:id`

### Response

`Status: 200 OK`

```json
{
  "competition_id": 4321,
  "competition": "Dardo semifinal",
  "athlete": "João da Silva",
  "value": 121,
  "unit": "m"
},
{
  "competition_id": 4321,
  "competition": "Dardo semifinal",
  "athlete": "Márcio Andrade",
  "value": 112,
  "unit": "m"
},
{
  "competition_id": 4321,
  "competition": "Dardo semifinal",
  "athlete": "Rodrigo Silveira",
  "value": 100,
  "unit": "m"
}
```
