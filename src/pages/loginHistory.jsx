import React from 'react';
import { getData } from 'src/utils/http-service'

export default function loginHistory() {
    const data = getData("https://citric-banner-411512.uc.r.appspot.com/application/userDetails");
    console.log(data);

    return (
        <div>loginHistory</div>
    )
}
