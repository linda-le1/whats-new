import React from 'react'
import { shallow } from 'enzyme'
import NewsContainer from './NewsContainer'
import local from '../../data/local'

describe('NewsContainer', () => {
    it ('should have all the data', () => {
        const wrapper = shallow(<NewsContainer
            news={local}
            />)
        expect(wrapper).toMatchSnapshot()
    })
})