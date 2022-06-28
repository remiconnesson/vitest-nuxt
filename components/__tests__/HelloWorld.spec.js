import { mount } from '@vue/test-utils'
import HelloWorld from "../HelloWorld.vue"

it('should work', () => {
	expect(true);
})

it('should mount', () => {
	const wrapper = mount(HelloWorld);
	expect(wrapper.text()).toMatch(/Hello/);
})
