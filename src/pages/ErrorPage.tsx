import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <div className="p-6">
        <h1>Error {error.status}</h1>
        <p>{error.statusText}</p>
      </div>
    )
  }

  return (
    <div className="p-6">
      <h1>Unknown error</h1>
      <p>{(error as Error).message || 'Something went wrong'}</p>
    </div>
  )
}

export default ErrorPage
