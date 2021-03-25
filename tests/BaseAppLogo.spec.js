import { shallowMount } from '@vue/test-utils'
import BaseAppLogo from '../src/components/shared/Installation/BaseAppLogo.vue'

describe('BaseAppLogo.vue', () => {
  it('should match snapshot', () => {
    let wrapper;
    const logo = {
      src: 'https://app.akaunting.com/public/img/akaunting-logo-white.svg',
      description: 'Akaunting-logo'
    }

    wrapper = shallowMount(BaseAppLogo, {
      propsData: {
        logo
      }
    })

    expect(wrapper.element).toMatchSnapshot();
  });
});
