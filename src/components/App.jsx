import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { SectionTitle } from './Title/Title';
import { Rates } from './Rates/Rates';
import { Statistic } from './Statistic/Statistic';
import { Section } from './Section/Section'; 
import { Notification } from "./Notification/Notification";

 export class App extends Component {
  state = {
    good: 0,
    bad: 0,
    neutral: 0,
    showNotification: true,
    showStatistics: false,
  };

  countFeedback = rate => {
    this.setState(prevState => {
      return {
        [rate]: prevState[rate] + 1,
        showNotification: false,
        showStatistics: true,
      };
    });
  };

   
   totalCount() {
     const { good, bad, neutral } = this.state;
     return good + bad + neutral; 
   }

   positiveCount() {
     const { good, bad, neutral } = this.state;
     let total = good + bad + neutral;
     return total === 0 ? 0 : (good / total) * 100;
   }

   render() {
     const rates = ['good', 'bad', 'neutral']
     return (
       <div> 
         <SectionTitle title='Please leave feedback' />
         <Rates rates={rates} countFeedback={this.countFeedback} />
         <Section title='STATISTICS'>
           <Notification message={this.state.showNotification ? "There is no feedback" : ''} />
         {this.state.showStatistics && (
  <Statistic 
    good={this.state.good}
    neutral={this.state.neutral}
    bad={this.state.bad}
    total={this.totalCount()}
    positive={this.positiveCount()} />
)}

        </Section>
      </div>
    )
  }
}

