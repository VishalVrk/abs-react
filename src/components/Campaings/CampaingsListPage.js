import React, { Component } from 'react'
import CampaingsItem from './CampaingsItem';
import axios from 'axios';
import img from './cam_img.jpg';

class CampaingsListPage extends Component {

    state={
        loading:false,
        campaigns:[],
        error:'',
    }


    componentDidMount(){
        this.setState( { loading:true }, ()=>{
            axios.get(`https://wp-api-beyondx.000webhostapp.com/wp-json/wp/v2/campaings`)
                .then(res=>{
                    this.setState({
                        loading:true,
                        campaigns: res.data,
                    })
                     
                })  
                .catch(error=> this.setState({
                    loading:false,
                    error: error.response.data
                }))
        })
    }


    render() {
        const {campaigns} = this.state;
        return (
            <div className="container">
              <div className="main-wrapper">
                  <div>
                  <section className="my-weekly-ds-times">
                        <div className="side-card">
                        {/*Img Src-> https://user-images.githubusercontent.com/42794655/79435107-e2111080-7fec-11ea-8301-f44c972e8396.gif */}
                            <img src={img} width="100%"/>
							<p>
                                <blockquote>
‘‘Not all of us can do great things. But we can do small things with great love.’’</blockquote> &nbsp;<div class="para-footer"><footer>– Mother Teresa</footer></div>

    <div class="para-footer1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>“Humankind”</span>- well the satire lies in this word because humanity is striving for kindness. <span>RE-ENGINEERING HAPPINESS</span> is a perfect blend of pre and post-modern morality, as moral values are the key to happiness. This book makes the reader understand moral values along with its positive impacts and its influence on past-present. The author takes his readers through a time travel, enlightening about great philosophers like Plato, Aristotle, Epicurus, Jean Piaget and their ideas. This book is a beautiful journey comprising of excerpts and piece of poetry. <span>“Unity in Diversity”</span> has been aesthetically illustrated, coupled with social reformations through moral values. The author proves to be a master wordsmith as he wisely portrays the shaping of society (education system, political system, health care system, food industry and so on) by morality.

    To quote Theodore Roosevelt, <span>“To educate a man in mind and not in morals is to educate a menace to society”</span>. The author stresses on this quote and intends to promote educating people with morals and not just academics. Of course, we need educated people as a guarantee for the future but mostly we will need kind, loving, empathetic, compassionate and responsible adults ready to protect humanity, human values, global peace and future. This would be possible only if we teach and implement moral values in the education system. Understanding the modern life in morals and values will make this planet a better place to live in. By adapting moral ways into our behavior, it will definitely lead us to happiness with the society.
    

    The author, <span>Abdul Basit Syed</span>, is the quintessence of peace and a British Entrepreneur, born in Southern State and comes from renowned family of PKS Kattuwa Mohaiyadeen, an Indian Freedom Fighter. Honoured as <span>“Knight of Malta”</span>, he is the Founder and Chairman of World Humanitarian Drive (WHD). The ulterior motive of WHD is to nurture harmony in the world we exist and cherish the beauty of humanity in peace. The author has won <span>"Award of Excellence"</span> and <span>"Peace Award" </span>from UNODC and BRICS International Alliance respectively. He is also recognized as <span>"Ambassador of Peace"</span> by Universal Peace Federation.
    
    This book envisions on implementing morality throughout the world and believes it’s the only way to bring peace and happiness to the mankind. The author is endeavouring to declare a day called <span>“WORLD MORAL DAY”</span> – in search of lost morals. This may seem like a utopian fantasy, but remember even flying was once considered a utopian fantasy. World Moral Day, being the first pitch, is the ray of hope for the future mankind and the earth. The understanding of moral values is the only sensational and efficacious solution for human minds to open to us as we address societal problems. Morality builds the mind for equality by respecting all human beings. Hence, the author feels that we should all embrace this day, in a way that feels like sunshine surrounding our lives with just enough rain to make us appreciate what life is all about. 
    
    The dawn of morality lies in the smallest first step taken. The first step taken in the right direction to open the eyes of our heart is the <span>“World Moral Day”</span>. Let’s all inculcate good morals and values to lead a prosperous life ahead. </div>

“The day you plant the seed is not the day you eat the fruit”
</p>
                        </div>
                    </section>
                  </div>
              <div className="secound-row">
                    <section className="my-weekly-ds-times">
                        <div className="main-section">
                            <h1>Campaings</h1>
                        {campaigns.length ?campaigns.map(campaign=>(
                <CampaingsItem key={campaign.id} campaign={campaign}/>
                            )):'Loading'
                        }
                        </div>
                    </section>
                </div>
              </div>
            </div>
        )
    }
}

export default CampaingsListPage;