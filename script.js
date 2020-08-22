$(document).ready(function () {

    let today = (moment().format('dddd, MMMM Do YYYY'))
    console.log(today)
    let currentHour = (moment().format('h a'))
    console.log(currentHour)
    // displays current day at top of page
    $('#currentDay').html(today)


    let hours = [{ 'hour': '9 am', 'text': 'textbox' },
    { 'hour': '10 am' },
    { 'hour': '11 am' }]

    hours.forEach


    console.log(hours)

    function saveState() {
        localStorage.setItem('toFind', JSON.stringify(hours))
    }
    saveState()

    function getState() {
        let toStrinify = localStorage.getItem('toFind')
        hours = JSON.parse(toStrinify)

    }
    getState()

    function saveToPage() {
        $.each(hours, function (index, hour) {

            const row = $('<div>')

            row.attr('class', 'row')
            const time = $('<div>')
            time.html(hour.hour)
            time.attr('class', 'col hour')
            row.append(time)
            //how to identify each text box with another


            $('.container').append(row)
        })

    }

    saveToPage()
})

