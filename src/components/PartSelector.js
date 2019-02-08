import React, {Component} from 'react';

class PartSelector extends Component {
  render() {
    return (

          
          
          const options = FEATURES[partKey].map((item, index) => {
            
            
            //PART SELECTOR COMPONENT
            // updateFeature takes current Part category and current item and changes selected state based on the 
            const selectedClass = item.name === this.state.selected[partKey].name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;
            return <li key={index} className="feature__item">
              <div className={featureClass}
                
                onClick={e => this.updateFeature(partKey, item)}> 
                { item.name }
                ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(item.cost) })
              </div>
            </li>
          });
    )
  }
}

export default PartSelector;