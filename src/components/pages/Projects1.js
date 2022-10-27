import React from "react";
import '../../index.css';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
  } from 'reactstrap';

import BeerMeal from '../../images/project1/beermeal.png';
import CampingJournal from '../../images/project1/campingjournal.png';
import CheckYourMovie from '../../images/project1/checkyourmovie.png';
import FindFlix from '../../images/project1/findflix.png';
import FlightPlanner from '../../images/project1/flightplanner.png';
import LearningMyWay from '../../images/project1/learningmyway.png';
import Motivation from '../../images/project1/motivation.png';
import MusicHub from '../../images/project1/musichub.png';
import NewsHeadline from '../../images/project1/newsheadline.png';
import SearchDisplayer from '../../images/project1/searchdisplayer.png';
import WhatsTheWord from '../../images/project1/whatstheword.png';
import Where2Watch from '../../images/project1/where2watch.png';
import WordPlay from '../../images/project1/wordplay.png';
import Ymdb from '../../images/project1/ymdb.png';



export default function Projects1() {
    return (
        <div>
        <h1>Hello World!</h1>
        <main className="gallery">
            <span>
                <img src={WordPlay}></img>
            </span>
            <span>
                <img src={Where2Watch}></img>
            </span>
            <span>
                <img src={BeerMeal}></img>
            </span>
            <span>
                <img src={CampingJournal}></img>
            </span>
            <span>
                <img src={FlightPlanner}></img>
            </span>
            <span>
                <img src={Ymdb}></img>
            </span>
            <span>
                <img src={LearningMyWay}></img>
            </span>
            <span>
                <img src={FindFlix}></img>
            </span>
            <span>
                <img src={Motivation}></img>
            </span>
            <span>
                <img src={SearchDisplayer}></img>
            </span>
            <span>
                <img src={CheckYourMovie}></img>
            </span>
            <span>
                <img src={NewsHeadline}></img>
            </span>
            <span>
                <img src={MusicHub}></img>
            </span>
            <span>
                <img src={WhatsTheWord}></img>
            </span>
        </main>
        </div>
    )
}