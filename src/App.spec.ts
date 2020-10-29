import { mount, shallowMount } from '@vue/test-utils'
import App from './App.vue'
import Hello from './Hello.vue'

test('uses mounts', async () => {
  const wrapper = mount(App)
  expect(wrapper.html()).toContain('Vue 3 + TypeScript + Jest')
  expect(wrapper.html()).toContain('smartcamp')
  expect(wrapper.html()).toContain(100)
  expect(wrapper.html()).toContain(0.1)
  expect(wrapper.html()).toContain('Message: ')

  await wrapper.find('button').trigger('click')
  expect(wrapper.html()).toContain('Message: わーい')
})

test('uses shallowMount', async () => {
  const wrapper = shallowMount(App)
  expect(wrapper.html()).toContain('Vue 3 + TypeScript + Jest')
  expect(wrapper.html()).not.toContain('smartcamp')
  expect(wrapper.html()).not.toContain(100)
  expect(wrapper.html()).not.toContain(0.1)
  expect(wrapper.html()).toContain('Message: ')

  // @ts-ignore
  await wrapper.findComponent(Hello).vm.$emit('say')
  expect(wrapper.html()).toContain('Message: わーい')
})
