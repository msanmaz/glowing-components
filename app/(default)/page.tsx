export const metadata = {
    title: 'Home - T',
    description: 'Page description',
  }
  
  import Hero from '@/components/hero'
import GlowCard from '@/components/ui/glow-card/glow-card'
import GlowCardContainer from '@/components/ui/glow-card/glow-card-container'

  export default function Home() {
    return (
      <>
        <Hero />
        <div className='card-container'>
        <GlowCardContainer>
            <GlowCard title="Wherever you go, it follows">
                <a>Learn More</a>
            </GlowCard>
            <GlowCard title="Just browse around, with the pointer">
            <a>Learn More</a>
            </GlowCard>
            <GlowCard title="Activate by, getting closer">
            <a>Learn More</a>
            </GlowCard>
            <GlowCard title="I change colors too, if you go around the borders">
            <a>Learn More</a>
            </GlowCard>
        </GlowCardContainer>
        </div>

      </>
    )
  }
  