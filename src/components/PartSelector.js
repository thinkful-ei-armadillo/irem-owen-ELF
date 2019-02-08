import React from 'react';

function PartSelector (props) {

    const options = props.features[props.partKey].map((item, index) => {
        console.log(props.partKey);
        console.log(props.selected);
        // console.log(state);
            
      //PART SELECTOR COMPONENT
      // updateFeature takes current Part category and current item and changes selected state based on the 
      const selectedClass = item.name === props.selected[props.partKey].name ? 'feature__selected' : '';
      const featureClass = 'feature__option ' + selectedClass;
      return <li key={index} className="feature__item">
      <div className={featureClass}
        
        onClick={e => props.updateFeature(props.partKey, item)}> 
        { item.name }
        ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
          .format(item.cost) })
      </div>
    </li>
    })

    return (
      <div className="feature" key={props.partKey}>
          <div className="feature__name">{props.partKey}</div>
          <ul className="feature__list">
            { options }
          </ul>
    </div>
    );
}
export default PartSelector;