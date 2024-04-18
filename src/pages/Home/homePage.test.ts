import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomePage from './HomePage.vue'

describe('HomePage', () => {
  test('increments value on click', () => {
    const wrapper = mount(HomePage)
    // check the hello world text is there
    const helloWorld = wrapper.get('[data-testid="hello-world-test"]')
    expect(helloWorld.text()).toContain('Hello World')
  })
})
