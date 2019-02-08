import React from 'react';
import PartSelector from './PartSelector';


// partKey === FEATURES[index] .... think about {FEATURES[i]}
function PartSelectorList (props) {
        return (
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                    {Object.keys(props.features).map(partType => <PartSelector features={props.features} partKey={partType} selected={props.selected} updateFeature={props.updateFeature}/>)}                       
            </section>
        );
    }

export default PartSelectorList;