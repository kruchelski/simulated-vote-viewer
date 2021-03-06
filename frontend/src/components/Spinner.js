import React, { Fragment } from 'react'
import css from './spinner.module.css';

export default function Spinner({ description }) {
    return (
        <Fragment>
            <div className={css.flexRow}>
                <div className="preloader-wrapper small active">
                    <div className="spinner-layer spinner-blue-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div><div className="gap-patch">
                            <div className="circle"></div>
                        </div><div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
                <div style={{fontSize:'1.7rem', marginTop:'15px'}}>
                    {description}
                </div>
            </div>
        </Fragment>
    )
}
