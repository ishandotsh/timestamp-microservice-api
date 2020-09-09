# Timestamp Microservice

## to run:

- `npm install`
- `npm run dev`

## endpoint

- /api/timestamp/\<datestring\>

## API information

- Datestring parameter can be of types:

  - unix (eg: 1599663603613)
  - ISO-8601 (date only) (eg: 2020-09-09)
  - empty

- Return unix timestamp, and utc (eg: Wed, 09 Sep 2020 15:00:03 GMT) for any of the above
- For empty: use current time
- Handle error for invalid dates
