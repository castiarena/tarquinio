import { createBrowserRouter } from 'react-router-dom'
import { Root } from './Root'
import { ErrorRoute } from './ErrorRoute'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorRoute />
    }
])