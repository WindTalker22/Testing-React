import React from "react"
import { render, fireEvent, wait } from "@testing-library/react"
import { getData as mockGetData } from "../api"
import StarWarsCharacters from "./StarWarsCharacters"

jest.mock("../api")

test("Rendering StarWarsCharacter Component", () => {
  render(<StarWarsCharacters />)
})

test("Testing Api Call", () => {
  render(<StarWarsCharacters />)
  mockGetData()
  expect(mockGetData).toHaveBeenCalledTimes(1)
})

test("Check if data is called once on next click", () => {
  const { getByText } = render(<StarWarsCharacters />)
  const nextButton = getByText(/next/i)

  fireEvent.click(nextButton)
  expect(mockGetData).toHaveBeenCalledTimes(1)
})

test("Check if data is called once on previous click", () => {
  const { getByText } = render(<StarWarsCharacters />)
  const previousButton = getByText(/previous/i)

  fireEvent.click(previousButton)
  expect(mockGetData).toHaveBeenCalledTimes(1)
})
