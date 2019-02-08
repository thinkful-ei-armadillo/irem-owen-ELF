import React, { Component } from 'react';
import './App.css';
import {Header} from './assets/Header';
import PartSelectorList from './components/PartSelectorList';
import {FEATURES} from './assets/FEATURES';
import Invoice from './components/Invoice';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
  }

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {

    //REMOVE BETWEEN HERE
    const features = Object.keys(FEATURES)
    //PartSelector
          .map(partKey => {
            const options = FEATURES[partKey].map((item, index) => {
              const selectedClass = item.name === this.state.selected[partKey].name ? 'feature__selected' : '';
              const featureClass = 'feature__option ' + selectedClass;
              // updateFeature takes current Part category and current item and changes selected state based on the 
              return <li key={index} className="feature__item">
                <div className={featureClass}
                  
                  onClick={e => this.updateFeature(partKey, item)}> 
                  { item.name }
                  ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(item.cost) })
                </div>
              </li>
            });

//PartSelectorList
            return <div className="feature" key={partKey}>
              <div className="feature__name">{partKey}</div>
              <ul className="feature__list">
                { options }
              </ul>
            </div>
          });
// REMOVE ABOVE HERE


    return (
      <div className="App">
          <Header />
        <main>
          <PartSelectorList features={FEATURES} />
          <Invoice />
        </main>
      </div>
    );
  }
}

export default App;  
