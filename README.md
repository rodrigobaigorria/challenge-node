# challenge-node
Challenge API-REST node

To install necesary dependencies run.  
``` npm install ```

To run the app.  
```npm run dev ```


### In the env file you need add your token from  
```https://www.football-data.org/ ```


## PLAYERS
```http://localhost:3003/players ```  

To get players for league send in the body the leagueCode. 


Example: ```{ league: 'ELC' }```  


To get players for team send in the body the teamName. 


Example: ```{ team: 'Blackburn Rovers FC' }```


## TEAMS
```http://localhost:3003/teams ```  

To get a team send the team's name in the body. 


Example: ```{ name: Blackburn Rovers FC }```  


If you want to add the players in the response add { players: 'ok' } in the body. 


Example: ```{ name: 'Blackburn Rovers FC', players: 'ok' }```
