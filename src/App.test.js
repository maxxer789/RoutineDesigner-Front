import React from 'react';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';
import App from './App'

import '@testing-library/jest-dom/extend-expect'
import { JsxEmit, textSpanContainsPosition } from 'typescript';

afterEach(cleanup);

it("renders", async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  await screen.findByText('Create Routine');
  expect(screen.getByText("Create Routine")).toBeInTheDocument();
  const apparatuses = screen.getAllByRole('apparatus');
  expect(apparatuses).toHaveLength(5);
});

test("create a routine", async () => {
  jest.spyOn(window, 'fetch')
    .mockResolvedValue({ json: () => ([{ id: 1, name: "apparatus 1", abbreviation: "a1" }, { id: 2, name: "apparatus 2", abbreviation: "a2" }]) });

  render(<App />);

  await screen.findByRole('apparatuses');

  const routineNameField = screen.getByRole("textbox");
  const floorButton = screen.getAllByRole("apparatus")[0];
  const button = screen.getByRole("button");

  const routineName = "test routine";

  fireEvent.change(routineNameField, { target: { value: routineName } });
  fireEvent.click(floorButton);
  fireEvent.click(button);

  jest.spyOn(window, 'fetch')
    .mockResolvedValue({ json: () => ({ id: 1 }) });

  jest.spyOn(window, 'fetch')
    .mockResolvedValue({ json: () => ({ name: routineName, apparatus:{ id: 1, name: "apparatus 1", abbreviation: "a1" }, worth: 1.0, elements: [{}], skillLevel:{} }) });

  await screen.findByText(routineName);

  expect(routineNameField).not.toBeInTheDocument();
  expect(floorButton).not.toBeInTheDocument();
  expect(button).not.toBeInTheDocument();

  const routineNameText = screen.getByText(routineName);
  expect(routineNameText).toBeInTheDocument();
  const apparatusText = screen.getByRole("info-display");
  expect(apparatusText).toBeInTheDocument();
})