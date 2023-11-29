import { render,  } from "@testing-library/react"
import Revenue from ".."
import { describe } from "vitest"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
})


describe("render correctly", () => {
    render(
        <QueryClientProvider client={queryClient}>
            <Revenue />
        </QueryClientProvider>
    )
    //const element = screen.getByText("Available Balance");
    //const titleElement = screen.getByRole("heading")
   
})
