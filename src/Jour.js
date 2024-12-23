import React from "react";

class Jour extends React.Component {

    constructor(props) {
        super(props);
      }

    render() {
        return (
            <div className="card">
                <div className="content">
                    <div className="description">
                        <div className="title">
                            <p className="title">
                                <strong>{this.props.item.title}</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}



export default Jour;
