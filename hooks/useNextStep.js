import React, {useEffect, useState} from 'react'
export default function nextStep (step) {
    if(step==2) return 0;
    return step + 1;
}