import React from 'react';
import { cleanup, render, screen } from '@testing-library/react'
import SkillGroups from './../SkillGroups'

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ skillGroups: [{ id: 1, name:"skillGroup 1" }, {id: 2, name:"apparatus 2"}]}),
    })
)

it("renders without crashing", async () => {
    render(
        <SkillGroups />
    )
    await screen.findByText("Select a skill group to choose a new element from");
    expect(screen.getByRole("skillGroups")).toBeInTheDocument();
})