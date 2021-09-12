[
  {
    "intent": "TestIntent", 
    "utterances": [
      {
        "parts": ["test"]
      },
      {
        "parts": ["checking"]
      }
    ]
  },
  {
    "intent": "KitchenStuffIntent",
    "slots": [
      {
        "name": "KitchenStuffSlot",
        "type": "KITCHEN_STUFF"
      }
    ],
    "utterances": [
      {
        "description": "first utterance",
        "parts":[
          "You will find",
          {"options": ["a", "the"], "flags": {"optional": true}},
          {"slot": "KitchenStuffSlot"},
          "in the kitchen"
        ]  
      }
    ]
  }
]