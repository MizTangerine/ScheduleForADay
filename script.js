$(document).ready(function () {

    let today = (moment().format('dddd, MMMM Do YYYY'))
    console.log(today)
    let currentHour = (moment().format('h a'))
    let currentHrMil = (moment().format('HH'))
    console.log(currentHrMil)

    // displays current day at top of page
    $('#currentDay').html(today)

    let timeBlk = [
        { 'milHr': '09', 'hour': '09', 'amPm': 'am', 'event': '' },
        { 'milHr': '11', 'hour': '11', 'amPm': 'am', 'event': '' },
        { 'milHr': '13', 'hour': '01', 'amPm': 'pm', 'event': '' },
        { 'milHr': '17', 'hour': '05', 'amPm': 'pm', 'event': '' },
        { 'milHr': '20', 'hour': '08', 'amPm': 'pm', 'event': '' },
        { 'milHr': '21', 'hour': '09', 'amPm': 'pm', 'event': '' },
        { 'milHr': '22', 'hour': '10', 'amPm': 'pm', 'event': '' },
        { 'milHr': '23', 'hour': '11', 'amPm': 'pm', 'event': '' },

        // { 'hour': '10 am', 'text': 'textbox' },
    ]

    // ***Render to Page****
    let eventHr;
    for (i = 0; i < timeBlk.length; i++) {
        eventHr = timeBlk[i]

        let newRow = $('<form>').addClass('row time-block');
        //append to container div
        $('.container').append(newRow);

        //create hour div
        let hourEl = $('<div>').attr({
            class: 'col hour',
            'data-hour': eventHr.hour
        })
        //add hour text to hour el
        let hrText = hourEl.text((eventHr.hour) + ' ' + (eventHr.amPm))

        //create event text area
        let eventEl = $('<input>').attr({
            class: 'col-11 description',
            id: timeBlk.milHr
        });
        let eventText = eventEl.val().trim()
        // text(timeBlk[i].event)

        newRow.append(hourEl, eventEl);


        // ***check for past, present, future hour***

        let checkHr = timeBlk[i].milHr
        console.log(checkHr)
        if (checkHr < currentHrMil) {
            eventEl.addClass('past')
        } else if (checkHr === currentHrMil) {
            eventEl.addClass('present')
        } else {
            eventEl.addClass('future')
        }
    }

    //***event listener on save btn ***


    //***local storage
    function saveState() {
        localStorage.setItem('toFind', JSON.stringify(timeBlk))
    }
    saveState()

    function getState() {
        let toStrinify = localStorage.getItem('toFind')
        timeBlk = JSON.parse(toStrinify)
    }
    getState()


})

