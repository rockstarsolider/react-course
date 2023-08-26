import ProfileCard from "./ProfileCard";
import cortanaImage from "./images/cortana.png";
import alexaImage from "./images/alexa.png"
import siriImage from "./images/siri.png"
import 'bulma/css/bulma.css'

function App(){
    return(
        <div className="container">
            <section className="section">
                <div className="columns">
                    <div className="column is-4">
                        <ProfileCard title='siri' handle='@siri' image={siriImage}/>
                    </div>
                    <div className="column is-4">
                        <ProfileCard title='cortana' handle='@cortana' image={cortanaImage}/>
                    </div>
                    <div className="column is-4">
                        <ProfileCard title='alexa' handle='@alexa' image={alexaImage}/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App