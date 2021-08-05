import abtimg from '../../images/nurse.jpg';
import cntimg from '../../images/GoogleLocation.png';
import clients from '../../images/svg/Teams.svg';

export const homeobjOne = {
    id : 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine:'A Pharmacy store that puts our customers need first ',
    headline: 'Megenagna Pharmaceuticals PLC',
    description: 'A 20+ YEARS OF  EXPERIENCE IN THE PHARMACEUTICAL BUISSNES,WHICH MAKES US THE RIGHT PHARMACY STORE THAT CAN CATER TO YOUR EVERY NEEED.',
    buttonLabel: 'Read More',
    imgStart: false,
    img: abtimg,
    alt:'IPO',
    darK: true,
    primary: false,
    darkText:true
    

};

export const homeobjTwo = {
    id: 'contact',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: ' Call our Customer service +251911567889',
    headline: 'Visit Our Store Location ',
    description: 'Megenagna ,Mulugeta Zeleke, Ground Floor',
    buttonLabel: 'Call Now !!!',
    imgStart: true,
    img: cntimg,
    alt: 'IPO',
    darK: true,
    primary: true,
    darkText: false


};

export const homeobjThree = {
    id: 'carousel',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Being a Reliable Partner Is One Of Our Core Buissness Values  ',
    headline: 'Our Whole Sell Client Companies   ',
    description: 'Its Because We put our clients satisfaction and their gratitude towards our quality of work above everything.',
    buttonLabel: 'Clients Testimonials',
    imgStart: true,
    img: clients,
    alt: 'IPO',
    darK: true,
    primary: false,
    darkText: false


};