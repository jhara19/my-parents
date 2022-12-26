import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
    return (
        <>
            <h2 className="flex justify-center py-40">
                <ThreeCircles
                    height="100"
                    width="100"
                    color="#1F2937"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="three-circles-rotating"
                    outerCircleColor=""
                    innerCircleColor=""
                    middleCircleColor=""
                />
            </h2>
        </>
    );
};

export default Loader;