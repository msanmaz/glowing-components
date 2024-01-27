import React from 'react'
import GlowCardContainer from './ui/glow-card/glow-card-container'
import GlowCard from './ui/glow-card/glow-card'

const CardSection = () => {
  return (
    <div className='card-container'>
    <GlowCardContainer>
        <GlowCard title="Wherever you go, it follows">
            <a className='glow-a'>Learn More</a>
        </GlowCard>
        <GlowCard title="Just browse around, with the pointer">
        <a className='glow-a'>Learn More</a>
        </GlowCard>
        <GlowCard title="Activate by, getting closer">
        <a className='glow-a'>Learn More</a>
        </GlowCard>
        <GlowCard title="I change colors too, if you go around the borders">
        <a className='glow-a'>Learn More</a>
        </GlowCard>
    </GlowCardContainer>
    </div>
  )
}

export default CardSection