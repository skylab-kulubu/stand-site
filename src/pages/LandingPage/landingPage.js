import React from 'react'
import TeamComp from '../../components/TeamComp/teamComp'
import AnimatedPage from '../../utils/animatedPage'

const LandingPage = () => {
  return (
    <AnimatedPage>
    <div className='landing-page'>
        <TeamComp />
    </div>
    </AnimatedPage>
  )
}

export default LandingPage