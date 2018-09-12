import React from 'react';
import { shallow } from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('should render Expenses Summary with 1 expense correctly', () => {
 const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});


test('should render Expenses Summary with multiple expense correctly', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235232}/>);
    expect(wrapper).toMatchSnapshot();
});
