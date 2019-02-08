import React, {Component} from 'react';
import PartSelector from './PartSelector'


// partKey === FEATURES[index]
class PartSelectorList extends Component {
    render() {
        return (
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                <div className="feature" key={partType}>
                <div className="feature__name">{partType}</div>
                    <ul className="feature__list">
                    {Object.keys(this.props.FEATURES).map(partType => <PartSelector />)}                        
                    </ul>
                </div>
            </section>
        )};
    }

export default PartSelectorList;