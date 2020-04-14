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
        .catch(err=>console.log(err))
    }
    render() {
        const {imgUrl} = this.state;
        return (
            <img src={imgUrl} width="100%"/>
        )
    }
}

export default PageImage;
