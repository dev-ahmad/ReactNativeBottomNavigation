import HomeStack from "./HomeStack"
import ExploresTACK from "./ExploreStack"
import profileStack from "./ProfileStack"

export default () => ({
  children: [
    {
      stack: HomeStack()
    },
    {
      stack: ExploresTACK()
    },
    {
      stack: profileStack()
    }
  ]
})
