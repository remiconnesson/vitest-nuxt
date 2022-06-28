import { mount } from '@vue/test-utils'
// import { setup, $fetch } from '@nuxt/test-utils-edge'
import ChildComponent from "../ChildComponent.vue"

describe('Hello World of component testing', async () => {

	// await setup({
	// 
	// })

	it('should work', () => {
		expect(true);
	})

	it('should mount', () => {
		const wrapper = mount(ChildComponent);
		expect(wrapper.text()).toMatch(/Hey/);
	})

	it('should auto import GreatChildComponent', () => {
		const wrapper = mount(ChildComponent);
		console.log(wrapper.text());
		expect(wrapper.text()).toMatch(/Holà/);
	})
})
