var FI =
{
    version: 0.1,
    supportedVersion: 2.048,

    init: function () {
        //this function is called as soon as the mod is registered
        //declare hooks here
        CheckGameVersion();
        AddCookies();

    },
    save: function () {
        //use this to store persistent data associated with your mod
        return 'a string to be saved';
    },
    load: function (str) {
        //do stuff with the string data you saved previously
    },
};

Game.registerMod("FI", FI);

function CheckGameVersion() {
    if (FI.supportedVersion != Game.version) {
        Game.Notify('Unsupported version', 'Full Idler has not been tested on this version of Cookie Clicker. Continue on your own risk!', [3, 5], 6);
    }
}

function AddCookies() {
    var timeAfk = (Date.now() - Game.lastDate) / 1000;
    var cookiesAdded = Math.floor(timeAfk * Game.cookiesPsRaw);
    Game.Earn(cookiesAdded);
    console.log("Afk: " + timeAfk + "s, " + "cookies: " + cookiesAdded);
    Game.Notify("Welcome back!", "You earned " + cookiesAdded + "cookies while you were away for " + timeAfk + " seconds!", [3, 5], 6);
}