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
var parsedValues = JSON.parse(response.getContentText());
var firstMatchId = parsedValues.matches[0].gameId.toString();
Logger.log(firstMatchId);
}
