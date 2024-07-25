import React from 'react'
import TeamComp from '../../components/TeamComp/teamComp'
import ReverseAnimation from '../../utils/animatedPageReversed'

const LandingPage = () => {
  return (
    <ReverseAnimation>
    <div className='landing-page'>
        <TeamComp />
    </div>
    </ReverseAnimation>
  )
}

export default LandingPage