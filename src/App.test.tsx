import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import React from "react"
import { MemoryRouter } from "react-router"
import { App } from "./App"

describe("Simple working test", () => {
  it("the title is visible", async () => {
    await render(<App />, {
      wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter>,
    })
    screen.debug()
    expect(screen.getByText(/Home/i)).toBeTruthy()
    // expect(screen.getByText(/home/i)).toBeInTheDocument()
  })
})
