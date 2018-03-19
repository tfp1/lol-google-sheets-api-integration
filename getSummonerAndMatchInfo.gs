function getApiKey(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var apiKey = ss.getRangeByName('apiKey').getValue();
return apiKey;
}

function getDesiredSeason(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var season = ss.getRangeByName('season').getValue();
return season;
}

function getSummonerIdByName(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var apiKey = getApiKey();
  var summonerName = ss.getRangeByName('summonerName').getValue();
  var url = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/'
  +summonerName
  +'?api_key='
  +apiKey;

var response = UrlFetchApp.fetch(url, {'muteHttpExceptions': true});
var parsedValues = JSON.parse(response.getContentText());
var accountId = parsedValues.accountId.toString();
return accountId;
}
