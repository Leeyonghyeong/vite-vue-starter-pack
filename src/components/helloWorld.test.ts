import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {
  test('It should rend the message hello world', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'Hello World',
      },
    })

    expect(wrapper.text()).toContain('Hello World')
  })

  test('It should increments value on click', async () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'Hello World',
      },
    })

    const button = '[data-testid="increment-test"]'
    const counter = '[data-testid="count-test"]'

    await wrapper.find(button).trigger('click')

    expect(wrapper.find(counter).text()).toContain('12')
  })

  //show div message when click button
  test('It should show div message when click button', async () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'Hello World',
      },
    })

    const button = wrapper.get('[data-testid="show-message-test"]')

    await button.trigger('click')

    const message = wrapper.get('[data-testid="message-test"]')

    expect(message.text()).toContain('Hello World')
  })
})
