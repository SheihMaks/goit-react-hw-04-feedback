import {useState} from 'react';
import {Controls} from '../Controls/FeedbackOptions';
import {Statistics} from '../feedbackStatistics/statistics';
import { Section } from '../sectionDoc/Section';
import {FeedBackMain} from './Feedback.styled';
import { Notification } from '../NotificationMsg/Notification';

export const FeedbackComponent =()=>{
    
   const [good,setGood]=useState(0);
   const[neutral,setNeutral]=useState(0);
   const[bad,setBad]=useState(0);

    
  const  onBtnClick=(ev)=>{
    console.dir(ev.target)
    console.log(good)
        const {textContent:key}= ev.target
        if(key==='good')setGood((prev)=>prev+1);
        if(key==='neutral')setNeutral((prev)=>prev+1);
        if(key==='bad')setBad((prev)=>prev+1);
// this.setState((prevState)=>({ [key] : prevState[key]+=1}))
    }

  const  countTotalFeedback=()=>{
       return good + neutral + bad
    }

  const  countPositiveFeedbackPercentage=()=>{
return Math.round((good/countTotalFeedback())*100)
    }

    
        const total = countTotalFeedback();
        return(<FeedBackMain><Section title='Please leave feedback'>
            <Controls 
            options={['good','neutral','bad']}
            onLeaveFeedback={onBtnClick}
            />
            </Section>
            <Section>
            { total >0 ? (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}/>):(<Notification title='There is no feedback'/>)}</Section>
</FeedBackMain>
            )
    }
