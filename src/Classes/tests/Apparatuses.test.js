import React from 'react';
import { cleanup, render, screen } from '@testing-library/react'
import Apparatuses from './../Apparatuses'

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve([{ id: 1, name:"apparatus 1", abbreviation:"a1" }, {id: 2, name:"apparatus 2", abbreviation:"a2"}]),
    })
)

afterEach(cleanup);

it("renders without crashin", async () => {
    render(
        <Apparatuses />
    )
    await screen.findByText("Create Routine");
    expect(screen.getByRole("apparatuses")).toBeInTheDocument();
})