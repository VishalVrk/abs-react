import React, { Component } from 'react'
import CardListItem from '../utlis/CardListItem'

export default class Plans extends Component {
    render() {
        return (
            <CardListItem data="plans" heading="My Plans" ButtonName="Plans"/>
        )
    }
}
