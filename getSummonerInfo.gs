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

function getMatchURL(){
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
Logger.log(url);
}