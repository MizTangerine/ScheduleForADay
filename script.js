$(document).ready(function () {

    let today = (moment().format('dddd, MMMM Do YYYY, h:mm a'))
    let currentHour = (moment().format('h a'))
    let currentHrMil = (moment().format('HH'))

    // displays current day at top of page
    $('#currentDay').html(today)

    getState()

    // ***Render to Page****
    let eventHr;
    for (let i = 0; i < timeBlk.length; i++) {
        eventHr = timeBlk[i]

        let newRow = $('<form>').addClass('row time-block');
        newRow.on('submit', function (event) {
            event.preventDefault()
            saveState()
        })
        //append to container div
        $('.container').append(newRow);

        //create hour div
        let hourEl = $('<div>').attr({
            class: 'col hour time-block',
            'data-hour': eventHr.hour
        })

        //add hour text to hour el
        let hrText = hourEl.text((eventHr.hour) + ' ' + (eventHr.amPm))

        //create event text area
        let eventEl = $('<input>').attr({
            class: 'col-11 description',
            id: eventHr.milHr,
            data: i
        });

        //accepted input for line entered
        eventEl.on('input', function (event) {
            let index = parseInt(eventEl.attr('data'))
            timeBlk[index].event = eventEl.val()
        })

        eventEl.val(timeBlk[i].event) //sets value

        newRow.append(hourEl, eventEl);

        //check for past, present, future hour
        let checkHr = timeBlk[i].milHr
        if (checkHr < currentHrMil) {
            eventEl.addClass('past')
        } else if (checkHr === currentHrMil) {
            eventEl.addClass('present')
        } else {
            eventEl.addClass('future')
        }
    }

    //***event listener on save btn ***
    $('.saveBtn').on('click', function () {
        saveState()
    })

    //***local storage***
    function saveState() {
        localStorage.setItem('toFind', JSON.stringify(timeBlk))
    }

    function getState() {
        let toStrinify = localStorage.getItem('toFind')
        if (toStrinify) {
            timeBlk = JSON.parse(toStrinify)
        }
        else {
            timeBlk = [
                { 'milHr': '09', 'hour': '09', 'amPm': 'am', 'event': '' },
                { 'milHr': '10', 'hour': '10', 'amPm': 'am', 'event': '' },
                { 'milHr': '11', 'hour': '11', 'amPm': 'am', 'event': '' },
                { 'milHr': '12', 'hour': '12', 'amPm': 'pm', 'event': '' },
                { 'milHr': '13', 'hour': '01', 'amPm': 'pm', 'event': '' },
                { 'milHr': '14', 'hour': '02', 'amPm': 'pm', 'event': '' },
                { 'milHr': '15', 'hour': '03', 'amPm': 'pm', 'event': '' },
                { 'milHr': '16', 'hour': '04', 'amPm': 'pm', 'event': '' },
                { 'milHr': '17', 'hour': '05', 'amPm': 'pm', 'event': '' },
                { 'milHr': '18', 'hour': '06', 'amPm': 'pm', 'event': '' },
            ]
        }

    }


})
