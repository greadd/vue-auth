import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import RegisterPage from '@/views/RegisterPage'
import actions from '@/store/actions'
import initialState from '@/store/state'

jest.mock('@/store/actions')

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(BootstrapVue)

let wrapper
let store

beforeEach(() => {
  store = new Vuex.Store({
    state: { ...initialState },
    actions,
  })
  wrapper = shallowMount(RegisterPage, { localVue, store })
})

afterEach(() => {
  wrapper.destroy()
})

describe('RegisterPage', () => {
  it('renders the component', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('renders the form', () => {
    const form = wrapper.findComponent({ name: 'BForm' })
    expect(form.exists()).toBe(true)
  })
  it('renders the two input fields', () => {
    const inputFields = wrapper.findAllComponents({ name: 'BFormInput' })
    expect(inputFields.length).toBe(2)
  })
  it('renders the register button correctly', () => {
    const regButton = wrapper.findComponent({ name: 'BButton' })
    expect(regButton.exists()).toBe(true)
    expect(regButton.text()).toEqual('Зарегистрироваться')
  })
  it('calls the registerUser action, when form is submitted with a valid data', () => {
    wrapper.setData({ email: 'test@test.ru', password: 'Ab123456' })
    wrapper.findComponent({ name: 'BForm' }).trigger('submit.prevent')
    expect(actions.registerUser).toBeCalled()
  })
})
