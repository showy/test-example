# Requirements
Tested with ember 2.7.3

# Installation

npm install

./node_modules/.bin/bower install

npm start

Browse to http://127.0.0.1:4200

# Mission

2)

Listing of Hotels -> Rooms -> Rates should accomplish the hotel_id and rate_id selection.

Clicking on Buy button for the rates generates the GET with the heaers

3)

apiHost and apiNameSpace are set in config/environment which are used by the application adapter

4)

The hotel findallreponse was normalized to allow ember data to reconize the hasMany relationship for the rooms. Also the rooms are normalized in the response adding the key as requested. 

There's also a room serializer which inserts the id as requested.

# Headers

Headers are set lazily in the room adapter, which is only touched by the app when generating the request to buy the room (select rate). Check the room adapter for general description of how would I do it in real life.

# NOTES

I'm not sure if there is a problem with the data but the rates have the same price for the same room. Now I know they are different rates for the same room as the base64 is different.