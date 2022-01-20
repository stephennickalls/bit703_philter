import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Home from '@/views/addimage.vue'

describe('Home.vue', () => {
  it('renders welcome message', () => {
    const welcomeText = 'Add An Image'
    const wrapper = shallowMount(Home, {})
    expect(wrapper.text()).to.include(welcomeText)
  })
})
