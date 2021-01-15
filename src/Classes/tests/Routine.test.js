import React from 'react';
import { cleanup, render, screen } from '@testing-library/react'
import Routine from './../Routine'

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ name: "Routine 1", apparatus: { id: 1, name: "apparatus 1", abbreviation:"ap"}, worth: 1.2, elements:[{}], skillLevel:{id: 1, division:"division 1", ageGroup:"ageGroup 1"} }),
    })
)

afterEach(cleanup);


it("renders without crashing", async () => {
    render(
        <Routine />
    );
    await screen.findByText("Routine 1");
    expect(screen.getByRole("routine")).toBeInTheDocument();
})