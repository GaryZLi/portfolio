import React from 'react';
import resume from "../picSrc/Gary Li's Resume.pdf";

const Resume = () => <object data={resume} type="application/pdf" height='100%' width='100%' aria-label="Gary Li's Resume.pdf"/>;

export default Resume;

// detectMob() {
//     const toMatch = [
//         /Android/i,
//         /webOS/i,
//         /iPhone/i,
//         /iPad/i,
//         /iPod/i,
//         /BlackBerry/i,
//         /Windows Phone/i,
//     ];

//     return toMatch.some((toMatchItem) => {
//         return navigator.userAgent.match(toMatchItem);
//     });
// }

// render() {
//     if (this.detectMob()) {
//         return (
//             <div style={{height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
//                 <a href={resume} target='__blank' style={{fontSize: 30}}>Gary Li's Resume</a>
//             </div>
//         )
//     }