# crewmates
# Web Development Project 7 - crewmates

Submitted by: Nicole Pastor

This web app: about a game called crewmates

Time spent: 20 hours spent in total

## Required Features

The following **required** functionality is completed:


- [X] **The web app contains a page that features a create form to add a new crewmate**
  - Users can name the crewmate
  - Users can set the crewmate’s attributes by clicking on one of several values
- [X] **The web app includes a summary page of all the user’s added crewmatese**
  -  The web app contains a summary page dedicated to displaying all the crewmates the user has made so far
  -  The summary page is sorted by creation date such that the most recently created crewmates appear at the top
- [X] **A previously created crewmate can be updated from the list of crewmates in the summary page**
  - Each crewmate has an edit button that will take users to an update form for the relevant crewmate
  - Users can see the current attributes of their crewmate on the update form
  - After editing the crewmate's attribute values using the form, the user can immediately see those changes reflected in the update form and on the summary page 
- [X] **A previously created crewmate can be deleted from the crewmate list**
  - Using the edit form detailed in the previous _crewmates can be updated_ feature, there is a button that allows users to delete that crewmate
  - After deleting a crewmate, the crewmate should no longer be visible in the summary page
  - [X] **Each crewmate has a direct, unique URL link to an info page about them**
    - Clicking on a crewmate in the summary page navigates to a detail page for that crewmate
    - The detail page contains extra information about the crewmate not included in the summary page
    - Users can navigate to to the edit form from the detail page

The following **optional** features are implemented:

- [ ] A crewmate can be given a category upon creation which restricts their attribute value options
  - e.g., a Dungeons and Dragons class or a development team role (project manager, product owner, etc.)
  - User can choose a `category` option to describe their crewmate before any attributes are specified
  - Based on the category value, users are allowed to access only a subset of the possible attributes
- [ ] A section of the summary page, displays summary statistics about a user’s crew on their crew page
  - e.g., the percent of members with a certain attribute 
- [ ] The summary page displays a custom “success” metric about a user’s crew which changes the look of the crewmate list
  - e.g., a pirate crew’s predicted success at commandeering a new galley


The following **additional** features are implemented:

* [X] I added box shadow that displays the same color as to what the user shows. 

## Video Walkthrough

Here's a walkthrough of implemented user stories:
<div>
    <a href="https://www.loom.com/share/0b75607ff34e4fa493f1fde1a24e14fe">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/0b75607ff34e4fa493f1fde1a24e14fe-441a48eeaaf39016-full-play.gif">
    </a>
  </div>

## Notes
Challenges - It was very hard to get all the pages together. I started off using Vite instead of creating a react app. I struggled a lot with creating pages and with sizing. especially connecting to supabase, i realized I used something wrong.

## License

    Copyright [2025] [Nicole Pastor]
