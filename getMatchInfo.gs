function getMostRecentMatch(){
var ss = SpreadsheetApp.getActiveSpreadsheet();
  var accountId = getSummonerIdByName();
  var apiKey = getApiKey();
  var season = getDesiredSeason();
  var url = 'https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/'
  +accountId
  +'?season='
  +season
  +'&endIndex=1'
  +'&api_key='
  +apiKey;
var response = UrlFetchApp.fetch(url, {'muteHttpExceptions': true});
var parsedValues = JSON.parse(response.toString());
var MatchId = parsedValues.matches[0].gameId.toString();
Logger.log(parsedValues);
}


function getSoloDuoMatches(){
var ss = SpreadsheetApp.getActiveSpreadsheet();
  var accountId = getSummonerIdByName();
  var apiKey = getApiKey();
  var season = getDesiredSeason();
  var url = 
    'https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/'
    +accountId
    +'?'
  //  +'beginIndex='
  //  +0 //starting index value
  //  +'&endIndex='
  //  +100 //end index value
    +'queue=440'
    +'&season='
    +season
    +'&api_key='
    +apiKey;
var response = UrlFetchApp.fetch(url, {'muteHttpExceptions': true});
var dataAll = JSON.parse(response.getContentText());
var data = JSON.stringify(dataAll.matches,["gameId","champion","lane","role","timestamp"]);
for (i in data){
data[i].gameId = gameId[i]
};
Logger.log(data);

//var parsedValues = JSON.parse(response.getContentText());
//var matches = JSON.stringify(parsedValues.matches,["gameId","champion","lane","role","timestamp"]);
//Logger.log(response);
//Logger.log(matches);
}