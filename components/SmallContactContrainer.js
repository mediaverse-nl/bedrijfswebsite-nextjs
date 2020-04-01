import React from 'react'

const SmallContactContainer = ({}) => (
    <div>
        <style jsx>{`  
            input, select, textarea{
                background: #eee;
                border-radius: 0px;
                border: 0px;
                padding:10px;
            }
            h4 {
                color: #393939;
                font-size: 18px;
                font-weight: 500;
                line-height: 1.2em;
                margin-bottom: 8px;
                margin-top: 0;
            }
        `}</style>
        <h4 className="h4">Direct contact opnemen</h4>
        <div className="form-group">
             <input type="text" className="form-control" id="" placeholder="Uw naam" />
        </div>
        <div className="form-group">
             <input type="email" className="form-control" id="" placeholder="Uw e-mailadres" />
        </div>
        <div className="form-group">
            {/*<label htmlFor="exampleFormControlTextarea1">Example textarea</label>*/}
            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Omschijving" rows="3"></textarea>
        </div>
        <button type="submit" className="blue-gradient btn btn-blue btn-lg btn-block">Versturen</button>

    </div>
)

export default SmallContactContainer