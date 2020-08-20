# Day Scheduler

page renders with:

    * hour

    * a place for the user to create/edit a meeting/event

    * a button to save the meeting/event to local storage

    for each hour from 9am to 9 pm

when hour is < current hour, then apply .past style
when hour = current hour, then apply .present style
when hours > current hour, the apply .future style

when user clicks any save button, it re-saves the entire schedule to local storage, and re-renders the page