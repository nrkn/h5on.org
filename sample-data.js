var sampleData = {
  "Name": "Akosua",
  "Occupation": "Zombie Hunter",
  "Is Infected": false,
  "Stats": [ 12, 11, 15, 16, 10, 12 ],
  "Equipment": [
    {
      "Name": "Backpack",
      "Type": "Container",
      "Capacity": 40000,
      "Weight": 2000,
      "Contents": [
        {
          "Name": "Water Bottle",
          "Type": "Container",
          "Capacity": 1000,
          "Weight": 0.2,
          "Contents": [
            {
              "Name": "Water",
              "Weight": 365.9
            }
          ]
        },
        {
          "Name": "Necronomicon",
          "Type": "Book",
          "Weight": 0.87
        }
      ]
    },    
    {
      "Name": "Katana",
      "Type": "Weapon",
      "Class": "Edged",
      "Damage": {
        "Base": "4d6",
        "Modifier": -2
      },
      "Weight": 1200
    }
  ]
};