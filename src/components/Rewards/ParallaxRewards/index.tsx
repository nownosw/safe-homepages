import ParallaxRewardsElement from '@/components/Rewards/ParallaxRewards/ParallaxRewardsElement'
import ParallaxText, { type ParallaxTextProps } from '@/components/Token/ParallaxText'

const ParallaxRewards = (props: ParallaxTextProps) => {
  return (
    <ParallaxText {...props} variant="text-image">
      <ParallaxRewardsElement {...props} />
    </ParallaxText>
  )
}

export default ParallaxRewards
