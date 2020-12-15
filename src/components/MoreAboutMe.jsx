import React from "react";
import "../images/post-it-note.png";
// design
import "../style/moreAboutMe.css";


function MoreAboutMe (props){

    const backgroundMode=props.backgroundMode;
    console.log ('props background dans more about me', props.backgroundMode)

    return (
        
        <div className={"postitContainer " + (backgroundMode === 'light' ? 'light' : 'dark')} >
            <div id="postit">
                <div id="postitContent">
                    <h3><span>🤗</span>Team Lover</h3>
                    <h3><span>🤸🏽</span>Pole Danceuse</h3>
                    <h3><span>🧘</span>Yogiste</h3>
                    <h3><span>🕵🏽</span> Chasseuse de Street-Art</h3>
                    <h3><span>🇯🇵</span> Mère de geek</h3>
                </div>                 
            </div>
        </div>
    )
}

export default MoreAboutMe;