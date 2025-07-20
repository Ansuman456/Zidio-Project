import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops!</h1>
      <p>Something went wrong. try reuploading the file in dashboard</p>
      <pre>{error?.message || JSON.stringify(error)}</pre>
    </div>
  );
}
