var intervalID = window.setInterval(changeArtist, 60000);

function changeArtist() {
    var dateObject = new Date();
    var hours = dateObject.getUTCHours();
    var minutes = dateObject.getUTCMinutes();
    var currentArtist = document.getElementById('currentArtist').innerHTML;

    var lineup = [
        {
            'artist': 'Incendium',
            'hour': 21,
            'minute': 0
        },
        {
            'artist': 'Mateo Román',
            'hour': 21,
            'minute': 15
        },
        {
            'artist': 'Suck-Haraam',
            'hour': 21,
            'minute': 30
        },
        {
            'artist': 'me.exe',
            'hour': 21,
            'minute': 45
        },
        {
            'artist': 'Evan Higgins',
            'hour': 22,
            'minute': 0
        },
        {
            'artist': 'Vita',
            'hour': 22,
            'minute': 15
        },
        {
            'artist': 'Diseased Dog Bark',
            'hour': 22,
            'minute': 30
        },
        {
            'artist': 'Machine+',
            'hour': 22,
            'minute': 45
        },
        {
            'artist': 'Krizell',
            'hour': 23,
            'minute': 0
        },
        {
            'artist': 'Eris',
            'hour': 23,
            'minute': 15
        },
        {
            'artist': 'Nomad Tony & Tempus',
            'hour': 23,
            'minute': 30
        },
        {
            'artist': 'BEG!',
            'hour': 23,
            'minute': 45
        },
        {
            'artist': 'Yung Davon',
            'hour': 0,
            'minute': 0
        },
        {
            'artist': 'Riley the Musician',
            'hour': 0,
            'minute': 15
        },
        {
            'artist': 'Nautical Myles',
            'hour': 0,
            'minute': 30
        },
        {
            'artist': 'Vaporize',
            'hour': 1,
            'minute': 0
        },
        {
            'artist': 'Vaxis Powers',
            'hour': 1,
            'minute': 30
        },
        {
            'artist': 'Xavi',
            'hour': 2,
            'minute': 0
        },
        {
            'artist': 'Lake House',
            'hour': 2,
            'minute': 30
        },
        {
            'artist': 'Booon! Booon!',
            'hour': 3,
            'minute': 0
        },
        {
            'artist': 'N A R O',
            'hour': 3,
            'minute': 30
        }
    ];

    for(var timeslot of lineup) {
        if(hours === timeslot.hour && minutes >= timeslot.minute) {
            currentArtist = timeslot.artist;
        }
    }

    document.getElementById("currentArtist").innerHTML = currentArtist;
}
