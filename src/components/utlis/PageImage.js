import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

class PageImage extends Component {
    state={
        isLoaded:false,
        imgUrl:''
    }

    static propTypes ={
        img: PropTypes.object.isRequired
    }

    componentDidMount(){
        const {featured_media} = this.props.img
        const getImageUrl = axios.get(`https://wp-api-beyondx.000webhostapp.com/wp-json/wp/v2/media/${featured_media}`);

        Promise.all([getImageUrl]).then(res=>{
            this.setState({
                imgUrl:res[0].data.media_details.sizes.full.source_url,
                isLoaded:true
            })
        })
        .catch(err=>{
            console.log(err);
            this.setState({
                imgUrl:"https://user-images.githubusercontent.com/44617366/79681545-c69a4580-8238-11ea-966b-9e564a1677b9.jpg",
                isLoaded:true
            })
        }
           )
    }
    render() {
        const {imgUrl} = this.state;
        return (
            <img src={imgUrl} width="100%"/>
        )
    }
}

export default PageImage;
