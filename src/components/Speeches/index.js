import React, { Component } from 'react'
import CardListItem from '../utlis/CardListItem'

export default class Speeches extends Component {
    render() {
        return (
            <CardListItem data="speeches" heading="Speeches in parliment (My Voice)" ButtonName="Speeches"/>
        )
    }
}
