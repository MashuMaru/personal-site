import React from 'react';
import PersonalSite from './Projects/PersonalSite';
import NotesApp from './Projects/NotesApp';
import ClockTask from './Projects/ClockTask';
import WeatherApp from './Projects/WeatherApp';
import AOS from 'aos';

function About() {
    AOS.init()
    return <projects>
    {/* <hr></hr> */}
    <h2 className="title">Projects</h2> 
            <PersonalSite />
            <ClockTask />
            <NotesApp />
            <WeatherApp />
        </projects>
}

export default About;