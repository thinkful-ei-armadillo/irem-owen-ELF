import React, {Component} from 'react';
import {FEATURES} from '../assets/FEATURES';

class PartSelector extends Component {

  render() {
    const options = FEATURES[this.props.partKey].map((item, index) => {
        console.log(this.props.partKey);
        console.log(this.props.selected);
        // console.log(this.state);
            
      //PART SELECTOR COMPONENT
      // updateFeature takes current Part category and current item and changes selected state based on the 
      const selectedClass = item.name === this.props.selected[this.props.partKey].name ? 'feature__selected' : '';
      const featureClass = 'feature__option ' + selectedClass;
      return <li key={index} className="feature__item">
      <div className={featureClass}
        
        onClick={e => this.updateFeature(this.props.partKey, item)}> 
        { item.name }
        ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
          .format(item.cost) })
      </div>
    </li>
    })

    return (
         <div className="feature" key={this.props.partKey}>
              <div className="feature__name">{this.props.partKey}</div>
              <ul className="feature__list">
                { options }
              </ul>
        </div>
        );
  }
}

export default PartSelector;