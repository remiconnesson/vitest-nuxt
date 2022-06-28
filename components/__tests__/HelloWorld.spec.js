import { mount } from '@vue/test-utils'
import { setup, $fetch } from '@nuxt/test-utils-edge'
import HelloWorld from "../HelloWorld.vue"

describe('Hello World of component testing', async () => {

	await setup({

	})

	it('should work', () => {
		expect(true);
	})

	it('should mount', () => {
		const wrapper = mount(HelloWorld);
		expect(wrapper.text()).toMatch(/Hello/);
	})

	it('should auto import ref', () => {
		const wrapper = mount(HelloWorld);
		expect(wrapper.text()).toMatch(/my ref/);
	})
})
