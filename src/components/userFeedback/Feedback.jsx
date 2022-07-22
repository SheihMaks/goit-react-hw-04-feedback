import React from 'react';
import {Controls} from '../Controls/FeedbackOptions';
import {Statistics} from '../feedbackStatistics/statistics';
import { Section } from '../sectionDoc/Section';
import {FeedBackMain} from './Feedback.styled';
import { Notification } from '../NotificationMsg/Notification';

export class FeedbackComponent extends React.Component{
    
    state={
    good: 0,
    neutral: 0,
    bad: 0
    }
    
    onBtnClick=(ev)=>{
        const {textContent:key}= ev.target
this.setState((prevState)=>({ [key] : prevState[key]+=1}))
    }

    countTotalFeedback=()=>{
        const {good,neutral,bad}=this.state;
     return good + neutral + bad
    }

    countPositiveFeedbackPercentage=()=>{
return Math.round((this.state.good/this.countTotalFeedback())*100)
    }

    render(){
        const{good,neutral,bad} = this.state;
        const total = this.countTotalFeedback();
        return(<FeedBackMain><Section title='Please leave feedback'>
            <Controls 
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onBtnClick}
            />
            </Section>
            <Section>
            { total >0 ? (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}/>):(<Notification title='There is no feedback'/>)}</Section>
</FeedBackMain>
            )
    }
}