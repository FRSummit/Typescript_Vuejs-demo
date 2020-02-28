import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  // it('renders props.msg when passed', () => {
  //   const msg = 'new message'
  //   const wrapper = shallowMount(HelloWorld, {
  //     propsData: { msg }
  //   })
  //   expect(wrapper.text()).toMatch(msg)
  // })

  it('getUserData() testing', () => {
    const wrapper = shallowMount(HelloWorld)
    const c = HelloWorld
    console.log('------------------------------')
    // expect(wrapper.vm.onSubmit).toBe(true)
    // expect(wrapper.text()).toMatch(msg)
  })
})
