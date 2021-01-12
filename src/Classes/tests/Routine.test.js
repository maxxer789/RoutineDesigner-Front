import React from 'react'
import ReactDOM from 'react-dom'
import {withRouter} from 'react-router'
import '@testing-library/jest-dom/extend-expect'
import Routine from './../Routine'
import {render, cleanup, screen, getByTestId} from '@testing-library/react'
import renderer from "react-test-renderer"
import { act } from 'react-dom/test-utils'

const props ={
    routineId: 12
}

globalThis.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({
        routineId: 12,
        routineName: "Routine 12"
    })
}))

const Router = withRouter(({location}) =>(
    <div data-testid="routine-display">{location.pathname} </div>
))

jest.mock('react-router', () =>({
    withRouter: jest.fn(Comp => props => <Comp {...props} />)
}))

afterEach(cleanup);

it('displays routine', () => {
    const {getByTestId} = render(<Routine />)
    expect(getByTestId('router-display')).toHaveTextContent('')
})